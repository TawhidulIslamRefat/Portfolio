import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
    const containerRef = useRef(null);
    const blobsRef = useRef([]);

    useEffect(() => {
        // GSAP animations for floating blobs
        blobsRef.current.forEach((blob, index) => {
            if (blob) {
                gsap.to(blob, {
                    x: `random(-100, 100)`,
                    y: `random(-100, 100)`,
                    scale: `random(0.8, 1.3)`,
                    rotation: `random(-180, 180)`,
                    duration: `random(15, 25)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: index * 2,
                });
            }
        });

        // Create floating particles (fewer on mobile)
        const container = containerRef.current;
        if (container) {
            const particleCount = window.innerWidth < 768 ? 15 : 30;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'absolute w-1 h-1 bg-primary/20 rounded-full';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                container.appendChild(particle);

                gsap.to(particle, {
                    y: `random(-50, 50)`,
                    x: `random(-50, 50)`,
                    opacity: `random(0.1, 0.6)`,
                    scale: `random(0.5, 2)`,
                    duration: `random(5, 15)`,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: Math.random() * 5,
                });
            }
        }

        return () => {
            if (container) {
                const particles = container.querySelectorAll('.absolute.w-1');
                particles.forEach(p => p.remove());
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Animated gradient blobs - responsive sizes */}
            <motion.div
                ref={el => blobsRef.current[0] = el}
                className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                ref={el => blobsRef.current[1] = el}
                className="absolute top-1/2 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <motion.div
                ref={el => blobsRef.current[2] = el}
                className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <motion.div
                ref={el => blobsRef.current[3] = el}
                className="absolute top-3/4 right-1/3 w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
            />

            {/* Animated grid lines - hidden on mobile for performance */}
            <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5 hidden sm:block">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Floating geometric shapes - responsive sizes */}
            <motion.div
                className="absolute top-20 left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-primary/30 rounded-lg"
                animate={{
                    rotate: [0, 360],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute top-40 right-10 sm:right-20 w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-purple-500/30 rounded-full"
                animate={{
                    rotate: [0, -360],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-32 left-10 sm:left-1/4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border-2 border-cyan-500/30"
                style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
                animate={{
                    rotate: [0, 360],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <motion.div
                className="absolute bottom-20 right-10 sm:right-1/3 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-pink-500/30 rounded-lg"
                animate={{
                    rotate: [0, -360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
