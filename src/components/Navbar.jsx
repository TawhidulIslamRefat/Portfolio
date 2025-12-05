import React, { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <div className="pt-3">
    <header className="px-5 py-3 w-11/12 mx-auto rounded-2xl bg-[#FEFEFE] dark:bg-slate-900 transition-colors duration-300 shadow-2xl">
            <nav className="flex justify-between items-center">
                <a className="text-xl font-bold text-primary" href="#">REFAT</a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-primary border-b-2 border-primary pb-1" href="#">Home</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">About</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Services</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Portfolio</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact</a>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-xl"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? <BsMoon /> : <BsSun />}
                    </button>

                    {/* Download Resume Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium flex items-center gap-1"
                    >
                       <HiDownload /> Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-xl"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'light' ? <BsMoon /> : <BsSun />}
                    </button>

                    <button
                        className="text-slate-600 dark:text-slate-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-4">
                    <a className="text-primary border-b-2 border-primary pb-1 inline-block w-fit" href="#">Home</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">About</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Services</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Portfolio</a>
                    <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Contact</a>

                    {/* Mobile Download Resume Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium text-center w-fit"
                    >
                        Download Resume
                    </a>
                </div>
            )}
        </header>
  </div>;
};

export default Navbar;
