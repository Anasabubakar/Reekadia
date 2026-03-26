'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/*
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
*/

const TourPage = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const touchStart = React.useRef<{ x: number; y: number } | null>(null);
  const galleryImages = [
    '/images/reekadia-tour-gallery-images/1.png',
    '/images/reekadia-tour-gallery-images/2.png',
    '/images/reekadia-tour-gallery-images/3.png',
    '/images/reekadia-tour-gallery-images/4.png',
    '/images/reekadia-tour-gallery-images/5.png',
    '/images/reekadia-tour-gallery-images/6.png',
    '/images/reekadia-tour-gallery-images/7.png',
  ];

  React.useEffect(() => {
    if (activeIndex === null) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
        return;
      }
      if (activeIndex === null) return;
      const total = galleryImages.length;
      if (event.key === 'ArrowRight') {
        setActiveIndex((activeIndex + 1) % total);
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((activeIndex - 1 + total) % total);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [activeIndex]);

  const currentImage = activeIndex === null ? null : galleryImages[activeIndex];

  return (
    <div className="font-display text-white overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <main className="flex-1 flex flex-col w-full relative pt-20">

        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 py-10 lg:py-16 flex justify-center">
          <div className="w-full max-w-[1024px] rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIPRipuHQC3LTR3vLJ37SuI_82TV-81MOkMQUBjrLQtfjX_Bq6KrYvwmcuFRr45cvqy2gmNvV-735YzkAlS5yj428eaaQv2w4OXkkj6zfKCCNccjBslYl0FLUiGg93ADumSFsIB-NzY9lAWy9On0l2qJTYrA3GUJMwOpSASGpnWOjLqCH7srvydwwqYc2QM-RCtF8sMJjnwnOCg-mdoX_Ay3e3pdXZsJkvzr8BQq1qQM2RSDRilWacpURkI6qoABbwEndxSEkM4Zo"
                alt="Reekado Banks tour hero"
                fill
                sizes="100vw"
                quality={70}
                priority
                className="object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#221010] via-[#221010]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#221010]/80 via-transparent to-[#221010]/80"></div>
            <div className="relative z-10 flex flex-col items-center justify-end min-h-[480px] p-4 sm:p-8 text-center gap-6">
              <div className="flex flex-col gap-2 items-center">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-[0.15em] text-white/90 mb-2">
                  World Tour 2026
                </span>
                <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tighter text-refraction uppercase max-w-4xl drop-shadow-2xl">
                  THE GAME NEEDS YOU
                </h1>
                <p className="text-white/80 text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto drop-shadow-lg">
                  Experience the legendary sounds of Reekado Banks live in your city.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a href="#tour-dates" className="h-12 px-8 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-red-600 hover:shadow-[0_0_30px_rgba(236,19,19,0.4)] transition-all duration-300 flex items-center justify-center gap-2 block">
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  <span>View Dates</span>
                </a>
                <button className="h-12 px-8 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm text-white font-bold tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">play_circle</span>
                  <span>Watch Trailer</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tour Dates Section */}
        <section
          id="tour-dates"
          className="relative z-10 w-full px-4 sm:px-6 lg:px-40 py-5 flex justify-center"
        >
          <div className="w-full max-w-[960px] flex items-center justify-between border-b border-white/10 pb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl">
                public
              </span>
              Tour Dates
            </h2>
          </div>
        </section>
        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 pb-20 flex justify-center">
          <div className="w-full max-w-[960px] flex flex-col gap-4">
            <div className="glass-panel group relative flex flex-col items-center justify-center p-6 rounded-2xl h-48">
              <h3 className="text-white text-3xl font-bold">Dates Coming Soon!</h3>
              <p className="text-white/70 text-lg">Stay tuned for updates.</p>
            </div>
          </div>
        </section>

        {/* Original Tour Dates Section (Commented Out) */}
        {/*
        <section id="tour-dates" className="relative z-10 w-full px-4 sm:px-6 lg:px-40 py-5 flex justify-center">
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
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 group-hover:text-primary/90 transition-colors">
                      {tour.city}
                    </h3>
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
        */}

        {/* Tour Gallery Section */}
        <section className="relative z-10 w-full px-4 sm:px-6 lg:px-40 py-16 flex justify-center">
          <div className="w-full max-w-[1200px]">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-4xl">collections</span>
                Tour Gallery
              </h2>
              <div className="hidden sm:flex items-center gap-2 text-white/50 text-sm font-medium">
                <span>Experience the energy of past performances</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={src}
                      alt={`Reekadia tour gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      type="button"
                      aria-label="Open image"
                      className="size-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                      onClick={() => setActiveIndex(index)}
                    >
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {currentImage ? (
              <div
                className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
                onClick={() => setActiveIndex(null)}
                onTouchStart={(event) => {
                  const touch = event.touches[0];
                  if (!touch) return;
                  touchStart.current = { x: touch.clientX, y: touch.clientY };
                }}
                onTouchEnd={(event) => {
                  if (!touchStart.current) return;
                  const touch = event.changedTouches[0];
                  if (!touch) return;
                  const deltaX = touch.clientX - touchStart.current.x;
                  const deltaY = touch.clientY - touchStart.current.y;
                  const absX = Math.abs(deltaX);
                  const absY = Math.abs(deltaY);
                  touchStart.current = null;

                  if (absY > 80 && absY > absX) {
                    setActiveIndex(null);
                    return;
                  }

                  if (absX > 80 && absX > absY) {
                    if (activeIndex === null) return;
                    const total = galleryImages.length;
                    if (deltaX < 0) {
                      setActiveIndex((activeIndex + 1) % total);
                    } else {
                      setActiveIndex((activeIndex - 1 + total) % total);
                    }
                  }
                }}
              >
                <div
                  className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-black/50"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Image
                    src={currentImage}
                    alt="Reekadia tour gallery preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    quality={80}
                    className="object-contain"
                  />
                  <button
                    type="button"
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                    onClick={() => {
                      if (activeIndex === null) return;
                      const total = galleryImages.length;
                      setActiveIndex((activeIndex - 1 + total) % total);
                    }}
                  >
                    <span className="material-symbols-outlined text-base">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 size-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                    onClick={() => {
                      if (activeIndex === null) return;
                      const total = galleryImages.length;
                      setActiveIndex((activeIndex + 1) % total);
                    }}
                  >
                    <span className="material-symbols-outlined text-base">chevron_right</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Close preview"
                    className="absolute top-4 right-4 size-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                    onClick={() => setActiveIndex(null)}
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
              </div>
            ) : null}
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
