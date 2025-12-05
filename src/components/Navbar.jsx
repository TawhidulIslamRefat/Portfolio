import React, { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-6 py-3 w-11/12 mx-auto rounded-2xl bg-white">
      <nav className="flex justify-between items-center ">
        <a className="text-xl font-bold text-primary" href="#">
          {" "}
          REFAT{" "}
        </a>
        <div className="hidden font-medium md:flex items-center space-x-8">
          <a className="text-primary border-b-2 border-primary pb-1" href="#">
            Home
          </a>
          <a
            className="text-slate-600 font-medium dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            About
          </a>
          <a
            className="text-slate-600 font-medium dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Services
          </a>
          <a
            className="text-slate-600 font-medium dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Portfolio
          </a>
          <a
            className="text-slate-600 font-medium dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
          <span>|</span>
          <button className="border border-gray-300 dark:border-gray-600 text-white dark:text-gray-200 font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto bg-primary dark:hover:bg-gray-700 transition-colors">
            <span>Resume </span>
            <span><HiDownload /></span>
          </button>
        </div>
        <button
          className="md:hidden text-slate-600 dark:text-slate-300"
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
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <a
            className="text-primary border-b-2 border-primary pb-1 inline-block w-fit"
            href="#"
          >
            Home
          </a>
          <a
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            About
          </a>
          <a
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Services
          </a>
          <a
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Portfolio
          </a>
          <a
            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
            href="#"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
