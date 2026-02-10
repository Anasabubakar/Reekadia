'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InstagramIcon from '../../components/icons/InstagramIcon';
import X from '../../components/icons/XIcon';
import YoutubeIcon from '../../components/icons/YoutubeIcon';
import TiktokIcon from '../../components/icons/TiktokIcon';

const contactDetails = [
  {
    title: 'Booking Information',
    department: 'Shows, Appearances & Performance Bookings',
    email: 'management@reekadia.com',
    icon: 'calendar_month',
    manager: 'Opeyemi',
    phone: '+234 903 680 3743'
  },
  {
    title: 'Press & Media Contact',
    department: 'Interviews & Media Requests',
    email: 'management@reekadia.com',
    icon: 'mic_external_on',
    manager: 'Opeyemi',
    phone: '+234 903 680 3743'
  },
];

const socialLinks = [
  { icon: InstagramIcon, href: 'https://instagram.com/reekadobanks' },
  { icon: X, href: 'https://twitter.com/reekadobanks' },
  { icon: YoutubeIcon, href: 'https://youtube.com/reekadobanks' },
];

const ContactPage = () => {
  return (
    <div className="relative min-h-screen w-full text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">

      <div className="relative z-10 flex flex-col h-full min-h-screen">
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-float"
            style={{ animationDuration: '8s' }}
          >
            <div className="lg:col-span-8 w-full order-2 lg:order-1">
              <div className="glass-panel-form p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="mb-10 border-b border-white/10 pb-6">
                    <h1 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">Contact &amp; Booking</h1>
                    <p className="text-gray-400 font-medium tracking-wide">Get in touch with Reekadia Records for bookings, features, and inquiries.</p>
                  </div>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 group/input">
                        <label className="text-xs uppercase tracking-[0.2em] text-primary/80 font-bold ml-1 group-focus-within/input:text-primary transition-colors">Name</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary outline-none transition-all duration-300 backdrop-blur-md" placeholder="Enter your full name" type="text" />
                      </div>
                      <div className="space-y-2 group/input">
                        <label className="text-xs uppercase tracking-[0.2em] text-primary/80 font-bold ml-1 group-focus-within/input:text-primary transition-colors">Email</label>
                        <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary outline-none transition-all duration-300 backdrop-blur-md" placeholder="name@company.com" type="email" />
                      </div>
                    </div>
                    <div className="space-y-2 group/input">
                      <label className="text-xs uppercase tracking-[0.2em] text-primary/80 font-bold ml-1 group-focus-within/input:text-primary transition-colors">Subject</label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary outline-none transition-all duration-300 backdrop-blur-md cursor-pointer">
                          <option className="bg-[#221010]">Booking Inquiry</option>
                          <option className="bg-[#221010]">Press &amp; Media</option>
                          <option className="bg-[#221010]">Feature Request</option>
                          <option className="bg-[#221010]">General Inquiry</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          <span className="material-symbols-outlined">expand_more</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 group/input">
                      <label className="text-xs uppercase tracking-[0.2em] text-primary/80 font-bold ml-1 group-focus-within/input:text-primary transition-colors">Message</label>
                      <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:border-primary focus:bg-white/10 focus:ring-1 focus:ring-primary outline-none transition-all duration-300 backdrop-blur-md resize-none" placeholder="Tell us about your event details, dates, and budget..." rows={5}></textarea>
                    </div>
                    <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-8">
                                      <div className="flex gap-5">
                                        {socialLinks.map((link, index) => {
                                          const IconComponent = link.icon;
                                          return (
                                            <a key={index} className="text-white/70 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer" href={link.href} target="_blank" rel="noopener noreferrer">
                                              <IconComponent size="32" />
                                            </a>
                                          );
                                        })}
                                      </div>                      <button className="w-full md:w-auto relative overflow-hidden bg-primary hover:bg-red-600 text-white font-bold tracking-wider uppercase py-4 px-10 rounded-full shadow-[0_0_20px_rgba(236,19,19,0.4)] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(236,19,19,0.6)]" type="button">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Inquiry
                          <span className="material-symbols-outlined text-lg">send</span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-5 order-1 lg:order-2">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="glass-panel-light p-8 rounded-[2rem] hover:bg-white/5 transition-all hover:-translate-y-1 duration-300 group border-l-4 border-l-transparent hover:border-l-primary"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                      <span className="material-symbols-outlined text-primary">{detail.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-none">{detail.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{detail.department}</p>
                    </div>
                  </div>
                  <a className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group-hover:translate-x-2 duration-300" href={`mailto:${detail.email}`}>
                    <span className="font-medium">{detail.email}</span>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </a>
                  <p className="text-sm text-gray-300 mt-2">{detail.manager}</p>
                  <p className="text-sm text-gray-300">{detail.phone}</p>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-panel-light p-8 rounded-[2rem] hover:bg-white/5 transition-all hover:-translate-y-1 duration-300 group border-l-4 border-l-transparent hover:border-l-primary"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-none">Office Location</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Reekadia Records</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Victoria Island, Lagos</p>
                <p className="text-sm text-gray-300">Nigeria</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-panel-light p-8 rounded-[2rem] hover:bg-white/5 transition-all hover:-translate-y-1 duration-300 group border-l-4 border-l-transparent hover:border-l-primary"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-primary">share</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-none">Follow Reekado Banks</h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Stay Connected</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">Stay connected for the latest updates, music, and behind-the-scenes content</p>
                <div className="flex gap-3">
                  <a href="https://instagram.com/reekadobanks" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">
                    <InstagramIcon size="32" />
                  </a>
                  <a href="https://twitter.com/reekadobanks" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">
                    <X size="32" />
                  </a>
                  <a href="https://youtube.com/reekadobanks" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">
                    <YoutubeIcon size="32" />
                  </a>
                  <a href="https://tiktok.com/@reekadobanks" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition-transform">
                    <TiktokIcon size="32" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default ContactPage;