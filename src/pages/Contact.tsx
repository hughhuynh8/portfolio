import React from 'react';
import { Mail, MessageSquare, Send, Globe, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-slate-200">
      <div className="border-b border-white/10 pb-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>TRANSMISSION BEACON</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white font-orbitron tracking-tight mb-4">
          ESTABLISH CONTACT
        </h1>
        <p className="text-lg text-slate-400 font-space leading-relaxed">
          Open for architectural consulting, high-impact staff engineering roles, and cutting-edge creative digital collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-orbitron">Direct Comm Channel</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Send a message directly to Hugh’s comms terminal for project inquiries and engineering leadership.
            </p>
          </div>
          <a
            href="mailto:contact@hugh.space"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono tracking-wider transition-all"
          >
            <Send className="w-4 h-4" />
            <span>TRANSMIT EMAIL</span>
          </a>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-orbitron">Signal Relays</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Connect across global professional repositories and developer social networks.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub (opens in a new tab)"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-sm border border-white/10 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn (opens in a new tab)"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-sm border border-white/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
