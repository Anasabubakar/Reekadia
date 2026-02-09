'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
    '/images/hero/Untitled design - 1.png',
    '/images/hero/Untitled design - 2.png',
    '/images/hero/Untitled design - 3.png',
    '/images/hero/Untitled design - 4.png',
    '/images/hero/Untitled design - 5.png',
    '/images/hero/Untitled design - 6.png',
    '/images/hero/Untitled design - 7.png',
    '/images/hero/Untitled design - 8.png',
    '/images/hero/Untitled design - 9.png',
    '/images/hero/Untitled design - 10.png',
];

export default function Background() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
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
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#221010]/60 to-[#110505] z-10"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
        </div>
    );
}
