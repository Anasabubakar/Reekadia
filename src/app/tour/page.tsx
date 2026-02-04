'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const tourDates = [
  { city: 'Lagos', country: 'Nigeria', venue: 'Eko Convention Center', date: 'Dec 20, 2025', status: 'Selling Fast' },
  { city: 'London', country: 'UK', venue: 'O2 Indigo', date: 'Feb 14, 2026', status: 'Available' },
  { city: 'New York', country: 'USA', venue: 'Irving Plaza', date: 'Mar 05, 2026', status: 'Sold Out' },
  { city: 'Accra', country: 'Ghana', venue: 'Untamed Empire', date: 'Apr 10, 2026', status: 'Available' },
  { city: 'Nairobi', country: 'Kenya', venue: 'Ngong Racecourse', date: 'May 22, 2026', status: 'Available' },
];

export default function TourPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Tour Dates</h1>
        <p className="text-xl text-gray-400">Catch the energy live on stage.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {tourDates.map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-purple-500/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 w-full md:w-auto">
              <div className="w-20 h-20 bg-white/5 rounded-2xl flex flex-col items-center justify-center border border-white/10 text-center shrink-0">
                <span className="text-xs text-purple-400 font-bold uppercase">{tour.date.split(' ')[0]}</span>
                <span className="text-2xl font-black text-white">{tour.date.split(' ')[1].replace(',', '')}</span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{tour.city}, {tour.country}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin size={16} />
                  <span>{tour.venue}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between w-full md:w-auto gap-6">
               <span className={`text-sm font-bold uppercase tracking-wider ${
                   tour.status === 'Sold Out' ? 'text-red-500' : 
                   tour.status === 'Selling Fast' ? 'text-orange-400' : 'text-green-500'
               }`}>
                 {tour.status}
               </span>
               
               <button 
                disabled={tour.status === 'Sold Out'}
                className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all ${
                    tour.status === 'Sold Out' 
                    ? 'bg-white/5 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-black hover:bg-purple-500 hover:text-white'
                }`}
               >
                 {tour.status === 'Sold Out' ? 'Sold Out' : 'Get Tickets'}
                 {tour.status !== 'Sold Out' && <ExternalLink size={16} />}
               </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
         <p className="text-gray-500 mb-6">Don't see your city?</p>
         <button className="text-purple-400 hover:text-white font-bold uppercase tracking-wider border-b border-purple-400 hover:border-white transition-colors pb-1">
            Request a Show
         </button>
      </div>
    </div>
  );
}
