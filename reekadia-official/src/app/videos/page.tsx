'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  { title: 'Ozumba Mbadiwe', type: 'Official Video', views: '20M', thumbnail: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Rora', type: 'Official Video', views: '15M', thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Options', type: 'Official Video', views: '8M', thumbnail: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Tour Diary: London', type: 'Behind The Scenes', views: '500K', thumbnail: 'https://images.unsplash.com/photo-1514525253440-b393452e8d03?q=80&w=2070&auto=format&fit=crop' },
];

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Visuals</h1>
        <p className="text-xl text-gray-400">Watch the music come to life.</p>
      </motion.div>

      {/* Featured Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-2 rounded-3xl mb-20 overflow-hidden relative group aspect-video"
      >
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            {/* Placeholder for Featured Video Embed */}
             <div className="text-center">
                <Play size={64} className="text-white mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-gray-500 uppercase tracking-widest font-bold">Featured Video: The Game Needs You</p>
             </div>
        </div>
      </motion.div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${video.thumbnail})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform">
                  <Play fill="currentColor" size={24} className="ml-1" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{video.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-500 uppercase tracking-wider font-medium">
              <span>{video.type}</span>
              <span>{video.views} Views</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
