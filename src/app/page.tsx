'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const featuredRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: featuredRef,
    offset: ["start end", "center center"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const rawScale = useTransform(scrollYProgress, [0, 0.8, 1], [0.7, 0.9, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 1]);
  const rawY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

  const scale = useSpring(rawScale, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const y = useSpring(rawY, springConfig);
  const rotateX = useSpring(rawRotateX, springConfig);

  const vinylScale = useSpring(useTransform(scrollYProgress, [0, 1], [0.8, 1]), springConfig);
  const vinylRotate = useSpring(useTransform(scrollYProgress, [0, 1], [-10, 0]), springConfig);
  const contentX = useSpring(useTransform(scrollYProgress, [0, 1], [50, 0]), springConfig);
  const contentOpacity = useSpring(useTransform(scrollYProgress, [0.4, 1], [0, 1]), springConfig);

  return (
    <>
      {/* Background Video Simulation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#221010]/50 to-[#110505] z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTs4puAZwAsYPIc7JyVNVaARP5glMrFeMu1cLtHFbUNK0DRzw_bGcRzrHAssrbDfM_jve8jG9h9XqohJRBRwA5WwW7IK_jjvuTXRMC523PjfiROaEGtqKyWB1tjlW6lmPuxEynhCN9rZh9z58-k2NY29J_9wm8g0D3nN3wfU7tFOnccxTbucFIuvwf1EcKaFUmFPNtrRZUE5Nen7Grm-ZTAwmB-4Ovy1LGb-rFBNRN2BAU3uGOQhDzfDIBAoIuo-dbikxoJITRtOg')" }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow w-full flex flex-col items-center">
          {/* Hero Section */}
          <section className="min-h-[85vh] w-full flex flex-col items-center justify-center px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center text-center gap-8 animate-float max-w-4xl mx-auto"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-primary text-sm md:text-base font-bold tracking-[0.2em] uppercase">The Official Home of Reekado Banks</h2>
                <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-glow drop-shadow-2xl">
                  Gbedu wey dey <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">burst brain</span>
                </h1>
              </div>
              <div className="flex flex-wrap gap-6 justify-center mt-8">
                <button className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-gradient-to-br from-red-500 via-primary to-red-800 text-white text-lg font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(236,19,19,0.6)] border border-red-400/30">
                  <span className="mr-2 material-symbols-outlined animate-pulse">play_circle</span>
                  <span>Listen Now</span>
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </button>
                <button className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-16 px-10 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white text-lg font-bold transition-all hover:scale-105 hover:border-white/40">
                  <span>View Tour Dates</span>
                  <span className="ml-2 material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </motion.div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
              <span className="text-xs uppercase tracking-widest text-gray-400">Scroll Down</span>
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
          </section>

          {/* Featured Release Section */}
          <section ref={featuredRef} className="w-full py-20 px-4 relative z-20 perspective-[1000px]">
            <div className="max-w-[1100px] mx-auto w-full">
              <motion.div 
                style={{ opacity, y }}
                className="flex items-center gap-3 mb-8 px-2"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20"></div>
                <span className="material-symbols-outlined text-primary text-2xl animate-spin-slow" style={{ animationDuration: '4s' }}>new_releases</span>
                <h3 className="text-white text-lg font-bold tracking-[0.2em] uppercase">Featured Release</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20"></div>
              </motion.div>
              
              <motion.div 
                style={{ scale, opacity, y, rotateX }}
                className="glass-panel p-8 md:p-12 rounded-[3rem] relative overflow-hidden group border-t border-white/20 shadow-2xl"
              >
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <motion.div 
                    style={{ 
                      scale: vinylScale,
                      rotate: vinylRotate
                    }}
                    className="relative w-full aspect-square max-w-[400px] mx-auto lg:mx-0 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-1 ring-white/10 animate-spin-slow vinyl-grooves p-[2%]">
                      <div 
                        className="w-full h-full rounded-full bg-cover bg-center border-[8px] border-[#111]" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDimcYaZSlxpyBAMf2ezPooV7SzafvrJ5EEe-XXAQRWdSwz_Sogj52w2dlKHh7jHAbBwJdlLIk_Uidu3kPLqfAIL-4aaCFmTBY2qY1sisp8Xo2uL7QyQOVwyDtLRKWXlFfhJvPTyVyhhxYSwUVvZBMbikAnfiBBCrLs9mFPICYOOJyx3FRPvaEGv8oyYIKR_WfUpPY9VM_ski2RTTj5uYWm_7Lgubchvs_SkTJE9U4qwMn2WwzMlUCzAQyDw3EqG-beiPE1b3d7yrs')" }}
                      ></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full border border-gray-700 z-20"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-900 to-black rounded-full z-10 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-gray-400 tracking-widest uppercase">REEKADIA</span>
                      </div>
                    </div>
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-primary/90 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(236,19,19,0.8)] z-30 backdrop-blur-sm cursor-pointer">
                      <span className="material-symbols-outlined text-5xl ml-1">play_arrow</span>
                    </button>
                  </motion.div>
                  <motion.div 
                    style={{ 
                      x: contentX,
                      opacity: contentOpacity
                    }}
                    className="flex flex-col gap-8 text-center lg:text-left"
                  >
                    <div>
                      <h4 className="text-white text-5xl md:text-7xl font-black leading-none mb-2 tracking-tighter">The Game <br/><span className="text-primary text-glow">Needs You</span></h4>
                      <p className="text-gray-300 text-lg font-medium tracking-wide flex items-center justify-center lg:justify-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Now Streaming Everywhere
                      </p>
                    </div>
                    <div className="glass-panel-light rounded-2xl p-6 backdrop-blur-md border border-white/5">
                      <div className="flex items-center justify-between mb-4 text-xs text-gray-400 font-mono">
                        <span>02:14</span>
                        <span>OFFICIAL AUDIO</span>
                        <span>03:45</span>
                      </div>
                      <div className="flex items-end justify-between gap-1 h-12 opacity-90 px-1 mb-6">
                        <div className="w-1.5 bg-primary rounded-full h-[40%] animate-[pulse_1s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-primary rounded-full h-[70%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-primary rounded-full h-[100%] animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-primary/60 rounded-full h-[50%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[30%] animate-[pulse_1.1s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-primary/60 rounded-full h-[60%] animate-[pulse_0.9s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-primary/40 rounded-full h-[40%] animate-[pulse_1.3s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-primary/80 rounded-full h-[80%] animate-[pulse_1.4s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[20%] animate-[pulse_1s_ease-in-out_infinite]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[40%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[60%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[30%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[50%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[70%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[40%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[80%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[20%]"></div>
                        <div className="w-1.5 bg-white/30 rounded-full h-[50%]"></div>
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <a className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel-light hover:bg-white/10 transition-colors border border-white/10 group/icon" href="#">
                          <span className="material-symbols-outlined text-green-500 group-hover/icon:scale-110 transition-transform">wifi_tethering</span>
                          <span className="text-sm font-bold">Spotify</span>
                        </a>
                        <a className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel-light hover:bg-white/10 transition-colors border border-white/10 group/icon" href="#">
                          <span className="material-symbols-outlined text-red-500 group-hover/icon:scale-110 transition-transform">music_note</span>
                          <span className="text-sm font-bold">Apple Music</span>
                        </a>
                        <a className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel-light hover:bg-white/10 transition-colors border border-white/10 group/icon" href="#">
                          <span className="material-symbols-outlined text-yellow-500 group-hover/icon:scale-110 transition-transform">play_circle</span>
                          <span className="text-sm font-bold">Audiomack</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Social Stats Section */}
          <section className="w-full py-16 px-4">
            <div className="max-w-[1100px] mx-auto">
              <h3 className="text-white/60 text-sm font-bold tracking-[0.2em] uppercase text-center mb-10">Join the Tribe</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-white">photo_camera</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-black text-white">2.4M</h4>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mt-1">Instagram</p>
                  </div>
                  <button className="text-xs border border-white/20 rounded-full px-4 py-1 hover:bg-white hover:text-black transition-colors">Follow</button>
                </div>
                <div className="glass-panel p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-white">alternate_email</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-black text-white">1.8M</h4>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mt-1">Twitter</p>
                  </div>
                  <button className="text-xs border border-white/20 rounded-full px-4 py-1 hover:bg-white hover:text-black transition-colors">Follow</button>
                </div>
                <div className="glass-panel p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-all hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-full bg-[#1DB954] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-black">graphic_eq</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-3xl font-black text-white">850K+</h4>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wider mt-1">Monthly Listeners</p>
                  </div>
                  <button className="text-xs border border-white/20 rounded-full px-4 py-1 hover:bg-white hover:text-black transition-colors">Stream</button>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="w-full py-20 px-4">
            <div className="max-w-[800px] mx-auto w-full">
              <div className="glass-panel relative rounded-[2.5rem] p-10 md:p-14 overflow-hidden text-center border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80 mix-blend-multiply"></div>
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-[80px] animate-float-slow"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] animate-float-slow" style={{ animationDelay: '2s' }}></div>
                <div className="relative z-10 flex flex-col items-center gap-6">
                  <span className="material-symbols-outlined text-5xl text-gray-400 font-light">mail</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">JOIN THE REEKADICTS</h2>
                  <p className="text-gray-300 max-w-md mx-auto">Sign up for exclusive tour announcements, merch drops, and behind-the-scenes content directly from Reekadia.</p>
                  <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
                    <input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent backdrop-blur-sm transition-all" placeholder="Enter your email" type="email"/>
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-100 to-gray-300 text-black font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:scale-105 transition-all" type="button">
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">No spam. Only good music.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}