import React, { useEffect, useRef, useMemo } from "react";
import image from "../assets/WhatsApp Image 2025-12-05 at 14.23.37_df561ed3.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail, MdCode, MdRocket, MdFavorite } from "react-icons/md";
import { gsap } from "gsap";

const About = () => {
  const electricRef = useRef(null);
  const borderRef = useRef(null);

  // Generate random positions once for sparks using useMemo
  const sparkPositions = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        left: Math.random() * 100,
      })),
    []
  );

  // Generate random delays once for lightning using useMemo
  const lightningDelays = useMemo(
    () => Array.from({ length: 4 }, () => Math.random() * 3 + 1),
    []
  );

  useEffect(() => {
    // Electric spark animation using GSAP
    if (electricRef.current) {
      const sparks = electricRef.current.children;

      gsap.to(sparks, {
        opacity: 1,
        scale: 1.5,
        duration: 0.1,
        stagger: {
          each: 0.05,
          repeat: -1,
          yoyo: true,
        },
        ease: "power2.inOut",
      });

      gsap.to(sparks, {
        x: "random(-10, 10)",
        y: "random(-10, 10)",
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Border glow animation using GSAP
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        boxShadow:
          "0 0 30px rgba(0, 188, 249, 0.8), 0 0 60px rgba(147, 51, 234, 0.6)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section className="py-5 pt-14 md:pt-20 w-full overflow-hidden relative">
      <div className="w-full md:w-11/12 mx-auto px-0 md:px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-2">
            <span className="text-slate-800 dark:text-white">About Me</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Full Stack Developer | Problem Solver | Creative Builder
          </p>
        </motion.div>

        <div className="w-full mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Profile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-800 sticky top-24">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative mb-6"
                >
                  <div
                    ref={borderRef}
                    className="relative w-full aspect-square overflow-hidden rounded-2xl border-4 border-primary shadow-lg"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 188, 249, 0.5)",
                    }}
                  >
                    {/* Animated Border Effect */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-2xl blur-sm opacity-75"
                    />
                    <img
                      src={image}
                      alt="Tawhidul Islam Refat"
                      className="relative w-full h-full object-cover z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-20"></div>
                    <div className="absolute bottom-4 left-4 right-4 z-30">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        Tawhidul Islam Refat
                      </h3>
                      <p className="text-primary font-semibold">
                        Full Stack MERN Developer
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Years", value: "1+" },
                    { label: "Projects", value: "20+" },
                    { label: "Skills", value: "10+" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl"
                    >
                      <p className="text-3xl font-bold text-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {[
                    {
                      icon: FaGithub,
                      url: "https://github.com/TawhidulIslamRefat",
                    },
                    {
                      icon: FaLinkedin,
                      url: "https://www.linkedin.com/in/tawhidul-islam-refat-webdeveloper/",
                    },
                    {
                      icon: FaTwitter,
                      url: "https://x.com/TawhidulRefat?t=JPXwrO7BzzrNkFx2Kbs6Bw&s=09",
                    },
                    {
                      icon: FaFacebook,
                      url: "https://www.facebook.com/tawhidulislamrefat11",
                    },
                    {
                      icon: MdEmail,
                      url: "mailto:tawhidulislamrefat11@gmail.com",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      target={
                        social.url.includes("mailto") ? undefined : "_blank"
                      }
                      rel={
                        social.url.includes("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8 space-y-8"
            >
              {/* Introduction */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                  <span className="text-4xl">👋</span> Hello, I'm Refat!
                </h3>
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate{" "}
                    <span className="font-bold text-primary">
                      Full Stack MERN Developer
                    </span>{" "}
                    who thrives on turning creative ideas into functional,
                    beautiful web applications. My journey in web development
                    started with a simple curiosity about how websites work, and
                    it has grown into a deep love for crafting digital
                    experiences.
                  </p>
                  <p>
                    I specialize in building{" "}
                    <span className="font-bold text-primary">
                      modern, responsive, and user-friendly applications
                    </span>{" "}
                    using React, Node.js, Express, and MongoDB. From
                    pixel-perfect frontends with smooth animations to robust
                    backend APIs, I enjoy every aspect of the development
                    process.
                  </p>
                  <p>
                    Outside of coding, you'll find me gaming 🎮, listening to
                    music 🎵, or exploring the latest tech trends 🚀. I'm a firm
                    believer in continuous learning and always looking for new
                    challenges to grow my skills.
                  </p>
                </div>
              </div>

              {/* Three Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg"
                >
                  <MdCode className="text-5xl mb-4" />
                  <h4 className="text-xl font-bold mb-2">Tech Stack</h4>
                  <p className="text-sm text-blue-100">
                    React • Node.js • Express • MongoDB • Next.js • TypeScript •
                    Tailwind CSS
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl p-6 text-white shadow-lg"
                >
                  <MdFavorite className="text-5xl mb-4" />
                  <h4 className="text-xl font-bold mb-2">What I Love</h4>
                  <p className="text-sm text-pink-100">
                    Building beautiful UIs • Smooth animations • Clean code •
                    Problem solving
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
                >
                  <MdRocket className="text-5xl mb-4" />
                  <h4 className="text-xl font-bold mb-2">My Goal</h4>
                  <p className="text-sm text-purple-100">
                    Join a dynamic team • Continuous learning • Build impactful
                    products
                  </p>
                </motion.div>
              </div>

              {/* Skills & Traits */}
              <BorderCard className="shadow-xl">
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                    What Defines Me
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { emoji: "🎯", label: "Detail-Oriented" },
                      { emoji: "🎨", label: "Creative" },
                      { emoji: "🧩", label: "Problem Solver" },
                      { emoji: "🤝", label: "Team Player" },
                      { emoji: "⚡", label: "Fast Learner" },
                      { emoji: "🔥", label: "Passionate" },
                      { emoji: "💪", label: "Reliable" },
                      { emoji: "💡", label: "Innovative" },
                    ].map((trait, i) => (
                      <motion.div
                        key={trait.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 text-center"
                      >
                        <div className="text-3xl mb-2">{trait.emoji}</div>
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {trait.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </BorderCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated Border Card Component
const BorderCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group p-[2px] rounded-3xl overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,var(--color-primary)_50%,#0000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      />
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl h-full border border-slate-200 dark:border-slate-800">
        {children}
      </div>
    </div>
  );
};

export default About;
