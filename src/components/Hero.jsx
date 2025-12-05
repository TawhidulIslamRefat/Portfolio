import React, { useEffect, useRef } from 'react';
import image from '../assets/WhatsApp Image 2025-12-05 at 19.53.15_af96930d.jpg';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    const blob1Ref = useRef(null);
    const blob2Ref = useRef(null);
    const blob3Ref = useRef(null);

    useEffect(() => {
        // GSAP Animations for Background Blobs (Organic floating movement)
        const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current];

        blobs.forEach((blob, index) => {
            gsap.to(blob, {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                scale: "random(0.8, 1.2)",
                duration: "random(5, 10)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 2,
            });
        });
    }, []);

    // Framer Motion Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className='w-full md:w-11/12 mx-auto mt-14'>

            {/* Glassmorphism Card */}

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row items-center justify-between w-full bg-white/30 dark:bg-slate-800/40 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 relative z-10 transition-all duration-300 hover:shadow-primary/10 overflow-hidden"
            >
                {/* Animated Gradient Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite] pointer-events-none"></div>

                {/* Content Section */}
                <div className="flex flex-col space-y-6 text-center md:text-left z-10">
                    <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border border-white/20 w-fit mx-auto md:mx-0">
                        <p className="text-sm font-semibold text-primary tracking-wider uppercase">
                            Welcome to my Portfolio
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
                            <span className='text-3xl'>Hi, I'm</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                                Tawhidul Islam Refat
                            </span>
                        </motion.h1>
                        <motion.div variants={itemVariants} className="text-2xl md:text-2xl font-bold text-slate-600 dark:text-slate-300">
                            I am a <span className="text-primary inline-block">
                                <Typewriter
                                    options={{
                                        strings: ['Frontend Developer', 'Junior MERN Stack Developer', 'React Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </motion.div>
                    </div>

                    <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        Driven Frontend Developer skilled in React, Next.js, and modern CSS frameworks, with backend experience in Node.js and Express.js. I build clean, responsive, and user-friendly interfaces with smooth, interactive experiences. Focused on efficient code and delivering high-quality, scalable web solutions.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            Hire Me
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold py-3 px-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700/50 mt-8">
                        <div>
                            <p className="text-3xl font-bold text-primary">1+</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mt-1">Years</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">10+</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mt-1">Projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-primary">5+</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wide font-medium mt-1">Technologys</p>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div variants={itemVariants} className="md:w-5/12 mt-12 md:mt-0 relative group">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        {/* Rotating Gradient Ring */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full p-2 z-10">
                            <img
                                alt="Tawhidul Islam Refat"
                                className="w-full h-full rounded-full object-cover border-4 border-slate-100 dark:border-slate-800 shadow-inner"
                                src={image}
                            />
                        </div>
                        {/* Floating elements decorative */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg z-20 flex items-center justify-center"
                        >
                            <span className="text-2xl">⚛️</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                            className="absolute top-1/2 -left-8 w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-lg z-20 flex items-center justify-center"
                        >
                            <span className="text-2xl">🎨</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                            className="absolute -bottom-6 right-10 w-16 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-20 flex items-center justify-center"
                        >
                            <span className="text-xl font-bold text-primary">JS</span>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
