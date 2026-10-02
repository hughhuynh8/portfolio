import { readFile, readdir, access } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));

try {
  const config = JSON.parse(await readFile(new URL('../namecheap.local', import.meta.url), 'utf8'));
  const { host, username, remotePath, port = 21098, identityFile, identityAgent } = config;
  if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]*$/.test(host ?? '') ||
      !/^[a-zA-Z0-9_][a-zA-Z0-9_-]*$/.test(username ?? '') ||
      !/^\/[a-zA-Z0-9_./-]+$/.test(remotePath ?? '') || remotePath === '/' ||
      !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('Set a valid host, username, absolute remotePath, and numeric port in namecheap.local.');
  }
  const sshArgs = [];
  if (identityAgent !== undefined) {
    if (typeof identityAgent !== 'string' || !identityAgent.trim()) {
      throw new Error('identityAgent must be a non-empty path to your SSH agent socket.');
    }
    const agentPath = identityAgent.startsWith('~/')
      ? resolve(homedir(), identityAgent.slice(2))
      : resolve(root, identityAgent);
    sshArgs.push('-o', `IdentityAgent=${agentPath}`);
  }
  if (identityFile !== undefined) {
    if (typeof identityFile !== 'string' || !identityFile.trim()) {
      throw new Error('identityFile must be a non-empty path to your SSH private key.');
    }
    const keyPath = identityFile.startsWith('~/')
      ? resolve(homedir(), identityFile.slice(2))
      : resolve(root, identityFile);
    try {
      await access(keyPath);
    } catch {
      throw new Error(`SSH key not found or inaccessible: ${keyPath}`);
    }
    sshArgs.push('-i', keyPath, '-o', 'IdentitiesOnly=yes');
  }
  await access(new URL('../dist/index.html', import.meta.url));
  const files = (await readdir(new URL('../dist/', import.meta.url))).sort();
  const args = ['-r', '-P', String(port), ...sshArgs, ...files.map((file) => `dist/${file}`), `${username}@${host}:${remotePath}/`];
  if (process.argv.includes('--dry-run')) {
    console.log('Upload command:', ['scp', ...args].join(' '));
  } else {
    console.log(`Uploading dist contents to ${host}:${remotePath}/`);
    const result = spawnSync('scp', args, { cwd: root, stdio: 'inherit', shell: false });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error(`Upload failed (exit ${result.status ?? result.signal}).`);
    console.log('Upload complete.');
  }
} catch (error) {
  console.error(error.code === 'ENOENT'
    ? 'Missing configuration or build. Copy namecheap.example.json to namecheap.local, fill in hosting details, and run npm run build first.'
    : error.message);
  process.exitCode = 1;
}
