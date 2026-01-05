import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MdSchool, MdMenuBook, MdLocationOn, MdCalendarToday, MdPublic, MdTranslate } from 'react-icons/md';

const EducationCard = ({ item, index, itemVariants }) => {
    const cardRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        // GSAP border rotation animation
        if (borderRef.current) {
            gsap.to(borderRef.current, {
                rotation: 360,
                duration: 4,
                repeat: -1,
                ease: "linear",
            });
        }

        // GSAP floating animation for card
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3,
            });
        }
    }, [index]);

    return (
        <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
            {/* Timeline Icon */}
            <motion.div 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 dark:bg-slate-800 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-primary z-10 relative"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-xl">{item.icon}</span>
                {/* Pulse Effect */}
                <motion.span 
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            </motion.div>

            {/* Card with Electric Border */}
            <motion.div
                ref={cardRef}
                whileHover={{ scale: 1.03, y: -10 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] relative rounded-xl p-[3px] overflow-hidden"
            >
                {/* Electric Border Animation */}
                <div 
                    ref={borderRef}
                    className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_20%,transparent_40%,var(--color-primary)_60%,transparent_80%,var(--color-primary)_100%)] opacity-70"
                />
                
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-2xl">
                    {/* Animated corner accents */}
                    <motion.div
                        className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                    />

                    {/* Glow effect */}
                    <motion.div
                        className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <motion.h2 
                        className="font-bold text-lg text-slate-800 dark:text-slate-100 relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {item.title}
                    </motion.h2>
                    
                    <motion.h3 
                        className="font-medium text-primary mb-2 relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {item.institution}
                    </motion.h3>
                    
                    <motion.div 
                        className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-3 relative z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-1.5">
                            <span className="text-primary text-base">{item.locationIcon || <MdLocationOn />}</span>
                            <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="text-primary text-base"><MdCalendarToday /></span>
                            <span>{item.period}</span>
                        </div>
                    </motion.div>
                    
                    <motion.p 
                        className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {item.description}
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Education = () => {
    const educationData = [
        {
            title: "Higher Secondary Certificate (H.S.C)",
            institution: "Govt. Siraj Uddin Memorial Collage",
            location: "Khulna, Bangladesh",
            period: "June 2025 - Present",
            description: "I am currently an HSC student in the Arts stream, focusing on developing strong analytical, communication, and critical thinking skills to prepare for higher studies.",
            icon: <MdSchool />,
            type: "academic"
        },
        {
            title: "Complete Web Development Course",
            institution: "Programming Hero",
            location: "Online",
            period: "Jul 2025 - Dec 2025",
            description: "Complete web development training covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and modern web technologies.",
            icon: <MdMenuBook />,
            type: "course",
            locationIcon: <MdPublic /> // World icon for Online
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="font-display bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 antialiased overflow-hidden">
            <div className="p-0 sm:p-6 md:p-6 flex items-center justify-center">
                <div className="w-full md:w-11/12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">Education & Certification</h1>
                        <p className="text-slate-600 dark:text-slate-400">My academic background and professional training</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700"
                    >
                        {educationData.map((item, index) => (
                            <EducationCard key={index} item={item} index={index} itemVariants={itemVariants} />
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        className="mt-12 relative rounded-xl p-[3px] overflow-hidden"
                    >
                        {/* Electric Border */}
                        <div className="absolute inset-[-100%] bg-[conic-gradient(from_180deg,transparent_0%,var(--color-primary)_20%,transparent_40%,var(--color-primary)_60%,transparent_80%,var(--color-primary)_100%)] animate-[spin_4s_linear_infinite] opacity-70" />
                        
                        <div className="relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
                            <motion.h2 
                                className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    <MdTranslate className="text-primary text-2xl" />
                                </motion.div>
                                Languages
                            </motion.h2>
                            <div className="flex flex-wrap gap-3">
                                {['Bengali (Native)', 'English (Fluent)'].map((lang, idx) => (
                                    <motion.span 
                                        key={lang}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + idx * 0.1 }}
                                        whileHover={{ 
                                            scale: 1.1, 
                                            y: -5,
                                            boxShadow: "0 10px 25px rgba(0, 188, 249, 0.3)"
                                        }}
                                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-full border border-slate-200 dark:border-slate-600 cursor-default"
                                    >
                                        {lang.split(' ')[0]} <span className="text-slate-500 dark:text-slate-400">({lang.split(' ')[1].replace(/[()]/g, '')})</span>
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
