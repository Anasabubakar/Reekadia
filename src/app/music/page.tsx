'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const releases = [
  {
    title: 'The Game Needs You',
    type: 'Album',
    link: 'https://open.spotify.com/album/6ugTlnX34eEh3pmI7sTXD2?si=MqkOTlZDTUGhD6d6NUrLRA',
    imageUrl: '/images/song-cover-art/the-game-needs-you.png'
  },
  {
    title: 'Glamorous Ft Mayorkun',
    type: 'Single',
    link: 'https://open.spotify.com/album/6FI7fgpszgy8ZZODsis6Pi?si=ndjpq33mQ2SyNxZWLoKGGg',
    imageUrl: '/images/song-cover-art/glamorous.png'
  },
  {
    title: 'Mukutu',
    type: 'Single',
    link: 'https://open.spotify.com/album/4Q2pEBNlOZAhdIDdtOZI2Z?si=eYk95xgGTcGxXZRMNQgo-Q',
    imageUrl: '/images/song-cover-art/mukutu.png'
  },
  {
    title: 'Solo',
    type: 'Single',
    link: 'https://open.spotify.com/album/7wQgtOaa74hP33p7xzkRHO?si=sKpOVXvIQLCc3ue-eB2g6Q',
    imageUrl: '/images/song-cover-art/solo.png'
  },
  {
    title: 'Fakosi Ft Seyi Vibez, DelB',
    type: 'Single',
    link: 'https://open.spotify.com/album/3YPNvgCesJrEaLZgZLXzdt?si=Lz7K2DkvSk6vQ6iG47Aq3Q',
    imageUrl: '/images/song-cover-art/fakosi.png'
  },
  {
    title: 'Feeling Different Ft Adekunle Gold, Maleek Berry',
    type: 'Single',
    link: 'https://open.spotify.com/album/3WkYJGUSNOTvGoe4YkIVjM?si=RKJi7c9KRnyfmjBh99GHhA',
    imageUrl: '/images/song-cover-art/feel-different.png'
  },
  {
    title: 'Ozumba Mbadiwe',
    type: 'Single',
    link: 'https://open.spotify.com/album/6oYKhPbYdaaYGGnqZIqlNs?si=lQwAqUwgSK-NLXO5771iKA',
    imageUrl: '/images/song-cover-art/ozumba-mbadiwe.png'
  },
  {
    title: 'OTR VOL. 2 | WHERE DID WE STOP?',
    type: 'EP',
    link: 'https://open.spotify.com/album/6YbuBOhChrDQBd8jeIvhjj?si=7V9fG49HTJGRdhxZHk7NPw',
    imageUrl: '/images/song-cover-art/where-did-we-stop.png'
  },
  {
    title: 'OFF THE RECORD',
    type: 'EP',
    link: 'https://open.spotify.com/album/2U8mtLvqgQVcrCx4V7H1HJ?si=1MZnyPmGSU-3pUWKT0e5vg',
    imageUrl: '/images/song-cover-art/Untitled design - 10.png'
  },
  {
    title: 'Omolomo Ft Wizkid',
    type: 'Single',
    link: 'https://open.spotify.com/album/6EQxI2JlN9WV4hXWCbdhfl?si=jBztS2FtRTuU9AczcIn64A',
    imageUrl: '/images/song-cover-art/omo-olomo.png'
  },
  {
    title: 'Rora',
    type: 'Single',
    link: 'https://open.spotify.com/album/1YoKg4rLeRUTxjs9jyYk3u?si=hEyjEEaARWOXSvBtrV2YKw',
    imageUrl: '/images/song-cover-art/rora.png'
  },
  {
    title: 'Like',
    type: 'Single',
    link: 'https://open.spotify.com/album/38qliUD5SEnqbPbHz8sJlW?si=nIAk3LZXRsKpgPo3GXx5aQ',
    imageUrl: '/images/song-cover-art/like.png'
  },
  {
    title: 'Easy Jeje',
    type: 'Single',
    link: 'https://open.spotify.com/album/2Tc7JXLB2WpKkKegbhrGna?si=4sYlF3LYQAeAKgVzwTEtVg',
    imageUrl: '/images/song-cover-art/easy(jeje).png'
  },
  {
    title: 'Katapot',
    type: 'Single',
    link: 'https://open.spotify.com/album/1YpcjDbbS3vAnYvm5KT1zab?si=5FJRO6yhR42q3Twb41tQBA',
    imageUrl: '/images/song-cover-art/katapot.png'
  },
  {
    title: 'Spotlight',
    type: 'Album',
    link: 'https://open.spotify.com/album/1HvZC18RODcUSqng5Q9KJ9?si=N6DxNBdfQou7MSLOCzdwyQ',
    imageUrl: '/images/song-cover-art/spotlight.png'
  },
];


export default function MusicPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#110505] text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#221010]/80 to-[#110505] z-10"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow flex flex-col items-center justify-start px-4 py-12 md:py-20 w-full">
          <div className="w-full max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 text-center"
            >
              <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Discography</h1>
              <p className="text-xl text-gray-400">The complete collection of sounds.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {releases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href={release.link} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-square bg-neutral-900 rounded-2xl mb-4 overflow-hidden relative glass-panel-light">
                      <img src={release.imageUrl} alt={release.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                          <Play fill="currentColor" className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="px-2 pb-2 text-center">
                    <h3 className="text-lg font-bold text-white truncate">{release.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{release.type}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}