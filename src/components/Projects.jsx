import React, { useState } from 'react';

const ProjectCard = ({ title, description, tags, image, type }) => (
    <div className="bg-white dark:bg-card-dark rounded-xl overflow-hidden flex flex-col group border border-transparent hover:dark:border-primary/50 hover:shadow-glow-blue-strong hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-in-out">
        <div className="overflow-hidden relative">
            <img alt={`${title} thumbnail`} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src={image} />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{title}</h3>
                {type === 'backend' && (
                    <span className="material-symbols-outlined text-blue-400 !text-2xl group-hover:text-blue-300 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300" title="Includes Backend/Database">database</span>
                )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <div className="mt-auto flex items-center space-x-6 text-sm">
                <a className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link" href="#">
                    <span className="material-symbols-outlined text-xl mr-1.5 group-hover/link:text-primary transition-colors">open_in_new</span>
                    View Project
                </a>
                <a className="flex items-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors group/link" href="#">
                    <span className="material-symbols-outlined text-xl mr-1.5 group-hover/link:text-primary transition-colors">code</span>
                    Source Code
                </a>
            </div>
        </div>
    </div>
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
        <section className="bg-background-light dark:bg-background-dark font-display">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <header className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">My <span>Projects</span></h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Showcasing my diverse skills and creative solutions</p>
                </header>
                <main className="space-y-16">
                    <div className="flex flex-col items-center justify-center space-y-8">
                        <div className="w-full flex flex-col items-center space-y-6">
                            <div className="flex items-center justify-center space-x-2 md:space-x-4 rounded-full bg-slate-200 dark:bg-slate-800 p-1.5">
                                {['All', 'Frontend', 'Full Stack', 'Backend'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        class={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${filter === cat
                                            ? 'text-white bg-primary'
                                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Projects;
