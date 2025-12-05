import React from 'react';

const Education = () => {
    return (
        <section className="font-display bg-background-light dark:bg-background-dark text-slate-700 dark:text-slate-300 antialiased">
            <div className="min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">Education & Certification</h1>
                        <p className="text-slate-600 dark:text-slate-400">My academic background and professional training</p>
                    </div>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 dark:bg-slate-700 group-is-active:bg-primary text-slate-500 group-is-active:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <span className="material-icons text-xl text-white">school</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h2 className="font-bold text-lg text-slate-800 dark:text-slate-100">Bachelor of Science in Computer Science and Engineering</h2>
                                <h3 className="font-medium text-primary">Green University of Bangladesh</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400 mt-2 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-icons text-base">location_on</span>
                                        <span>Dhaka, Bangladesh</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-icons text-base">calendar_today</span>
                                        <span>Aug 2022 - Present</span>
                                    </div>
                                </div>
                                <p className="text-sm">Currently pursuing degree with focus on software development, algorithms, and web technologies.</p>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 dark:bg-slate-700 group-is-active:bg-primary text-slate-500 group-is-active:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <span className="material-icons text-xl text-white">menu_book</span>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                                <h2 className="font-bold text-lg text-slate-800 dark:text-slate-100">Complete Web Development Course</h2>
                                <h3 className="font-medium text-primary">Programming Hero</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400 mt-2 mb-3">
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-icons text-base">language</span>
                                        <span>Online</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="material-icons text-base">calendar_today</span>
                                        <span>Jul 2024 - Dec 2024</span>
                                    </div>
                                </div>
                                <p className="text-sm">Comprehensive web development training covering HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and modern web technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <span className="material-icons text-primary text-2xl">translate</span>
                            Languages
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-full">Bengali <span className="text-slate-500 dark:text-slate-400">(Native)</span></span>
                            <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium px-4 py-2 rounded-full">English <span className="text-slate-500 dark:text-slate-400">(Fluent)</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
