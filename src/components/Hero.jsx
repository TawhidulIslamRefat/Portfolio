import React from 'react';
import image from '../assets/WhatsApp Image 2025-12-05 at 14.23.37_df561ed3.jpg'

const Hero = () => {
    return (
        <main className="pt-16 pb-24 md:pt-24 md:pb-32 w-11/12 mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
                <div className="flex flex-col space-y-6">
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        HI, MYSELF
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-primary">
                        Tawhidul Islam Refat
                    </h1>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                        And I'm a <span className="text-primary">Frontend Developer</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                        Passionate about creating beautiful, responsive websites and
                        exceptional user experiences. Specialized in modern web
                        technologies including React, Vue.js, and advanced CSS
                        frameworks.
                    </p>

                    <div className="pt-6">
                        <div className="flex justify-between items-center space-x-8 mb-8 text-center">
                            <div>
                                <p className="text-3xl font-bold text-primary">1+</p>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    Years Exp.
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">10+</p>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    Projects
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">5+</p>
                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    Technologies
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="bg-primary text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:opacity-90 transition-opacity">
                                <span>View My Work</span>
                            </button>
                            <button className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                <span>Download Resume</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative">
                        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-primary to-transparent animate-spin-slow">
                            <div className="bg-background-light dark:bg-background-dark w-full h-full rounded-full"></div>
                        </div>
                        <img
                            alt="Portrait of Tawhidul Islam Refat"
                            className="absolute inset-0 m-auto w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover"
                            src={image}
                        />
                        <div className="absolute inset-0 rounded-full shadow-[0_0_80px_0px_rgba(0,188,249,0.5)] dark:shadow-[0_0_120px_0px_rgba(0,188,249,0.5)]"></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
