'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const careerMilestones = [
  {
    year: '2014',
    title: 'Signed to Mavin Records',
    description: 'Declared Rookie of the Year, marking the start of a legendary journey in the Nigerian music industry.',
    highlight: false,
  },
  {
    year: '2015',
    title: "Headies 'Next Rated'",
    description: 'The defining moment that cemented his status as the future of Afrobeats. A highly contested victory that sparked conversations worldwide.',
    highlight: true,
  },
  {
    year: '2016',
    title: 'Spotlight Album',
    description: "Debut album hitting #10 on Billboard World Albums chart, featuring smash hits like 'Ladies and Gentlemen'.",
    highlight: false,
  },
  {
    year: '2018',
    title: 'Establishment of Banks Music',
    description: 'Transitioning from artist to mogul, laying the groundwork for what would become Reekadia Records.',
    highlight: false,
  },
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen w-full text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">

      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow flex flex-col items-center justify-start px-4 py-12 md:py-20 w-full">
          <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Artist Profile Section */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10">
                <div
                  className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTs4puAZwAsYPIc7JyVNVaARP5glMrFeMu1cLtHFbUNK0DRzw_bGcRzrHAssrbDfM_jve8jG9h9XqohJRBRwA5WwW7IK_jjvuTXRMC523PjfiROaEGtqKyWB1tjlW6lmPuxEynhCN9rZh9z58-k2NY29J_9wm8g0D3nN3wfU7tFOnccxTbucFIuvwf1EcKaFUmFPNtrRZUE5Nen7Grm-ZTAwmB-4Ovy1LGb-rFBNRN2BAU3uGOQhDzfDIBAoIuo-dbikxoJITRtOg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-4 sm:p-6 rounded-3xl border-t border-white/20 backdrop-blur-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Reekado Banks</h1>
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Ayoleyi Hanniel Solomon</p>
                    <p className="text-sm text-gray-300 leading-relaxed font-body">
                      A powerhouse of Afrobeats, blending soulful melodies with energetic rhythms. From his breakout as the "Next Rated" star to establishing his own empire, Reekado continues to redefine the sound of Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Milestones Section */}
            <div className="lg:col-span-7 flex flex-col pt-4">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl animate-spin-slow">history_edu</span>
                <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-white">Career Milestones</h2>
              </div>
              <div className="relative pl-8 border-l border-white/10 space-y-12 pb-8">
                {careerMilestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {milestone.highlight ? (
                      <div className="absolute -left-[45px] top-[-10px] w-8 h-8 rounded-full bg-primary/20 border border-primary glow-bubble animate-pulse flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                      </div>
                    ) : (
                      <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-white/10 border border-white/20 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(236,19,19,0.5)] transition-all"></div>
                    )}
                    <span className="text-primary font-mono text-sm tracking-widest">{milestone.year}</span>
                    <div
                      className={clsx(
                        'mt-2 p-4 rounded-xl transition-colors',
                        milestone.highlight
                          ? 'relative glass-panel rounded-2xl border border-primary/40 shadow-[0_0_30px_rgba(236,19,19,0.15)]'
                          : 'glass-panel-light border-l-2 border-primary/50 hover:bg-white/5'
                      )}
                    >
                      {milestone.highlight && (
                        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full"></div>
                      )}
                      <div className="relative">
                        {milestone.highlight && (
                          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-primary/30">Major Award</span>
                        )}
                        <h3 className="text-lg font-bold text-white mt-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{milestone.description}</p>
                        {milestone.highlight && (
                          <div className="flex justify-between items-start mt-2">
                            <span className="material-symbols-outlined text-4xl sm:text-5xl text-primary/80 drop-shadow-[0_0_10px_rgba(236,19,19,0.5)]">emoji_events</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Reekadia Records Section (Obsidian Card) */}
            <div className="lg:col-span-12 mt-4">
              <div className="obsidian-card w-full rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute -right-12 -bottom-24 text-white opacity-[0.03] transform rotate-[-15deg] transition-transform duration-1000 group-hover:rotate-0">
                  <span className="material-symbols-outlined text-[350px]">graphic_eq</span>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                  <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
                    <div className="inline-flex items-center gap-3 justify-center md:justify-start">
                      <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 backdrop-blur-md">
                        <span className="material-symbols-outlined text-white text-xl">graphic_eq</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-[0.15em] uppercase">Reekadia Records</h2>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      More than a label, Reekadia is a movement. An obsidian monolith in the music industry, dedicated to discovering and polishing the rawest gems of African talent. We are the future of sound.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Talent Management</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Music Production</span>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">Global Distribution</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 shrink-0 mt-8 md:mt-0">
                    <div className="w-32 h-32 rounded-full border-2 border-white/10 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-inner">
                      <span className="material-symbols-outlined text-5xl text-gray-500/50">album</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <button className="px-6 sm:px-8 py-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all font-bold text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(236,19,19,0.5)]">
                      Visit Label Site
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;