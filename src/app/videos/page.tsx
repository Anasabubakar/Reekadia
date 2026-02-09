'use client';

import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 'la0krkuGOuc',
    title: 'Mukutu (Official Video)',
    category: 'Music Video',
  },
  {
    id: 'bLyxCWKbWzk',
    title: 'The Game Needs You | The Journey (Part 2)',
    category: 'Vlog',
  },
  {
    id: 'yTojxQyETDI',
    title: 'Reekado Banks ft Mayorkun - Glamorous (Official Video)',
    category: 'Music Video',
  },
];

const VideosPage = () => {
  return (
    <div className="relative min-h-screen w-full text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow flex flex-col items-center px-4 py-8 md:py-12 w-full gap-12 sm:gap-16">
          <section className="w-full max-w-4xl flex flex-col items-center gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
              >
                Videos
              </motion.h1>
            </div>
            
            <div className="w-full space-y-12">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel rounded-2xl overflow-hidden"
                >
                  <div className="aspect-video bg-black relative">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white ${
                        video.category === 'Music Video' ? 'bg-red-600' : 'bg-blue-600'
                      }`}>
                        {video.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VideosPage;