import React from 'react';
import image from '../assets/WhatsApp Image 2025-12-05 at 14.23.37_df561ed3.jpg'
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="about-container pt-16 md:pt-20 pb-5 mt-5 w-full md:w-11/12 mx-auto overflow-hidden relative">
            <div className="container mx-auto px-0 sm:px-6  relative z-10">
                <h1 className='text-3xl md:text-4xl text-center font-semibold ml-0 md:ml-5 pb-10 text-gray-900 dark:text-white'>About Me</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Card - Image/Profile */}
                    <div className="relative group rounded-3xl p-[3px] overflow-hidden">
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--color-primary)_50%,#0000_100%)] animate-[spin_4s_linear_infinite]" />
                        {/* Card Content */}
                        <div className="relative rounded-3xl p-6 md:p-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl flex flex-col justify-center items-center h-full">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8">
                                {/* Image container */}
                                <div className="absolute inset-0 rounded-full p-[4px] overflow-hidden shadow-2xl z-20">
                                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--color-primary)_50%,#0000_100%)] animate-[spin_4s_linear_infinite]" />
                                    <img
                                        alt="Portrait of Tawhidul Islam Refat"
                                        className="w-full h-full object-cover rounded-full relative z-10 border-4 border-transparent"
                                        src={image}
                                    />
                                </div>
                            </div>

                            <div className="text-center w-full">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Web Developer</h2>
                                <div className="flex justify-center gap-4 mt-6">
                                    {[
                                        { type: 'github', url: 'https://github.com/TawhidulIslamRefat' },
                                        { type: 'linkedin', url: 'https://www.linkedin.com/in/tawhidul-islam-refat-webdeveloper/' },
                                        { type: 'twitter', url: 'https://x.com/TawhidulRefat?t=JPXwrO7BzzrNkFx2Kbs6Bw&s=09' },
                                        { type: 'facebook', url: 'https://www.facebook.com/tawhidulislamrefat11' },
                                        { type: 'email', url: 'mailto:tawhidulislamrefat11@gmail.com' }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={social.type}
                                            href={social.url}
                                            target={social.type !== 'email' ? '_blank' : undefined}
                                            rel={social.type !== 'email' ? 'noopener noreferrer' : undefined}
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.1 // Stagger the bounce
                                            }}
                                            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                                            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary border border-primary/20 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.6)] transition-colors relative group/icon"
                                        >
                                            <SocialIcon type={social.type} />
                                            {/* Tooltip */}
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 capitalize shadow-lg">
                                                {social.type}
                                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></span>
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Card - Content */}
                    <div className="relative group rounded-3xl p-[3px] overflow-hidden">
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--color-primary)_50%,#0000_100%)] animate-[spin_4s_linear_infinite]" />
                        {/* Card Content */}
                        <div className="relative rounded-3xl p-6 md:p-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl flex flex-col justify-center h-full">
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
                                        I'm looking for opportunities to apply my skills, collaborate with a talented team, and contribute to impactful digital products. I'm committed to continuous learning and staying aligned with the latest advancements in frontend development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        case 'email': return <MdEmail className="w-5 h-5" />;
        default: return null;
    }
}

export default About;