'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Media',
    subLinks: [
      { name: 'Music', href: '/music' },
      { name: 'Videos', href: '/videos' },
    ],
  },
  { name: 'Tour', href: '/tour' },
  { name: 'Merch', href: '/merch' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="w-full flex justify-center pt-6 px-4 sticky top-0 z-50">
      <header
        className={clsx(
          'glass-panel w-full max-w-[960px] flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all hover:bg-black/70',
          scrolled && 'bg-black/70'
        )}
      >
        {/* ... inside the component */}
        <Link href="/" className="flex items-center gap-2 sm:gap-4 text-white group">
          <div className="relative size-10 md:size-12 flex items-center justify-center">
            <Image
              src="/images/logo/reekadia-transparent.png"
              alt="Reekadia Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight uppercase hidden sm:block">Reekadia</h2>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.name)}
            >
              {link.href ? (
                <Link
                  href={link.href}
                  className={clsx(
                    'text-sm font-medium transition-colors uppercase',
                    pathname === link.href ? 'text-white' : 'text-gray-300 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ) : (
                <span className="text-sm font-medium text-gray-300 cursor-default uppercase">
                  {link.name}
                </span>
              )}

              <AnimatePresence>
                {hoveredLink === link.name && link.subLinks && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-36 bg-black/70 backdrop-blur-md rounded-md shadow-lg"
                  >
                    <div className="py-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className={clsx(
                            'block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10',
                            pathname === subLink.href ? 'text-white' : ''
                          )}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex flex-col md:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-2xl">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.href ? (
                    <Link
                      href={link.href}
                      className={clsx(
                        'text-xl font-medium uppercase',
                        pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <>
                      <span className="text-xl font-medium text-gray-400 uppercase cursor-pointer"
                        onClick={() => setHoveredLink(hoveredLink === link.name ? null : link.name)}
                      >
                        {link.name}
                      </span>
                      <AnimatePresence>
                        {hoveredLink === link.name && link.subLinks && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden mt-2 text-center"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                className={clsx(
                                  'block py-2 text-lg text-gray-500 hover:text-white',
                                  pathname === subLink.href ? 'text-white' : ''
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}