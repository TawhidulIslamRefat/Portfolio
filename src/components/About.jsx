import { useEffect, useRef, useMemo } from "react";
import image from "../assets/profile-about.jpg";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import {
  MdEmail,
  MdCode,
} from "react-icons/md";
import SocialIcon from "./SocialIcon";
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
    [],
  );

  // Generate random delays once for lightning using useMemo
  const lightningDelays = useMemo(
    () => Array.from({ length: 4 }, () => Math.random() * 3 + 1),
    [],
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
      tl.fromTo(
        sectionEl,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );
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
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.2)",
        },
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
            Competative Programmer | Software Developer | Full Stack Developer
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
                        style={{ objectPosition: "center top" }}
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
                      { label: "Skills", value: "15+" },
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
                  <div className="flex justify-center gap-3 flex-wrap">
                    <SocialIcon
                      icon={FaGithub}
                      href="https://github.com/TawhidulIslamRefat"
                      label="GitHub"
                      gradient="from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800"
                      shadow="hover:shadow-slate-500/50"
                      delay={0}
                      size="sm"
                    />
                    <SocialIcon
                      icon={FaLinkedin}
                      href="https://www.linkedin.com/in/tawhidul-islam-refat-webdeveloper/"
                      label="LinkedIn"
                      gradient="from-blue-500 to-blue-700"
                      shadow="hover:shadow-blue-500/50"
                      delay={0.2}
                      size="sm"
                    />
                    <SocialIcon
                      icon={SiCodeforces}
                      href="https://codeforces.com/profile/tawhidulislamrefat"
                      label="Codeforces"
                      gradient="from-blue-500 to-blue-700"
                      shadow="hover:shadow-blue-500/50"
                      delay={0.4}
                      size="sm"
                    />
                    <SocialIcon
                      icon={SiCodechef}
                      href="https://www.codechef.com/users/tawhidulislam1"
                      label="CodeChef"
                      gradient="from-amber-500 to-amber-700"
                      shadow="hover:shadow-amber-500/50"
                      delay={0.6}
                      size="sm"
                    />
                    <SocialIcon
                      icon={SiLeetcode}
                      href="https://leetcode.com/u/Tawhidul_Islam_Refat/"
                      label="LeetCode"
                      gradient="from-orange-400 to-orange-600"
                      shadow="hover:shadow-orange-500/50"
                      delay={0.8}
                      size="sm"
                    />
                    <SocialIcon
                      icon={MdEmail}
                      href="mailto:tawhidulislamrefat11@gmail.com"
                      label="Email"
                      gradient="from-red-500 to-rose-600"
                      shadow="hover:shadow-red-500/50"
                      delay={1.0}
                      size="sm"
                    />
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
                      Software Developer and Competitive Programmer
                    </span>{" "}
                    who enjoys turning ideas into meaningful digital experiences
                    and solving challenging problems through code. My journey in
                    programming started with curiosity about how technology
                    works, and it has grown into a strong passion for
                    <span className="font-bold text-primary">
                      {" "}
                      software development, problem-solving, and continuous
                      learning.
                    </span>
                  </p>
                  <p>
                    I specialize in building{" "}
                    <span className="font-bold text-primary">
                      {" "}
                      modern, responsive, and user-friendly web applications
                    </span>{" "}
                    using technologies such as{" "}
                    <span className="font-bold text-primary">
                      {" "}
                      React, Next.js, Node.js, Express.js, and MongoDB.
                    </span>{" "}
                    Alongside development, I actively practice{" "}
                    <span className="font-bold text-primary">
                      {" "}
                      Data Structures, Algorithms, and Competitive Programming,
                    </span>{" "}
                    which has strengthened my logical thinking and ability to
                    write efficient, optimized solutions.
                  </p>
                  <p>
                    I enjoy working on both{" "}
                    <span className="font-bold text-primary">
                      frontend and backend development
                    </span>{" "}
                    —from creating clean and engaging user interfaces to
                    developing reliable APIs and scalable application logic. I’m
                    passionate about writing
                    <span className="font-bold text-primary">
                      {" "}
                      clean, maintainable, and efficient code
                    </span>{" "}
                    while continuously exploring new technologies and improving
                    my skills.
                  </p>
                  <p>
                    Outside of coding, I enjoy{" "}
                    <span className="font-bold text-primary">
                      {" "}
                      gaming 🎮, listening to music 🎵, and exploring new
                      technologies 🚀
                    </span>{" "}
                    . I believe that consistent learning, curiosity, and solving
                    new challenges are essential for becoming a better
                    developer.
                  </p>
                  {/* Merged "Love" and "Goal" Text */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p>
                      <span className="font-bold text-pink-600">
                        {" "}
                        My passion lies in{" "}
                      </span>{" "}
                      building impactful software, solving complex problems,
                      creating smooth user experiences, and turning ideas into
                      real-world applications.!
                    </p>
                    <p className="mt-2">
                      <span className="font-bold text-pink-600">
                        {" "}
                        My goal is to{" "}
                      </span>{" "}
                      grow as a skilled software engineer, contribute to
                      meaningful products, collaborate with talented teams, and
                      continuously challenge myself to become better at what I
                      do.
                    </p>
                  </div>
                </div>
              </div>

              {/* ── What I Do ── */}
              <WhatIDo whatIDoRef={whatIDoRef} />
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
    <div
      className={`relative group p-[2px] rounded-3xl overflow-hidden ${className}`}
    >
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
    icon: MdCode,
    title: "🏆 Competitive Programming",
    color: "#3b82f6",
    desc: "I regularly practice Competitive Programming, focusing on Data Structures, Algorithms, and efficient problem-solving to strengthen my logical thinking and coding skills.",
    number: "01",
  },
  {
    icon: MdCode,
    title: "💻 Software Development",
    color: "#a855f7",
    desc: "I build reliable and efficient software solutions with a strong focus on clean code, problem-solving, and scalable application logic.",
    number: "02",
  },
  {
    icon: MdCode,
    title: "🌐 Full Stack Development",
    color: "#22c55e",
    desc: "I develop complete web applications, working across both frontend and backend to create responsive, scalable, and user-friendly digital experiences.",
    number: "03",
  },
  {
    icon: MdCode,
    title: "⚡ MERN / Frontend Development",
    color: "#f97316",
    desc: "I create modern, responsive, and interactive web interfaces using technologies like React, JavaScript, HTML, CSS, and the MERN stack.",
    number: "04",
  },
];

const WhatIDo = ({ whatIDoRef }) => (
  <div
    ref={whatIDoRef}
    className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
  >
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
        <h3 className="text-2xl font-black text-slate-800 dark:text-white">
          What I Do
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          My core areas of focus & expertise
        </p>
      </div>
      {/* decorative dots */}
      <div className="ml-auto hidden md:flex gap-1.5">
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
          <span
            key={c}
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: c }}
          />
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
          <span
            className="absolute top-3 right-4 text-5xl font-black opacity-5 dark:opacity-[0.07] select-none leading-none"
            style={{ color: svc.color }}
          >
            {svc.number}
          </span>

          {/* hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{
              background: `radial-gradient(ellipse at top left, ${svc.color}18 0%, transparent 70%)`,
            }}
          />

          {/* bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] rounded-full"
            style={{ backgroundColor: svc.color }}
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
          />

          <div className="flex items-start gap-4 relative z-10">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow"
              style={{ backgroundColor: svc.color + "22", color: svc.color }}
            >
              <svc.icon />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-black text-slate-800 dark:text-white text-[15px] mb-1">
                {svc.title}
              </h4>
              <p className="text-[13px] font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                {svc.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default About;