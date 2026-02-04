import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold uppercase tracking-tighter text-white mb-4">Reekadia</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The official digital home of Reekado Banks and Reekadia Records.
              Experience the sound of the future.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/music" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Music</Link></li>
              <li><Link href="/tour" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Tour Dates</Link></li>
              <li><Link href="/merch" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Official Store</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors text-white">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors text-white">
                <Facebook size={18} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} />
              <span>bookings@reekadia.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Reekadia Records. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Developed by KorvuTech
          </p>
        </div>
      </div>
    </footer>
  );
}
