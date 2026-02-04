'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Twitter, Youtube, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-8">Get In <br/> Touch</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-md">
            For bookings, press inquiries, or just to say hello, we'd love to hear from you.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/10 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">Bookings & Management</h4>
                <a href="mailto:bookings@reekadia.com" className="text-gray-400 hover:text-white transition-colors">bookings@reekadia.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400 border border-white/10 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-1">Office</h4>
                <p className="text-gray-400">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
             <h4 className="text-white font-bold uppercase tracking-wider mb-6">Follow Us</h4>
             <div className="flex gap-4">
                {[
                  { icon: <Instagram size={20} />, href: '#' },
                  { icon: <Twitter size={20} />, href: '#' },
                  { icon: <Youtube size={20} />, href: '#' },
                ].map((social, index) => (
                   <a 
                     key={index} 
                     href={social.href} 
                     className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-purple-600 hover:border-purple-500 transition-all hover:scale-110"
                   >
                     {social.icon}
                   </a>
                ))}
             </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl"
        >
           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-black/40 transition-all" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-black/40 transition-all" placeholder="john@example.com" />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Subject</label>
                 <input type="text" className="w-full px-6 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-black/40 transition-all" placeholder="Inquiry about..." />
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-4">Message</label>
                 <textarea rows={5} className="w-full px-6 py-4 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-purple-500 focus:bg-black/40 transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>

              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-purple-500 hover:text-white transition-colors flex items-center justify-center gap-2 mt-4">
                 Send Message <Send size={18} />
              </button>
           </form>
        </motion.div>
      </div>
    </div>
  );
}
