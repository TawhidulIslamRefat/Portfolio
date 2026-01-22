import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, percentage, icon, colorClass, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-xl p-[2px] overflow-hidden" // Container for border
        >
            {/* Electric Border Background - Spinning Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 animate-spin-slow" />

            {/* Alternative "Electric" Border using Conic Gradient for continuous effect */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--color-primary)_50%,#0000_100%)] animate-[spin_4s_linear_infinite] opacity-100" />

            {/* Content Mask */}
            <div className="relative h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-xl flex flex-col items-center text-center z-10">
                <img alt={`${name} logo`} className="h-12 w-12 mb-4 drop-shadow-lg" src={icon} />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{name}</h3>
                <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle className="text-gray-200 dark:text-slate-700" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                        <motion.circle
                            className={`text-primary skill-circle ${colorClass}`}
                            cx="50"
                            cy="50"
                            fill="transparent"
                            r="40"
                            stroke="currentColor"
                            strokeDasharray="251.2"
                            strokeDashoffset="251.2" // Start empty
                            animate={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                            whileInView={{ strokeDashoffset: 251.2 - (251.2 * percentage) / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                            strokeLinecap="round"
                            strokeWidth="8"
                        ></motion.circle>
                    </svg>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-900 dark:text-white">
                        {percentage}%
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const frontendSkills = [
        { name: 'JavaScript (ES6+)', percentage: 96, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React.js', percentage: 92, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', colorClass: "dark:invert" },
        { name: 'Tailwind CSS', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'HTML5', percentage: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', percentage: 93, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'React Router', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg' },
        { name: 'Responsive Design', percentage: 95, icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721291.png' },
        { name: 'Framer Motion', percentage: 90, icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
        { name: 'GSAP', percentage: 85, icon: 'https://gsap.com/community/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png' },
    ];

    const backendSkills = [
        { name: 'Node.js', percentage: 87, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', colorClass: "dark:invert" },
        { name: 'Firebase', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'JWT', percentage: 80, icon: 'https://img.icons8.com/color/48/java-web-token.png' },
        { name: 'REST API', percentage: 80, icon: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-api-web-development-flaticons-flat-flat-icons.png' },
    ];

    const databaseSkills = [
        { name: 'MongoDB', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ];

    const toolSkills = [
        { name: 'Git', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', colorClass: "dark:invert" },
        { name: 'VS Code', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Figma', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'npm', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
        { name: 'Netlify', percentage: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
        { name: 'Vercel', percentage: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', colorClass: "dark:invert" },
        { name: 'Heroku', percentage: 80, icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/3/heroku-icon-20b15jsu5137qalquqt80o.png/heroku-icon-4ashhqeovx2kiqns6sep4.png?_a=DATAg1AAZAA0', colorClass: "dark:invert" },
        { name: 'Chrome DevTools', percentage: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
    ];

    const softSkills = [
        { name: 'Problem Solving', percentage: 80, icon: 'https://cdn-icons-png.flaticon.com/512/4133/4133589.png' },
        { name: 'Time Management', percentage: 85, icon: 'https://cdn-icons-png.flaticon.com/512/3652/3652191.png' },
        { name: 'Team Work', percentage: 90, icon: 'https://cdn-icons-png.flaticon.com/512/1534/1534938.png' },
        { name: 'Communication', percentage: 85, icon: 'https://cdn-icons-png.flaticon.com/512/1067/1067566.png' },
        { name: 'Adaptability', percentage: 85, icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588592.png' },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className=" w-full md:w-11/12 mx-auto px-0  font-display text-gray-800 dark:text-gray-200 antialiased overflow-hidden">
            <div className=" mx-auto py-12 sm:pt-16 sm:pb-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-4xl mx-auto text-center mb-6"
                >
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        Skills & Technologies
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                        Technologies and skills I use to build amazing products
                    </p>
                </motion.div>

                <div className="space-y-5">
                    {/* Reusable Section for Skills Categories */}
                    {[
                        { title: "Frontend", skills: frontendSkills },
                        { title: "Backend", skills: backendSkills },
                        { title: "Database", skills: databaseSkills },
                        { title: "Tools", skills: toolSkills },
                        { title: "Soft Skills", skills: softSkills }
                    ].map((section, idx) => (
                        <div key={idx} className=' p-0 md:p-6 rounded-lg transition-shadow duration-300 flex flex-col  text-center'>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center mb-6"
                            >
                                <div className="w-8 h-1 bg-primary rounded-full"></div>
                                <h2 className="ml-4 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
                            </motion.div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                                {section.skills.map((skill, index) => (
                                    <SkillCard key={skill.name} index={index} {...skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
