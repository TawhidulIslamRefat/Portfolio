import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiDownload, HiCode } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, if not found, default to "dark"
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  const logoRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Apply theme on mount and when theme changes
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <motion.div>
      <div className="pt-1.5 md:pt-3">
        <header
          ref={navbarRef}
          className="px-3 md:px-5 py-2 md:py-3 w-full md:w-11/12 mx-auto rounded-2xl bg-white/30 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 transition-colors duration-300 shadow-lg"
        >
          <nav className="flex justify-between items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center gap-2"
            >
              <motion.div
                className="p-2 bg-primary/10 rounded-lg relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  ref={logoRef}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                />
                <HiCode className="text-2xl text-primary relative z-10" />
              </motion.div>
              <motion.span
                className="text-xl font-bold text-primary tracking-wider"
                whileHover={{ scale: 1.05 }}
              >
                REFAT
              </motion.span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="home"
                activeClass="!text-primary !font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium relative"
              >
                Home
              </Link>
              <Link
                to="about"
                activeClass="!text-primary !font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium relative"
              >
                About
              </Link>
              <Link
                to="skills"
                activeClass="!text-primary !font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium relative"
              >
                Skills
              </Link>
              <Link
                to="projects"
                activeClass="!text-primary !font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium relative"
              >
                Projects
              </Link>
              <Link
                to="education"
                activeClass="!text-primary !font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium relative"
              >
                Education
              </Link>
              <Link
                to="contact"
                activeClass="!text-primary !font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium relative"
              >
                Contact
              </Link>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-xl"
                aria-label="Toggle Dark Mode"
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "light" ? <BsMoon /> : <BsSun />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Download Resume Button */}
              <motion.a
                href="https://docs.google.com/document/d/1WIRKxpW3gbdYfYl6DYm8lIOk-9EI6_3J/edit?usp=sharing&ouid=102865775355070212798&rtpof=true&sd=true"
                download
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium flex items-center gap-1 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 188, 249, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <HiDownload className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-xl"
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? <BsMoon /> : <BsSun />}
              </button>

              <button
                className="text-slate-600 dark:text-slate-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="md:hidden mt-4 flex flex-col space-y-4 pb-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="home"
                  activeClass="!text-primary !font-bold !bg-primary/10 !rounded-lg"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="about"
                  activeClass="!text-primary !font-bold !bg-primary/10 !rounded-lg"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="skills"
                  activeClass="!text-primary !font-bold !bg-primary/10 !rounded-lg"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  activeClass="!text-primary !font-bold !bg-primary/10 !rounded-lg"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  to="education"
                  activeClass="!text-primary !font-bold !bg-primary/10 !rounded-lg"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Education
                </Link>
                <Link
                  to="contact"
                  activeClass="!text-primary !font-bold !bg-primary/10 !rounded-lg"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium px-3 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Download Resume Button */}
                <motion.a
                  href="https://docs.google.com/document/d/1WIRKxpW3gbdYfYl6DYm8lIOk-9EI6_3J/edit?usp=sharing&ouid=102865775355070212798&rtpof=true&sd=true"
                  download
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium text-center w-fit flex items-center gap-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Resume <HiDownload />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </div>
    </motion.div>
  );
};

export default Navbar;
