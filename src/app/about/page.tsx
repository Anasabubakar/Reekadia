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
                      "url('/images/song-cover-art/reekadia-portrait.png')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-4 sm:p-6 rounded-3xl border-t border-white/20 backdrop-blur-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Reekado Banks</h1>
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Ayoleyi Hanniel Solomon</p>
                    <p className="text-sm text-gray-300 leading-relaxed font-body">
                      Popularly known as Reekado Banks (Ayoleyi Hanniel Solomon, born December 6, 1993) is a Nigerian singer and songwriter loved for his unique sound and soulful storytelling. Over the years, he has grown into one of Afrobeats' most exciting voices, creating music that connects deeply with fans across Nigeria and around the world.
                      <br/><br/>
                      From winning Rookie of the Year (2014), Next Rated (2015), and Revelation of the Year (2017) at The Headies, to seeing his debut album Spotlight break into the Billboard World Albums Top 10, Reekado has built a legacy of hits and unforgettable moments. Now leading his own label REEKADIA, he continues to raise the game with his sophomore album The Game Needs You, a bold reminder that Afrobeats isn't complete without Reekado Banks.
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

          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;