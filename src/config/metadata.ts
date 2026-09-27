import { SPACE_LOGOS } from './navigation';

export const publicPaths = ['/', '/about', ...SPACE_LOGOS.map(({ id }) => `/${id}`)];
export const siteOrigin = 'https://hughhuynh.com';

export function getMetadata(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const project = SPACE_LOGOS.find(({ id }) => path === `/${id}`);
  const isAbout = path === '/about';
  const title = project
      ? `${project.client} case study | Hugh Huynh portfolio`
      : isAbout
        ? 'About Hugh Huynh | Software Engineer & Tech Lead'
        : 'Hugh Huynh portfolio | Software Engineer & Tech Lead';
  const description = project
        ? `${project.client}: ${project.headline}. Explore Hugh Huynh's work as ${project.role}, using ${project.techStack.slice(0, 3).join(', ')}.`
        : isAbout
          ? 'Meet Hugh Huynh, a software engineer and tech lead with over 19 years of experience building web applications for leading travel and retail brands.'
          : "Explore Hugh Huynh's software engineering portfolio, featuring work for Qantas, SAP, Gucci, and leading retail brands.";
  return { path, title, description, url: new URL(path, siteOrigin).href };
}
