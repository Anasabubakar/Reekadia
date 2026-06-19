'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const heroImages = [
    '/images/hero/Untitled design - 1.webp',
    '/images/hero/Untitled design - 5.webp',
    '/images/hero/Untitled design - 9.webp',
];

export default function Background() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#110505]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 opacity-50"
                >
                    <Image
                        src={heroImages[currentImageIndex]}
                        alt=""
                        fill
                        sizes="100vw"
                        quality={60}
                        priority={currentImageIndex === 0}
                        className="object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#221010]/60 to-[#110505] z-10"></div>
        </div>
    );
}
