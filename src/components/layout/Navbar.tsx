'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { name: 'Music', href: '/music' },
  { name: 'Tour', href: '/tour' },
  { name: 'Merch', href: '/merch' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center pt-6 px-4 sticky top-0 z-50">
      <header className={clsx(
        "glass-panel w-full max-w-[960px] flex items-center justify-between rounded-full px-6 py-3 transition-all hover:bg-black/70",
        scrolled && "bg-black/70"
      )}>
        <Link href="/" className="flex items-center gap-4 text-white group">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px]">graphic_eq</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight uppercase">Reekadia</h2>
        </Link>
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors uppercase",
                pathname === link.href ? "text-white" : "text-gray-300 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-red-600 transition-colors h-10 px-6 text-white text-sm font-bold shadow-[0_0_15px_rgba(236,19,19,0.4)]">
            <span className="truncate">Subscribe</span>
          </button>
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white flex items-center justify-center">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
    </div>
  );
}