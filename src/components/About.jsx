import { useEffect, useRef, useMemo } from "react";
import image from "../assets/WhatsApp Image 2025-12-05 at 14.23.37_df561ed3.jpg";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail, MdCode, MdWeb, MdStorage, MdDeveloperMode, MdApi, MdCheckCircle } from "react-icons/md";
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
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent z-20"></div>
                      <div className="absolute bottom-4 left-4 right-4 z-30">
                        <h3 className="text-2xl font-bold text-white mb-1">
                          Tawhidul Islam Refat
                        </h3>
                        <p className="text-primary font-semibold">
                          Full Stack Developer
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
                      Full Stack Developer
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

              {/* ── What I Do ── */}
              <WhatIDo whatIDoRef={whatIDoRef} />

              {/* ── What Defines Me ── */}
              <WhatDefinesMe />
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
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      />
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl h-full border border-slate-200 dark:border-slate-800">
        {children}
      </div>
    </div>
  );
};

/* ── What I Do ── */
const services = [
  {
    icon: MdWeb,
    title: "Frontend Development",
    color: "#3b82f6",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    desc: "Crafting pixel-perfect, responsive UIs with smooth animations and great UX.",
    number: "01",
  },
  {
    icon: MdStorage,
    title: "Backend Development",
    color: "#a855f7",
    tags: ["Node.js", "Express.js", "REST API"],
    desc: "Building scalable, secure server-side logic and database architecture.",
    number: "02",
  },
  {
    icon: MdDeveloperMode,
    title: "Full Stack Apps",
    color: "#22c55e",
    tags: ["End-to-End", "Auth", "Deployment"],
    desc: "Delivering complete web solutions from database design to polished UI.",
    number: "03",
  },
  {
    icon: MdApi,
    title: "MERN Stack",
    color: "#f97316",
    tags: ["MongoDB", "Express", "React", "Node"],
    desc: "Specialized in the MERN ecosystem for modern, full-featured web apps.",
    number: "04",
  },
];

const WhatIDo = ({ whatIDoRef }) => (
  <div ref={whatIDoRef} className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
    {/* header */}
    <div className="relative px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0"
      >
        <MdCode className="text-white text-2xl" />
      </motion.div>
      <div>
        <h3 className="text-2xl font-black text-slate-800 dark:text-white">What I Do</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Tailored web solutions for every need</p>
      </div>
      {/* decorative dots */}
      <div className="ml-auto hidden md:flex gap-1.5">
        {["#ef4444","#f59e0b","#22c55e"].map(c => (
          <span key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>

    {/* cards */}
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {services.map((svc, i) => (
        <motion.div
          key={svc.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="group relative rounded-2xl p-5 border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 overflow-hidden cursor-default"
        >
          {/* number watermark */}
          <span className="absolute top-3 right-4 text-5xl font-black opacity-5 dark:opacity-[0.07] select-none leading-none"
            style={{ color: svc.color }}>{svc.number}</span>

          {/* hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{ background: `radial-gradient(ellipse at top left, ${svc.color}18 0%, transparent 70%)` }} />

          {/* bottom accent line */}
          <motion.div className="absolute bottom-0 left-0 h-[3px] rounded-full"
            style={{ backgroundColor: svc.color }}
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }} />

          <div className="flex items-start gap-4 relative z-10">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow"
              style={{ backgroundColor: svc.color + "22", color: svc.color }}>
              <svc.icon />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-black text-slate-800 dark:text-white text-[15px] mb-1">{svc.title}</h4>
              <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{svc.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                    style={{ color: svc.color, backgroundColor: svc.color + "18" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ── What Defines Me ── */
const traits = [
  { emoji: "🎯", label: "Detail-Oriented", desc: "Every pixel matters",      color: "#3b82f6" },
  { emoji: "🎨", label: "Creative",         desc: "Design-first mindset",     color: "#ec4899" },
  { emoji: "🧩", label: "Problem Solver",   desc: "Love complex challenges",  color: "#8b5cf6" },
  { emoji: "🤝", label: "Team Player",      desc: "Collaboration is key",     color: "#06b6d4" },
  { emoji: "⚡", label: "Fast Learner",     desc: "Always upskilling",        color: "#f59e0b" },
  { emoji: "🔥", label: "Passionate",       desc: "Code is my craft",         color: "#ef4444" },
  { emoji: "💪", label: "Reliable",         desc: "Deadlines are sacred",     color: "#22c55e" },
  { emoji: "💡", label: "Innovative",       desc: "Fresh ideas always",       color: "#f97316" },
];

const WhatDefinesMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
      {/* header */}
      <div className="px-8 pt-8 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-1">
          <span className="w-2 h-6 rounded-full bg-gradient-to-b from-primary to-purple-500" />
          <h3 className="text-2xl font-black text-slate-800 dark:text-white">What Defines Me</h3>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 ml-5">The values & traits I bring to every project</p>
      </div>

      {/* traits grid */}
      <div ref={ref} className="p-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {traits.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="group relative flex flex-col items-center text-center p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 overflow-hidden cursor-default"
          >
            {/* hover bg */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              style={{ background: `radial-gradient(circle at center, ${t.color}15, transparent 70%)` }} />

            {/* top color bar */}
            <motion.div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
              style={{ backgroundColor: t.color }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: i * 0.07 + 0.3, duration: 0.5 }} />

            <div className="relative z-10">
              {/* emoji with glow ring */}
              <div className="relative w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: t.color + "22" }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-3xl relative z-10">{t.emoji}</span>
              </div>

              <p className="text-[14px] font-black text-slate-700 dark:text-slate-200 leading-tight">{t.label}</p>
              <p className="text-[12px] font-semibold text-slate-400 dark:text-slate-500 mt-0.5">{t.desc}</p>

              {/* check badge */}
              <div className="mt-2 flex justify-center">
                <MdCheckCircle className="text-sm" style={{ color: t.color }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;