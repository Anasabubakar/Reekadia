'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Calendar, ShoppingBag } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-6 drop-shadow-2xl"
          >
            Gbedu Wey Dey <br/> Burst Brain
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto"
          >
            The Official Home of Reekado Banks & Reekadia Records
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/music"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2"
            >
              <Play size={20} fill="currentColor" /> Listen Now
            </Link>
            <Link 
              href="/tour"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Calendar size={20} /> Tour Dates
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 aspect-square relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl">
                 {/* Placeholder for Album Art */}
                 <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-700 font-bold text-4xl">
                    ALBUM ART
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h4 className="text-purple-400 font-bold uppercase tracking-widest mb-2">New Release</h4>
              <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 leading-none">The Game <br/> Needs You</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Experience the latest sonic masterpiece from Reekado Banks. A journey through rhythm, soul, and pure energy. Stream it now on all platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-xl bg-[#1DB954] text-black font-bold flex items-center gap-2 hover:bg-[#1ed760] transition-colors">
                   Spotify
                </button>
                <button className="px-6 py-3 rounded-xl bg-[#FA243C] text-white font-bold flex items-center gap-2 hover:bg-[#ff364e] transition-colors">
                   Apple Music
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Music Videos', subtitle: 'Watch the visuals', link: '/videos', icon: <Play /> },
              { title: 'Merch Store', subtitle: 'Wear the brand', link: '/merch', icon: <ShoppingBag /> },
              { title: 'Tour Dates', subtitle: 'See it live', link: '/tour', icon: <Calendar /> },
            ].map((item, index) => (
              <Link href={item.link} key={index} className="group">
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between min-h-[250px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-purple-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-purple-600/20"></div>
                  
                  <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-purple-600 transition-colors">
                    {item.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase">{item.title}</h3>
                    <p className="text-gray-400 flex items-center gap-2 group-hover:text-white transition-colors">
                      {item.subtitle} <ArrowRight size={16} />
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase">Join the Family</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">
            Be the first to know about new releases, exclusive merch drops, and tour announcements.
          </p>
          
          <form className="max-w-md mx-auto relative">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all pr-36"
            />
            <button 
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-colors uppercase text-sm tracking-wide"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}