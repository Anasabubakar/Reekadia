'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const releases = [
  { title: 'The Game Needs You', year: '2025', type: 'Album' },
  { title: 'Ozumba Mbadiwe', year: '2021', type: 'EP' },
  { title: 'Off The Record', year: '2020', type: 'EP' },
  { title: 'Spotlight', year: '2016', type: 'Album' },
  { title: 'Rora', year: '2019', type: 'Single' },
  { title: 'Put In Pressure', year: '2019', type: 'Single' },
];

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Discography</h1>
        <p className="text-xl text-gray-400">The complete collection of sounds.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {releases.map((release, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group glass-card p-4 rounded-3xl"
          >
            <div className="aspect-square bg-neutral-900 rounded-2xl mb-4 overflow-hidden relative">
              {/* Placeholder for Art */}
              <div className="absolute inset-0 flex items-center justify-center text-neutral-800 font-bold text-6xl uppercase tracking-tighter">
                {release.title.charAt(0)}
              </div>
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <button className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                  <Play fill="currentColor" className="ml-1" />
                </button>
              </div>
            </div>
            
            <div className="px-2 pb-2">
              <h3 className="text-xl font-bold text-white truncate">{release.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                <span>{release.type}</span>
                <span>{release.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
