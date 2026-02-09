'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const videos = [
  {
    title: 'Rora',
    category: 'Music Video',
    views: '12M Views',
    duration: '3:45',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQhbClAClvEMT-ykyAtz7VtGE2dNuAyzrravtfUoCJ3oiLDuvef_UKB-lRtEf-m2Azs4DLU5ciUYWZ_2eMjh2SXVqyYy-31B3ndnl8Qb5hwXDyzcbs0ZW0zX3Bre_y7P2MaTNzlQ-JfXqqISAimbNXo6mBIRGuHVaH6q0pEpojA2ECGVecvjPrVoF5tUS31zWjRzOuhAlWI84Tm6JD-UHBmNr7WeSGUGOJDL96BeZWf9nxueOHCk9OmDIxtWRsi4eLqSjuvJW7mus',
    alt: 'Rora Music Video',
    type: 'Music Videos',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Lagos Tour Diary: Day 1',
    category: 'BTS',
    description: 'Behind the scenes access to the rehearsal sessions and backstage madness.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbteW1_MQAZGZdlmcM2VHepO8vsKlHvYSKz5EakvtipWtrWwByvcQW4vDDCzV3HBpqGyI55lyWDC1oGtTdxPpMqnNX6rkLnZ5OzyxU9Uuhr3vQneKElG8483OVK5ZS4tYVyba9U4kyAAtATOPbJV5OUEcNWUMIAy13mWv_FVQs84OA1zqdu8hX6rr_l1cyLAY65oGD-JDGpHZ8Z5d5hEtCjMjYNEM2hUiirRy2VqgJM0fGawKd1G0OGdsoyTp3ofHNyavPQBwX0fU',
    alt: 'Tour Diary',
    type: 'BTS',
    aspect: 'aspect-[3/4]',
  },
  {
    title: 'Jeun To Da (JTD)',
    category: 'Music Video',
    views: '2.1M Views',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQc6OfTznj6pIRIpD9WikBs0Cpbm-k_MYWuG4b4iWoALYPgU1YY5uQkVBZ7-NJRwZRCWBljolu4LbO8RtyFCnKGkCmnyDA4O4BB2MUIWiSXoEpjkt8qZa3Rv_4FylfiwuzdaLnd7LLq_ZOMsQUI9EvUB84M3KbJl-NTlcV_8zqCy2yEblUDegAmFEMRtQHUnjk5S0gDovHUNAB8vYAvXG4APZWOuh9QG76qyL6MBxWTjmsJB34NMhur5GhB9EmZyWjaQ6TZGu96-I',
    alt: 'Jeun To Da',
    type: 'Music Videos',
    aspect: 'aspect-video',
  },
  {
    title: 'Put In Pressure',
    category: 'Music Video',
    views: '850K Views',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8My_K_ymWYNirDvBHIBYCoM-eHGrvmewYDAobwXkXL8C_bLe5fd98qdrmaq9pkgHOJR_rwHuLUq88k59QNll-uCoZBtLS6GIKn6IprByO9OUvysdw0HKri-e8vjR1wVoIeI-kes4f7BZxuXtRxJxbGcZhRKxx5_UPxKZKxFdkVx-t_37u_AyuN_3qGeoWONQIfJOFQ6FrCbFtd-n4mvk7uB7py1twxW5CmYYsm0PsxSEIeXT-BXOHnF1lWRolUOh48IBBEGOKqGM',
    alt: 'Put In Pressure',
    type: 'Music Videos',
    aspect: 'aspect-[4/3]',
  },
  {
    title: 'Live Performance @ O2 Indigo',
    category: 'Live',
    description: 'Full set performance from the London leg of the tour.',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJvS2dR735hln_734oppTmQuQUsNG_SgHoU8tiAznLzmk-MHxwfnP9i4KkHtdluFGDjDb7T9CNlohZO5AriFvIzwElkx3joCe12Jo878wXuGEPL_SU1HULbnl5sUPrxLPJQ2AGD98-G_FJ8RTY5PHEnzyxy0MX4us2p6bhGi3GbpdsCYvYH53wYWiivQZ1r5QF2EZcQXnNikcfDkHm_SQef-idcpuheND0adlCOgQjbXU-n4rNTSKkmouZK0Q5ql3zxY80N2z1zQc',
    alt: 'Live at O2',
    type: 'Live',
    aspect: 'aspect-[9/16]',
  },
  {
    title: 'Making of Ozumba Mbadiwe',
    category: 'BTS',
    description: 'Documentary • 15:20',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmKg5JlvGdYDg6bjdmQGMn2EyLIkOoSVv_y1hOG5blJIgkZ2m7z9gVDLfqb4bkk0nlpfREMAVOC4x19m2vLrL_bRa7QC0OEJaxZweDOHuZBppL7kDUVqcjKy7otVLNLTLwAbOH1cSKeqF2DAcVjli2BgbGG-_kZv21Wl5fcO8Uwlovu3c0MFcqGa6IZego09w3ebyKvJMKz3PvkmKhdz-WjBT_tqcf2MhvWRMf3NdvBG4abwc',
    alt: 'Making of Ozumba',
    type: 'BTS',
    aspect: 'aspect-video',
  },
];

