import React, { useEffect, useRef, useMemo } from "react";
import image from "../assets/WhatsApp Image 2025-12-05 at 14.23.37_df561ed3.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail, MdCode, MdRocket, MdFavorite, MdWeb, MdStorage, MdDeveloperMode, MdApi } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const electricRef = useRef(null);
  const borderRef = useRef(null);
  const whatIDoRef = useRef(null);
  const whatIDoCardsRef = useRef(null);

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

    // "What I Do" section GSAP animations (ScrollTrigger)
    const sectionEl = whatIDoRef.current;
    const cardsEl = whatIDoCardsRef.current;
    const triggers = [];
    if (sectionEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(sectionEl, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
      triggers.push(tl.scrollTrigger);
    }
    if (cardsEl && cardsEl.children.length) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsEl,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
      tl.fromTo(
        cardsEl.children,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.2)" }
      );
      triggers.push(tl.scrollTrigger);
    }
    return () => triggers.forEach((t) => t.kill());
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
              {/* Profile Card with Electric Border */}
              <BorderCard className="shadow-2xl sticky top-24">
                <div className="p-8">
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
              </BorderCard>
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
                  {/* Merged "Love" and "Goal" Text */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p>
                      <span className="font-bold text-pink-500">My passion lies in</span> building beautiful UIs, smooth animations, and writing clean, efficient code. I love solving complex problems and turning coffee into code!
                    </p>
                    <p className="mt-2">
                      <span className="font-bold text-cyan-500">My goal is to</span> join a dynamic team where I can contribute to impactful products, continue learning, and grow as a developer.
                    </p>
                  </div>
                </div>
              </div>

              {/* What I Do Section - Increased height + GSAP & Framer Motion */}
              <div
                ref={whatIDoRef}
                className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 min-h-[320px] md:min-h-[380px] py-8 md:py-10 px-6 md:px-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="p-3 rounded-xl bg-primary/10"
                    >
                      <MdCode className="text-primary text-3xl" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">
                        What I Do
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 mt-1">
                        Tailored web solutions for your business
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div
                  ref={whatIDoCardsRef}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6"
                >
                  {[
                    { title: "Frontend", icon: MdWeb, color: "text-blue-500", bg: "bg-blue-500/10", desc: "UI & UX" },
                    { title: "Backend", icon: MdStorage, color: "text-purple-500", bg: "bg-purple-500/10", desc: "APIs & DB" },
                    { title: "Full Stack", icon: MdDeveloperMode, color: "text-green-500", bg: "bg-green-500/10", desc: "End-to-end" },
                    { title: "MERN Stack", icon: MdApi, color: "text-orange-500", bg: "bg-orange-500/10", desc: "MongoDB, Express, React, Node" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -8, scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="p-5 md:p-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary/40 transition-colors bg-slate-50 dark:bg-slate-800/50 flex flex-col items-center gap-4 text-center min-h-[140px] md:min-h-[160px] justify-center"
                    >
                      <motion.div
                        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <item.icon className="text-xl md:text-2xl" />
                      </motion.div>
                      <div>
                        <span className="font-bold text-base md:text-lg text-slate-700 dark:text-slate-300 block">
                          {item.title}
                        </span>
                        {item.desc && (
                          <span className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-0.5 block">
                            {item.desc}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
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
