import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { RxOpenInNewWindow } from 'react-icons/rx';
import { LuCodeXml } from 'react-icons/lu';

const ProjectCard = ({ title, description, tags, image, type, index, live, githubClient, githubServer }) => {
    const cardRef = useRef(null);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
            }}
            whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 }
            }}
            className="group relative rounded-xl p-[3px] overflow-visible"
            style={{ perspective: "1000px" }}
        >

            <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col z-10 shadow-2xl">
                {/* Animated corner accents */}
                <motion.div
                    className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg z-20"
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
                    className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg z-20"
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

                <div className="overflow-hidden relative h-48">
                    <motion.img
                        alt={`${title} thumbnail`}
                        className="w-full h-full object-cover"
                        src={image}
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.4 }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

                <div className="p-6 flex flex-col flex-grow relative">
                    <motion.div
                        className="flex items-center justify-between mb-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
                    </motion.div>

                    <motion.p
                        className="text-slate-600 dark:text-slate-400 text-sm mb-5 flex-grow leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {description}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-2 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {tags.map((tag, idx) => (
                            <motion.span
                                key={idx}
                                className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                                whileHover={{ scale: 1.1, y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.a
                            className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link"
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                className="material-symbols-outlined text-lg mr-2"
                                whileHover={{ rotate: 45 }}
                            >
                                <RxOpenInNewWindow />
                            </motion.span>
                            Live
                        </motion.a>
                        <div className="flex gap-3">
                            {githubClient && (
                                <motion.a
                                    className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link"
                                    href={githubClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="material-symbols-outlined text-lg mr-1"><LuCodeXml /></span>
                                    Client
                                </motion.a>
                            )}
                            {githubServer && (
                                <motion.a
                                    className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link"
                                    href={githubServer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="material-symbols-outlined text-lg mr-1"><LuCodeXml /></span>
                                    Server
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'Scholarship Stream Scholarship Management System',
            description: 'Scholarship Stream is a full-stack web application that helps students discover scholarships, apply online, and track their application status. It features role-based dashboards for Admins and Moderators to manage users, scholarships, applications, and payments efficiently.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'Tailwind', 'Netlify', 'Vercel', 'React Router', 'JWT', 'Axios', 'Stripe'],
            image: 'https://www.smarterselect.com/hs-fs/hubfs/Benefits-of-Using-Scholarship-Management-Software-Internal-Image-29-May-2024.jpg?width=1080&height=567&name=Benefits-of-Using-Scholarship-Management-Software-Internal-Image-29-May-2024.jpg',
            category: 'Full Stack',
            type: 'backend',
            live: 'https://scholarship-stream.netlify.app/',
            githubClient: 'https://github.com/TawhidulIslamRefat/Scholar-Stream.git',
            githubServer: 'https://github.com/TawhidulIslamRefat/scholarstream-server.git'
        },
        {
            title: 'HomeNest A Real Estate platform',
            description: 'A modern real estate listing platform that allows users to explore properties for rent or sale, create and manage listings, and connect with potential buyers or renters through a clean and intuitive user interface.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'Tailwind', 'Netlify','AOS','Axios','React Router','Swiper Slider'],
            image: 'https://www.maxiomtech.com/wp-content/uploads/2025/08/Maxiom-Blog-Images-39-1024x576.png',
            category: 'Full Stack',
            type: 'backend',
            live: 'https://home-nest-1.netlify.app/',
            githubClient: 'https://github.com/TawhidulIslamRefat/Home-Nest-Client.git',
            githubServer: 'https://github.com/TawhidulIslamRefat/Home-Nest-Server.git'
        },
        {
            title: 'KidzoMart E-commerce platform',
            description: 'KidzoMart is a modern e-commerce platform for kids’ toys, designed to showcase top-rated and best-selling products. It provides a smooth shopping experience with an intuitive interface, making it easy for users to explore, select, and purchase toys online.',
            tags: ['React', "Tailwind", 'React Router', 'Firebase', 'Netlify','AOS','React-Toastify','Daisy UI','React-Icons'],
            image: 'https://outspoken.newagebd.com/files/img/202501/79c7c92a5cdaecb7fe08861f580a0c2c.jpg',
            category: 'Frontend',
            live: 'https://toy-topia-01.netlify.app/',
            githubClient: 'https://github.com/TawhidulIslamRefat/KidzoMart.git',
            githubServer: ''
        },
        {
            title: 'E Dokan - A modern e-commerce platform',
            description: 'E-Dokan is a Next.js 16 e-commerce platform with Tailwind CSS, offering product browsing, user auth, and authorized CRUD features with protected routes.',
            tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Vercel','Daisy UI','Swiper Slider'],
            image: 'https://www.ecommercetimes.com/wp-content/uploads/sites/5/2021/12/xl-2017-mobile-commerce-2.jpg',
            category: 'Full Stack',
            live: 'https://e-dokan-1.vercel.app//',
            githubClient: 'https://github.com/TawhidulIslamRefat/E-Dokan.git',
            githubServer: 'https://github.com/TawhidulIslamRefat/E-Dokan-Server.git'
        },
        {
            title: 'HERO.IO',
            description: 'HERO.IO is a modern, responsive web application designed to give users a seamless app discovery experience — just like the Play Store or App Store.',
            tags: ['React', 'Tailwind CSS', 'Netlify', 'React Router', ' Recharts', 'Local Storage', 'React Spinners','React-Toastify'],
            image: 'https://vancell.ca/wp-content/uploads/2020/11/androidphone-1.jpg',
            category: 'Frontend',
            live: 'https://hero-apps-1.netlify.app/',
            githubClient: 'https://github.com/TawhidulIslamRefat/Hero-App.git',
            githubServer: ''
        }
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <section className="w-full md:w-11/12 mx-auto bg-background-light  dark:bg-background-dark font-display">
            <div className="px-4 py-10 md:py-10 ">
                <header className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4"
                    >
                        My <span>Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                    >
                        Showcasing my diverse skills and creative solutions
                    </motion.p>
                </header>
                <main className="space-y-12">
                    <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12">
                        {/* Filter Buttons */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 rounded-2xl md:rounded-full bg-slate-100 dark:bg-slate-800/50 p-2 md:p-1.5 backdrop-blur-sm shadow-md hover:shadow-xl relative overflow-hidden"
                        >
                            {/* Animated background glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary"
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {['All', 'Frontend', 'Full Stack', 'Backend'].map((cat, idx) => (
                                <motion.button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-5 md:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${filter === cat
                                        ? 'text-white bg-primary shadow-lg shadow-primary/30'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                                        }`}
                                >
                                    {filter === cat && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-primary rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={index} index={index} {...project} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Projects;