const videoCategories = ['All', 'Music Videos', 'BTS', 'Live'];

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <div className="relative min-h-screen w-full bg-[#110505] text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#110505]/90 via-[#221010]/80 to-[#110505] z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTs4puAZwAsYPIc7JyVNVaARP5glMrFeMu1cLtHFbUNK0DRzw_bGcRzrHAssrbDfM_jve8jG9h9XqohJRBRwA5WwW7IK_jjvuTXRMC523PjfiROaEGtqKyWB1tjlW6lmPuxEynhCN9rZh9z58-k2NY29J_9wm8g0D3nN3wfU7tFOnccxTbucFIuvwf1EcKaFUmFPNtrRZUE5Nen7Grm-ZTAwmB-4Ovy1LGb-rFBNRN2BAU3uGOQhDzfDIBAoIuo-dbikxoJITRtOg')",
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow flex flex-col items-center px-4 py-8 md:py-12 w-full gap-12 sm:gap-16">
          {/* Now Playing Section */}
          <section className="w-full max-w-[1024px] flex flex-col items-center gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase animate-pulse"
              >
                Now Playing
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
              >
                Ozumba Mbadiwe
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full aspect-video rounded-2xl md:rounded-[2.5rem] polished-glass-border overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDimcYaZSlxpyBAMf2ezPooV7SzafvrJ5EEe-XXAQRWdSwz_Sogj52w2dlKHh7jHAbBwJdlLIk_Uidu3kPLqfAIL-4aaCFmTBY2qY1sisp8Xo2uL7QyQOVwyDtLRKWXlFfhJvPTyVyhhxYSwUVvZBMbikAnfiBBCrLs9mFPICYOOJyx3FRPvaEGv8oyYIKR_WfUpPY9VM_ski2RTTj5uYWm_7Lgubchvs_SkTJE9U4qwMn2WwzMlUCzAQyDw3EqG-beiPE1b3d7yrs')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="size-20 md:size-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-primary hover:border-primary shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(236,19,19,0.6)]">
                  <span className="material-symbols-outlined text-5xl md:text-6xl filled ml-1">play_arrow</span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-10 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded bg-red-600 text-[10px] font-bold uppercase tracking-wider text-white">Music Video</span>
                      <span className="text-gray-300 text-xs font-medium">4:12</span>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base max-w-xl line-clamp-2">
                      The official music video for "Ozumba Mbadiwe" by Reekado Banks. Directed by DK. A visual masterpiece celebrating the resilience of the Nigerian spirit.
                    </p>
                  </div>
                  <div className="hidden md:flex gap-3">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white" title="Share">
                      <span className="material-symbols-outlined text-xl">share</span>
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white" title="Add to Playlist">
                      <span className="material-symbols-outlined text-xl">playlist_add</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Video Grid Section */}
          <section className="w-full max-w-[1280px] flex flex-col gap-10">
            <div className="sticky top-24 z-30 flex w-full overflow-x-auto pb-4">
              <div className="glass-panel-light backdrop-blur-xl p-1.5 rounded-full inline-flex gap-1 shadow-2xl border border-white/10 mx-auto">
                {videoCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={clsx(
                      'px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 whitespace-nowrap',
                      activeCategory === category
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white'
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={clsx(
                    'break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer bg-[#1a0a0a]',
                    video.aspect // Apply aspect ratio class
                  )}
                >
                  <div className={clsx(video.aspect, 'bg-gray-800 relative')}>
                    <img
                      alt={video.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={video.thumbnail}
                    />
                    <div className="liquid-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="material-symbols-outlined text-white text-5xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">play_circle</span>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono">
                        {video.duration}
                      </div>
                    )}
                    {video.category === 'BTS' && (
                      <div className="absolute top-3 left-3 bg-purple-600/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                        {video.category}
                      </div>
                    )}
                    {video.category === 'Live' && (
                      <div className="absolute top-3 left-3 bg-red-600/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <span className="size-1.5 bg-white rounded-full animate-pulse"></span> Live
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/5">
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    {video.description ? (
                      <p className="text-gray-400 text-xs line-clamp-2">{video.description}</p>
                    ) : (
                      <span className="text-gray-400 text-xs">{video.category} • {video.views}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8 pb-12">
              <button className="glass-panel-light px-8 py-3 rounded-full text-sm font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                Load More Videos
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VideosPage;