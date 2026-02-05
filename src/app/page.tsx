'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Background Video Simulation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#221010]/50 to-[#110505] z-10"></div>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTs4puAZwAsYPIc7JyVNVaARP5glMrFeMu1cLtHFbUNK0DRzw_bGcRzrHAssrbDfM_jve8jG9h9XqohJRBRwA5WwW7IK_jjvuTXRMC523PjfiROaEGtqKyWB1tjlW6lmPuxEynhCN9rZh9z58-k2NY29J_9wm8g0D3nN3wfU7tFOnccxTbucFIuvwf1EcKaFUmFPNtrRZUE5Nen7Grm-ZTAwmB-4Ovy1LGb-rFBNRN2BAU3uGOQhDzfDIBAoIuo-dbikxoJITRtOg')" }}
          aria-label="Reekado Banks performing on a dark stage with red lights"
        >
        </div>
        {/* Ambient Glow Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 md:py-20 w-full">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full gap-12 md:gap-20">
            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center gap-8 animate-float"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-primary text-sm md:text-base font-bold tracking-[0.2em] uppercase">The Official Home of Reekado Banks</h2>
                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-glow drop-shadow-2xl">
                  Gbedu wey dey <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">burst brain</span>
                </h1>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button className="group relative flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-red-600 text-white text-base font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(236,19,19,0.5)]">
                  <span className="mr-2 material-symbols-outlined filled">play_circle</span>
                  <span className="truncate">Listen Now</span>
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40"></div>
                </button>
                <button className="group flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-base font-bold transition-all hover:scale-105">
                  <span className="truncate">View Tour Dates</span>
                </button>
              </div>
            </motion.div>

            {/* Featured Release Glass Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-2 mb-4 px-2 opacity-90">
                <span className="material-symbols-outlined text-primary text-xl">new_releases</span>
                <h3 className="text-white text-sm font-bold tracking-widest uppercase">Featured Release</h3>
              </div>
              <div className="glass-panel p-6 rounded-[2.5rem] relative overflow-hidden group">
                {/* Decorative glow inside card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch relative z-10">
                  {/* Album Art */}
                  <div className="relative w-full md:w-48 aspect-square shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group-hover:scale-[1.02] transition-transform duration-500">
                    <div 
                      className="absolute inset-0 bg-cover bg-center" 
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDimcYaZSlxpyBAMf2ezPooV7SzafvrJ5EEe-XXAQRWdSwz_Sogj52w2dlKHh7jHAbBwJdlLIk_Uidu3kPLqfAIL-4aaCFmTBY2qY1sisp8Xo2uL7QyQOVwyDtLRKWXlFfhJvPTyVyhhxYSwUVvZBMbikAnfiBBCrLs9mFPICYOOJyx3FRPvaEGv8oyYIKR_WfUpPY9VM_ski2RTTj5uYWm_7Lgubchvs_SkTJE9U4qwMn2WwzMlUCzAQyDw3EqG-beiPE1b3d7yrs')" }}
                      aria-label="Abstract vibrant artwork for 'The Game Needs You' single"
                    >
                    </div>
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="material-symbols-outlined text-white text-5xl drop-shadow-lg">play_circle</span>
                    </div>
                  </div>
                  {/* Track Info & Player */}
                  <div className="flex flex-col justify-between flex-1 w-full gap-4">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                      <h4 className="text-white text-2xl md:text-3xl font-bold leading-tight">The Game Needs You</h4>
                      <p className="text-red-200/80 text-sm font-medium tracking-wide">New Single • Afrobeats</p>
                    </div>
                    {/* Visualizer Simulation & Progress */}
                    <div className="flex flex-col gap-3 glass-panel-light rounded-xl p-4 mt-auto">
                      {/* Waveform Bars */}
                      <div className="flex items-end justify-between gap-1 h-8 opacity-80 px-1">
                        <div className="w-1 bg-primary rounded-full h-[40%] animate-[pulse_1s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary rounded-full h-[70%] animate-[pulse_1.2s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary rounded-full h-[100%] animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary/50 rounded-full h-[50%] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary/50 rounded-full h-[30%] animate-[pulse_1.1s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary/50 rounded-full h-[60%] animate-[pulse_0.9s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary/30 rounded-full h-[40%] animate-[pulse_1.3s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary/30 rounded-full h-[80%] animate-[pulse_1.4s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-primary/30 rounded-full h-[20%] animate-[pulse_1s_ease-in-out_infinite]"></div>
                        <div className="w-1 bg-white/20 rounded-full h-[40%]"></div>
                        <div className="w-1 bg-white/20 rounded-full h-[60%]"></div>
                        <div className="w-1 bg-white/20 rounded-full h-[30%]"></div>
                        <div className="w-1 bg-white/20 rounded-full h-[50%]"></div>
                        <div className="w-1 bg-white/20 rounded-full h-[70%]"></div>
                        <div className="w-1 bg-white/20 rounded-full h-[20%]"></div>
                      </div>
                      {/* Progress Bar */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-gray-400">0:00</span>
                        <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full w-[35%] bg-primary rounded-full relative"></div>
                        </div>
                        <span className="text-[10px] font-mono text-gray-400">3:14</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-start gap-4 mt-2">
                      <button className="flex items-center justify-center size-10 rounded-full bg-white text-primary hover:bg-gray-200 transition-colors">
                        <span className="material-symbols-outlined text-2xl fill-current">play_arrow</span>
                      </button>
                      <div className="flex gap-4">
                        <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined">skip_previous</span></button>
                        <button className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined">skip_next</span></button>
                        <button className="text-gray-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">favorite</span></button>
                        <button className="text-gray-400 hover:text-white transition-colors ml-2"><span className="material-symbols-outlined">share</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
}
