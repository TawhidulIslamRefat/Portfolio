import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { RxOpenInNewWindow } from "react-icons/rx";
import { LuCodeXml } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-100 hover:text-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row">
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 h-64 md:h-auto relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <motion.h2
                  variants={itemVariants}
                  className="text-3xl font-bold text-white drop-shadow-md"
                >
                  {project.title}
                </motion.h2>
              </div>
            </motion.div>

            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col gap-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                  Description
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    <RxOpenInNewWindow size={20} /> Live Demo
                  </a>
                )}
                {project.githubClient && (
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-4 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
                  >
                    <FaGithub size={20} /> Client Repo
                  </a>
                )}
                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-4 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium"
                  >
                    <FaGithub size={20} /> Server Repo
                  </a>
                )}
              </motion.div>
            </div>
          </div>

          <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-800 grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-red-500">🔥</span> Challenges
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.challenges ||
                  "Details about the challenges faced during the development of this project."}
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-green-500">🚀</span> Future Plans
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.futurePlans ||
                  "Upcoming features and improvements planned for future updates."}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  type,
  index,
  live,
  githubClient,
  githubServer,
  onOpen,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        duration: 0.5,
        bounce: 0.3,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl bg-slate-200 dark:bg-slate-800 p-[1px] overflow-hidden"
      style={{
        "--x": "0px",
        "--y": "0px",
      }}
    >
      {/* Spotlight Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(800px_circle_at_var(--x)_var(--y),rgba(120,119,198,0.3),transparent_40%)] z-0" />

      <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden flex flex-col z-10">
        <div className="relative h-48 overflow-hidden">
          <img
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            src={image}
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={onOpen}
              className="bg-white/90 text-slate-900 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
            >
              View Details
            </button>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3
            className="text-xl font-bold text-slate-800 dark:text-white mb-2 line-clamp-1"
            title={title}
          >
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                +{tags.length - 3} more
              </span>
            )}
          </div>

          <button
            onClick={onOpen}
            className="w-full mt-auto py-2.5 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            View Project Details
            <span className="group-hover/btn:translate-x-1 transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Scholarship Stream Scholarship Management System",
      description:
        "Scholarship Stream is a full-stack web application that helps students discover scholarships, apply online, and track their application status. It features role-based dashboards for Admins and Moderators to manage users, scholarships, applications, and payments efficiently.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Firebase",
        "Tailwind",
        "Netlify",
        "Vercel",
        "React Router",
        "JWT",
        "Axios",
        "Stripe",
      ],
      image:
        "https://www.smarterselect.com/hs-fs/hubfs/Benefits-of-Using-Scholarship-Management-Software-Internal-Image-29-May-2024.jpg?width=1080&height=567&name=Benefits-of-Using-Scholarship-Management-Software-Internal-Image-29-May-2024.jpg",
      category: "Full Stack",
      type: "backend",
      live: "https://scholarship-stream.netlify.app/",
      githubClient: "https://github.com/TawhidulIslamRefat/Scholar-Stream.git",
      githubServer:
        "https://github.com/TawhidulIslamRefat/scholarstream-server.git",
      challenges:
        "Implementing secure role-based access control (RBAC) with JWT and managing complex database relationships between users, scholarships, and applications was challenging. Integrating Stripe for seamless payments also required careful handling of webhooks.",
      futurePlans:
        "I plan to add an AI-based recommendation engine to suggest scholarships to students based on their profile. Mobile responsiveness improvements and multi-language support are also in the pipeline.",
    },
    {
      title: "Meal Mate – Smart Food & Menu Platform",
      description:
        "Meal Mate is a full-stack web application that allows users to explore food categories, browse dishes, view menus, and place orders seamlessly. Admins can manage dishes, categories, and orders efficiently through the backend dashboards.",

      tags: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "Vercel",
        "App Router",
      ],

      image: "https://media.timeout.com/images/105881603/750/562/image.jpg",

      category: "Full Stack",
      type: "fullstack",

      live: "https://meal-mate-eight-peach.vercel.app/",
      githubClient: "https://github.com/TawhidulIslamRefat/Meal-Mate.git",
      githubServer:
        "https://github.com/TawhidulIslamRefat/MealMate---Server.git",

      challenges:
        "Coordinating data between frontend and backend, handling CRUD operations for dishes, categories, and orders, and ensuring smooth user interaction were the main challenges.",

      futurePlans:
        "Future improvements include adding a rating & review system for dishes, improving mobile responsiveness, and implementing advanced search and filtering options for a better user experience.",
    },
    {
      title: "HomeNest A Real Estate platform",
      description:
        "A modern real estate listing platform that allows users to explore properties for rent or sale, create and manage listings, and connect with potential buyers or renters through a clean and intuitive user interface.",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Firebase",
        "Tailwind",
        "Netlify",
        "AOS",
        "Axios",
        "React Router",
        "Swiper Slider",
      ],
      image:
        "https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2022/06/15022712/smart-city-min.jpg",
      category: "Full Stack",
      type: "backend",
      live: "https://home-nest-1.netlify.app/",
      githubClient:
        "https://github.com/TawhidulIslamRefat/Home-Nest-Client.git",
      githubServer:
        "https://github.com/TawhidulIslamRefat/Home-Nest-Server.git",
      challenges:
        "Handling real-time image uploads and optimizing them for fast loading speeds was a key hurdle. Creating a dynamic and responsive filter system for property searching required complex query logic on the backend.",
      futurePlans:
        "Integration of a real-time chat feature between buyers and sellers using Socket.io. I also want to add a map view using Google Maps API to show property locations.",
    },
    {
      title: "KidzoMart E-commerce platform",
      description:
        "KidzoMart is a modern e-commerce platform for kids’ toys, designed to showcase top-rated and best-selling products. It provides a smooth shopping experience with an intuitive interface, making it easy for users to explore, select, and purchase toys online.",
      tags: [
        "React",
        "Tailwind",
        "React Router",
        "Firebase",
        "Netlify",
        "AOS",
        "React-Toastify",
        "Daisy UI",
        "React-Icons",
      ],
      image:
        "https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg?semt=ais_hybrid&w=740&q=80",
      category: "Frontend",
      live: "https://toy-topia-01.netlify.app/",
      githubClient: "https://github.com/TawhidulIslamRefat/KidzoMart.git",
      githubServer: "",
      challenges:
        "Ensuring a visually appealing and child-friendly design while maintaining professional e-commerce functionality. Managing local state for the cart and protecting routes based on user authentication were also interesting challenges.",
      futurePlans:
        'I aim to convert this into a full-stack application with a backend for inventory management. Adding a "Wishlist" feature and user reviews for products is also planned.',
    },
    {
      title: "EliteDecor - A modern e-commerce platform",
      description:
        "EliteDecor is a Next.js 16 e-commerce platform with Tailwind CSS, offering product browsing, user auth, and authorized CRUD features with protected routes.",
      tags: [
        "Next.js",
        "Firebase",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Vercel",
        "Daisy UI",
        "Swiper Slider",
      ],
      image:
        "https://www.orbitechno.com/assets/images/animal/1736480292-1590826222.jpg",
      category: "Full Stack",
      live: "https://elitedecor-01.vercel.app/",
      githubClient: "https://github.com/TawhidulIslamRefat/EliteDecor.git",
      githubServer:
        "https://github.com/TawhidulIslamRefat/EliteDecor-Server.git",
      challenges:
        "Learning and utilizing Next.js 16 features like Server Actions and the new routing system. Configuring authentication securely with NextAuth (or custom solution) alongside protected API routes.",
      futurePlans:
        "Implementing a payment gateway (like SSLCommerz or Stripe). Adding a blog section for product reviews and SEO optimization to drive organic traffic.",
    },
    {
      title: "HERO.IO",
      description:
        "HERO.IO is a modern, responsive web application designed to give users a seamless app discovery experience — just like the Play Store or App Store.",
      tags: [
        "React",
        "Tailwind CSS",
        "Netlify",
        "React Router",
        " Recharts",
        "Local Storage",
        "React Spinners",
        "React-Toastify",
      ],
      image:
        "https://focusgov-static.pages.dev/_astro/2020-10-ceros-ios-apps-busy_Z8ESOz.png",
      category: "Frontend",
      live: "https://hero-apps-1.netlify.app/",
      githubClient: "https://github.com/TawhidulIslamRefat/Hero-App.git",
      githubServer: "",
      challenges:
        "Building a responsive grid layout that mimics a native app store experience on the web. Handling large localized datasets and implementing efficient search and sort functionality on the client side.",
      futurePlans:
        "Fetching dynamic data from a real external API. Implementing PWA (Progressive Web App) features so users can install it on their devices.",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="w-full md:w-11/12 mx-auto bg-background-light  dark:bg-background-dark font-display">
      <div className="px-0 md:px-5 py-5 md:py-10 ">
        <header className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2"
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
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {["All", "Frontend", "Full Stack", "Backend"].map((cat, idx) => (
                <motion.button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 md:px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    filter === cat
                      ? "text-white bg-primary shadow-lg shadow-primary/30"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  {filter === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  {...project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </main>

        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
