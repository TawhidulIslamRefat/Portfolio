import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tags, image, type, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative rounded-xl p-[2px] overflow-hidden" // Electric border container
    >
        {/* Electric Border Background - Spinning Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-spin-slow" />

        {/* Alternative "Electric" Border using Conic Gradient for continuous effect */}
        <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--color-primary)_50%,#0000_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden flex flex-col z-10">
            <div className="overflow-hidden relative h-48">
                <img alt={`${title} thumbnail`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={image} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
                    {type === 'backend' && (
                        <span className="material-symbols-outlined text-blue-400 !text-2xl group-hover:text-primary transition-colors duration-300" title="Includes Backend/Database">database</span>
                    )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 flex-grow leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-800 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link" href="#">
                        <span className="material-symbols-outlined text-lg mr-2 group-hover/link:translate-x-1 transition-transform">open_in_new</span>
                        Live Demo
                    </a>
                    <a className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link" href="#">
                        <span className="material-symbols-outlined text-lg mr-2">code</span>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEyuMrnog0MV2HuB7wRDcWDFEO6qhtBddrNgGsePTQ3pPNXc9_9x-9FbWhUblJ6w6RgSPPShhpYTuT0gRb8Ed6cIYqp3gYZp1f4dzy_zSXycWICD4GAIgkcsgRFltMmtWaX8rM2eH87zDeCMWk1ps7m2AzG5Z1UIMF2i25UnVAeTA72WxIFQM4np1gQXYRq5aNiapZidsP0MTuNxva8HflTxqX27IAOe4pXW0N7K--XkmEow9h2Oo47gD3k_7e1pvcuTqcIMyga1dI',
            category: 'Full Stack',
            type: 'backend'
        },
        {
            title: 'Social Media Dashboard',
            description: 'A comprehensive social media management dashboard with analytics, post scheduling, and engagement tracking features.',
            tags: ['React', 'Express.js', 'Chart.js'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZZ540IVnTGB9HeuTKbvWE8Ac5iHAgf6y3kN_BYi6FlRlu9u8kg51d8nTnPqoCWqMeRXhk5EAHFI6b5MSM3m_I4lhXVqLpnB8rfKNhNEsJWKatsHOHsm6Kr5Z6n8ZuhDZm_8R3YfIhG5gvT5DA0eZ2K5s9_nvZtEoZ-76lOXf3JL2o9bwGM7aIQTtiQufEHJpCIsAxmh9L6-DMZRUJnSvll-5KXAgzT_DpgZJVZNWRaR1ytTskjIP5d9wE6CKihmDRvnTCD234LnXo',
            category: 'Frontend'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.',
            tags: ['React', 'Firebase', 'Tailwind CSS'],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSeu5_gw4wfW1Dq9WnzMRWBXnFBXzVSKyCVQWvPXIxHmEbSuY3tWTNMOznyQi5p1LxTnOhqZ0jMBBNKxRL266mlsoKrOx_JBs8AtlDgg38jMgoyQjllNURbashRUlpBC48rifQIZK8KRrgl6YBBmaEGQI2yUXpVGMCKUD0GwPwjvBWWNWuJqT553CFVGEC_yQckGqMdu4HNfPjv-hIxDIl2te1Ne5C7ocuwbjjybISUWavCxsZ4tatMNJO_f2kXuZ5gsPnrcW4oMtb',
            category: 'Frontend'
        }
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <section className="w-11/12 mx-auto bg-background-light dark:bg-background-dark font-display">
            <div className="px-4 py-16 md:py-15 mt-5">
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
                    <div className="flex flex-col items-center justify-center space-y-12">
                        {/* Filter Buttons */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-center space-x-2 md:space-x-4 rounded-full bg-slate-100 dark:bg-slate-800/50 p-1.5 backdrop-blur-sm shadow-inner"
                        >
                            {['All', 'Frontend', 'Full Stack', 'Backend'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${filter === cat
                                        ? 'text-white bg-primary shadow-lg shadow-primary/30'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </motion.div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
