import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import image from '../assets/WhatsApp Image 2025-12-05 at 14.23.37_df561ed3.jpg'

const About = () => {
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);

    useEffect(() => {
        const cards = [cardRef1.current, cardRef2.current];

        cards.forEach((card) => {
            if (!card) return;

            // Create a random moving gradient blob effect for each card background
            const blob = document.createElement('div');
            blob.classList.add('absolute', 'w-64', 'h-64', 'rounded-full', 'blur-3xl', 'opacity-20', 'pointer-events-none', '-z-10');
            // Randomize starting color/position slightly
            blob.style.background = Math.random() > 0.5 ? 'var(--color-primary)' : '#4f46e5';
            card.appendChild(blob);

            gsap.to(blob, {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                scale: "random(0.8, 1.2)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Add floating particles to the background
        const container = document.querySelector('.about-container');
        if (container) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.classList.add('absolute', 'w-1', 'h-1', 'bg-primary/30', 'rounded-full', 'pointer-events-none', 'z-0');
                // Random initial position
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                container.appendChild(particle);

                gsap.to(particle, {
                    y: `random(-50, 50)`,
                    x: `random(-50, 50)`,
                    opacity: "random(0.1, 0.5)",
                    scale: "random(0.5, 2)",
                    duration: "random(3, 8)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }

        // Cleanup blobs on unmount (optional for simple effects but good practice)
        return () => {
            // simplified cleanup, React 19 handles node removal well usually
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    // New variants for the spinning rings
    const ringVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 20,
                ease: "linear",
                repeat: Infinity
            }
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

    const reverseRingVariants = {
        animate: {
            rotate: -360,
            transition: {
                duration: 25,
                ease: "linear",
                repeat: Infinity
            }
        },
        hover: {
            scale: 1.05,
            borderColor: "rgba(var(--color-primary-rgb), 0.8)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <section className="about-container pt-20 pb-5 mt-5 w-11/12 mx-auto bg-background-light dark:bg-background-dark 
        overflow-hidden relative">
            <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h1 className='text-4xl text-center font-semibold ml-0 md:ml-5 pb-10 text-gray-900 dark:text-white  '>About Me</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Card - Image/Profile */}
                    <motion.div
                        ref={cardRef1}
                        variants={cardVariants}
                        className="relative group rounded-3xl p-6 md:p-10 bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 shadow-2xl overflow-hidden flex flex-col justify-center items-center h-full"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-primary/20"></div>

                        <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                            {/* Outer animated ring */}
                            <motion.div
                                variants={ringVariants}
                                animate="animate"
                                whileHover="hover"
                                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                            ></motion.div>

                            {/* Inner dashed ring */}
                            <motion.div
                                variants={reverseRingVariants}
                                animate="animate"
                                whileHover="hover"
                                className="absolute inset-3 border border-dashed border-primary/50 rounded-full"
                            ></motion.div>
                            <motion.div
                                className="absolute inset-0 rounded-full overflow-hidden border-4 border-slate-800/50 shadow-inner"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    alt="Portrait of Tawhidul Islam Refat"
                                    className="w-full h-full object-cover"
                                    src={image}
                                />
                            </motion.div>
                        </div>

                        <div className="text-center w-full">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Web Developer</h2>
                            <div className="flex justify-center gap-4 mt-6">
                                {['github', 'linkedin', 'twitter', 'facebook'].map((social, index) => (
                                    <motion.a
                                        key={social}
                                        href="#"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary border border-primary/20 hover:border-primary hover:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.4)] transition-colors"
                                    >
                                        <SocialIcon type={social} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Card - Content */}
                    <motion.div
                        ref={cardRef2}
                        variants={cardVariants}
                        className="relative group rounded-3xl p-6 md:p-10 bg-white/5 dark:bg-slate-900/40 backdrop-blur-xl border border-white/10 dark:border-slate-700/50 shadow-2xl overflow-hidden flex flex-col justify-center h-full"
                    >
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                        <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                            <p>
                                <span className="font-bold text-slate-800 dark:text-white block mb-2">Hello There!</span>
                                I'm a Frontend Developer experienced in React.js and modern JavaScript, dedicated to crafting clean, responsive, and intuitive user interfaces.
                            </p>
                            <div className="space-y-2">
                                <h3 className="font-bold text-slate-800 dark:text-white text-xl">What I Do</h3>
                                <p>
                                    I love transforming concepts into seamless digital experiences through efficient code and thoughtful UI design. With practical experience in building full-stack MERN applications, I develop responsive and functional web solutions that address real-world needs.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-slate-800 dark:text-white text-xl">Goals</h3>
                                <p>
                                    I'm looking for opportunities to apply my skills, collaborate with a talented team, and contribute to impactful digital products. I’m committed to continuous learning and staying aligned with the latest advancements in frontend development.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

// Helper Components for cleaner code

const SocialIcon = ({ type }) => {
    switch (type) {
        case 'github': return <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>;
        case 'linkedin': return <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>;
        case 'twitter': return <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /></svg>;
        case 'facebook': return <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" /></svg>;
        default: return null;
    }
}

const FeatureBox = ({ title, desc, icon }) => (
    <motion.div
        className="p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
        whileHover={{ y: -5 }}
    >
        <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
            {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
            {desc}
        </p>
    </motion.div>
)

export default About;
