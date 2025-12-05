import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Left Section: Navigation & Contact */}
                    <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-around gap-12">
                        {/* Navigation Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-semibold text-white">Navigation</h3>
                            <nav className="flex flex-col gap-2.5">
                                <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">Home</a>
                                <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">About</a>
                                <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">Services</a>
                                <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">Projects</a>
                                <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">Contact</a>
                            </nav>
                        </div>
                        {/* Contact & Socials Column */}
                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                                <div className="flex flex-col gap-2.5">
                                    <p className="flex items-center gap-3 text-gray-400">
                                        <span className="material-symbols-outlined text-primary/80" style={{ fontSize: '20px' }}>mail</span>
                                        <span>instructor@email.com</span>
                                    </p>
                                    <p className="flex items-center gap-3 text-gray-400">
                                        <span className="material-symbols-outlined text-primary/80" style={{ fontSize: '20px' }}>call</span>
                                        <span>+1 (234) 567-890</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                                <div className="flex items-center gap-4">
                                    <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
                                    </a>
                                    <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153 1.772c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.485 2.5c.636-.247 1.363-.416 2.427-.465C9.93 2.013 10.284 2 12.315 2zm-1.161 1.043c-1.06.048-1.696.21-2.227.427A3.397 3.397 0 006.166 4.99a3.397 3.397 0 00-1.528 2.227c-.217.531-.379 1.167-.427 2.227-.049 1.024-.06 1.35-.06 3.588s.011 2.564.06 3.588c.048 1.06.21 1.696.427 2.227a3.397 3.397 0 001.528 2.227 3.397 3.397 0 002.227 1.528c.531.217 1.167.379 2.227.427 1.024.049 1.35.06 3.588.06s2.564-.011 3.588-.06c1.06-.048 1.696-.21 2.227-.427a3.397 3.397 0 002.227-1.528 3.397 3.397 0 001.528-2.227c.217-.531.379-1.167.427-2.227.049-1.024.06-1.35.06-3.588s-.011-2.564-.06-3.588c-.048-1.06-.21-1.696-.427-2.227a3.397 3.397 0 00-1.528-2.227 3.397 3.397 0 00-2.227-1.528c-.531-.217-1.167-.379-2.227-.427-1.024-.049-1.35-.06-3.588-.06s-2.564.011-3.588.06zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM12 14a2 2 0 110-4 2 2 0 010 4zm6.406-7.125a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd"></path></svg>
                                    </a>
                                    <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a className="text-gray-400 hover:text-primary transition-colors duration-300" href="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Section: Map */}
                    <div className="md:col-span-6 min-h-[300px]">
                        <div className="h-full w-full bg-center bg-no-repeat bg-cover rounded-xl object-cover" data-alt="Dark themed satellite map of a city at night" data-location="San Francisco" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIVcKnuRWQH4T0CwP7AvpHIjtU1fniOiYh9WesLHO2-d7ksMspVaHACqaMQhu4ATuLEo-CZ8dUdngfpfH_FvDPxDrhY6SV9VUax6-Bz63Zlm-gVFvNaNflreJLGntWDvUUviy4N4gNop-D8EIZaC9cGyg6-ipAZdQn4RPmlJzcIkRraHdHvvOLo0s0VZo3GrELZx3HhFER-mqgqCrqqMKh6Up2Io0SKx1HZM12HsGn7U_8PKsxirwtl2iaPyJxUBGrkQaeMlXbthgC")' }}></div>
                    </div>
                </div>
                {/* Copyright Bar */}
                <div class="mt-12 pt-8 border-t border-gray-200/10 text-center">
                    <p class="text-base text-gray-400">© 2024 John Doe. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
