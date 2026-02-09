'use client';

import React from 'react';
import { motion } from 'framer-motion';

const tourDates = [
  {
    date: 'NOV 12',
    day: 'Tuesday',
    city: 'London, UK',
    venue: 'O2 Academy Brixton',
    status: 'Tickets',
  },
  {
    date: 'NOV 14',
    day: 'Thursday',
    city: 'Paris, France',
    venue: 'Le Trianon',
    status: 'Tickets',
  },
  {
    date: 'NOV 18',
    day: 'Monday',
    city: 'Berlin, DE',
    venue: 'Verti Music Hall',
    status: 'Tickets',
  },
  {
    date: 'NOV 22',
    day: 'Friday',
    city: 'Amsterdam, NL',
    venue: 'Melkweg',
    status: 'Sold Out',
  },
  {
    date: 'DEC 05',
    day: 'Thursday',
    city: 'Lagos, NG',
    venue: 'Eko Convention Center',
    status: 'Tickets',
  },
];

const TourPage = () => {
  return (
    <div className="font-display text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <main className="flex-1 flex flex-col w-full relative pt-20">

        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 py-10 lg:py-16 flex justify-center">
          <div className="w-full max-w-[1024px] rounded-2xl overflow-hidden relative group">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIPRipuHQC3LTR3vLJ37SuI_82TV-81MOkMQUBjrLQtfjX_Bq6KrYvwmcuFRr45cvqy2gmNvV-735YzkAlS5yj428eaaQv2w4OXkkj6zfKCCNccjBslYl0FLUiGg93ADumSFsIB-NzY9lAWy9On0l2qJTYrA3GUJMwOpSASGpnWOjLqCH7srvydwwqYc2QM-RCtF8sMJjnwnOCg-mdoX_Ay3e3pdXZsJkvzr8BQq1qQM2RSDRilWacpURkI6qoABbwEndxSEkM4Zo")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#221010] via-[#221010]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#221010]/80 via-transparent to-[#221010]/80"></div>
            <div className="relative z-10 flex flex-col items-center justify-end min-h-[480px] p-4 sm:p-8 text-center gap-6">
              <div className="flex flex-col gap-2 items-center">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-2">
                  World Tour 2024
                </span>
                <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tighter text-refraction uppercase max-w-4xl drop-shadow-2xl">
                  Ozumba Mbadiwe
                </h1>
                <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto drop-shadow-lg">
                  Experience the sound of the new wave live in your city.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="h-12 px-8 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-red-600 hover:shadow-[0_0_30px_rgba(236,19,19,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>View Dates</span>
                </button>
                <button className="h-12 px-8 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  <span>Watch Trailer</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 py-5 flex justify-center">
          <div className="w-full max-w-[960px] flex items-center justify-between border-b border-white/10 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">public</span>
              Tour Dates
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-white/50 text-sm font-medium">
              <span className="material-symbols-outlined text-[18px]">info</span>
              <span>All times are local</span>
            </div>
          </div>
        </section>

        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 pb-20 flex justify-center">
          <div className="w-full max-w-[960px] flex flex-col gap-4">
            {tourDates.map((tour, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel group relative flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl hover:bg-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(236,19,19,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 w-full md:w-auto text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start min-w-[100px]">
                    <span className="text-primary font-black text-xl tracking-wider">{tour.date}</span>
                    <span className="text-white/40 text-sm font-bold uppercase">{tour.day}</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 group-hover:text-primary/90 transition-colors">{tour.city}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-1.5 text-white/60">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      <span className="text-sm font-medium">{tour.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 mt-6 md:mt-0 w-full md:w-auto">
                  {tour.status === 'Sold Out' ? (
                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/50 text-sm font-bold uppercase tracking-wider cursor-not-allowed">
                      Sold Out
                    </div>
                  ) : (
                    <button className="w-full md:w-auto h-12 px-8 rounded-full bg-white/5 border border-white/20 text-white font-bold uppercase text-sm tracking-wider hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(236,19,19,0.4)] group-hover:bg-white/10">
                      Tickets
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 pb-20 flex justify-center">
          <div className="w-full max-w-[960px] glass-bubble rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-1000"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full"></div>
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-2">
                <span className="material-symbols-outlined text-white text-3xl">mail</span>
              </div>
              <div className="space-y-2 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">JOIN THE REEKADICTS</h2>
                <p className="text-white/70 text-base sm:text-lg">Join the Reekadia mailing list for exclusive presale codes, liquid merch drops, and tour alerts.</p>
              </div>
              <form className="w-full max-w-md mt-4 flex flex-col sm:flex-row gap-3">
                <input className="flex-1 h-14 px-6 rounded-full bg-[#221010]/50 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-sm transition-all" placeholder="Enter your email address" type="email" />
                <button className="h-14 px-8 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-red-600 hover:shadow-[0_0_20px_rgba(236,19,19,0.5)] transition-all whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TourPage;