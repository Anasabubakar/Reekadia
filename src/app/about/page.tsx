'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-8">
          The Story
        </h1>

        <div className="glass-panel p-8 md:p-12 rounded-3xl mb-12">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light mb-6">
            <strong className="text-purple-400 font-bold">Reekado Banks</strong> is more than just an artist; he is a movement. 
            Born Ayoleyi Hanniel Solomon, he burst onto the scene with a unique blend of Afro-pop that resonated instantly with the streets and the elites alike.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From his early days winning the Next Rated award to establishing <strong className="text-white">Reekadia Records</strong>, 
            his journey has been defined by consistency, versatility, and hit after hit. He doesn't just make music; he creates anthems that define moments in time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">The Vision</h3>
                <p className="text-gray-400">
                    To bridge the gap between African sounds and the global stage, creating a legacy that transcends borders and generations through the power of rhythm and melody.
                </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase">The Label</h3>
                <p className="text-gray-400">
                    Reekadia Records is an independent powerhouse focused on nurturing talent and delivering premium sonic experiences. It is home to creativity without boundaries.
                </p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
