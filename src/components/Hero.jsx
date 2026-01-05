import React, { useEffect, useRef } from "react";
import image from "../assets/WhatsApp Image 2025-12-05 at 19.53.15_af96930d.jpg";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Hero = () => {
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const hireButtonRef = useRef(null);
  const resumeButtonRef = useRef(null);

  useEffect(() => {
    // GSAP Animations for Background Blobs (Organic floating movement)
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current];

    blobs.forEach((blob, index) => {
      gsap.to(blob, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        scale: "random(0.8, 1.2)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 2,
      });
    });

    // GSAP Button Animations
    if (hireButtonRef.current) {
      // Continuous glow pulse
      gsap.to(hireButtonRef.current, {
        boxShadow: "0 10px 40px rgba(0, 188, 249, 0.6)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle floating
      gsap.to(hireButtonRef.current, {
        y: -3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    if (resumeButtonRef.current) {
      // Subtle floating with different timing
      gsap.to(resumeButtonRef.current, {
        y: -3,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full md:w-11/12 mx-auto mt-5 md:mt-10 md:px-5 px-0">
      {/* Glassmorphism Card */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col-reverse md:flex-row items-center justify-between w-full bg-white/30 dark:bg-slate-800/40 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 relative z-10 transition-all duration-300 hover:shadow-primary/10 overflow-hidden"
      >
        {/* Animated Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite] pointer-events-none"></div>

        {/* Content Section */}
        <div className="flex flex-col space-y-6 text-center md:text-left z-10">
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-2 rounded-full bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border border-white/20 w-fit mx-auto mt-5 md:mt-0 md:mx-0"
          >
            <p className="text-sm  font-semibold text-primary tracking-wider uppercase">
              Welcome to my Portfolio
            </p>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-extrabold text-slate-800 dark:text-white"
            >
              <span className="text-3xl">Hi, I'm</span> <br />
              <span className="text-transparent bg-clip-text text-[22px] md:text-5xl bg-gradient-to-r from-primary to-purple-600">
                Tawhidul Islam Refat
              </span>
            </motion.h1>
            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-2xl font-bold text-slate-600 dark:text-slate-300"
            >
              I am a{" "}
              <span className="text-primary inline-block text-[16px] md:text-xl">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack (MERN) Developer",
                      "Frontend Specialist",
                      "React.JS Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Driven Full Stack (MERN) Developer with hands-on experience in
            React, Next.js, Node.js, Express.js, and MongoDB. Skilled in
            building scalable, responsive, and user-friendly web applications
            with clean UI, efficient backend logic, and seamless user
            experiences. Focused on writing maintainable code and delivering
            high-quality end-to-end web solutions.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center md:justify-start pt-2"
          >
            <motion.a
              href="https://github.com/TawhidulIslamRefat"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 text-white shadow-lg hover:shadow-xl hover:shadow-slate-500/50 transition-shadow duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaGithub className="text-xl" />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/tawhidul-islam-refat-developer/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-shadow duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <FaLinkedin className="text-xl" />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://x.com/TawhidulRefat?t=JPXwrO7BzzrNkFx2Kbs6Bw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-lg hover:shadow-xl hover:shadow-sky-500/50 transition-shadow duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <FaTwitter className="text-xl" />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/tawhidulislamrefat11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg hover:shadow-xl hover:shadow-blue-600/50 transition-shadow duration-300"
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <FaFacebook className="text-xl" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Horizontal Divider Line */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-lg mx-auto md:mx-0"
          >
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
          >
            {/* Hire Me Button with GSAP + Framer Motion */}
            <motion.a
              ref={hireButtonRef}
              href="#contact"
              whileHover={{
                scale: 1.08,
                rotate: [0, -2, 2, -2, 0],
                transition: {
                  rotate: { duration: 0.5 },
                  scale: { duration: 0.2 },
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg overflow-hidden group"
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-200%", "200%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              />

              {/* Ripple effect on hover */}
              <motion.span
                className="absolute inset-0 rounded-xl border-2 border-white/50"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: 1.1,
                  opacity: [0, 0.5, 0],
                }}
                transition={{ duration: 0.6 }}
              />

              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <motion.span
                  animate={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            {/* Download Resume Button with GSAP + Framer Motion */}
            <motion.a
              ref={resumeButtonRef}
              href="https://drive.google.com/file/d/1YU_AzukxPRa1gkLu4GOqWqs5WbQbDT5Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.08,
                borderColor: "var(--color-primary)",
                boxShadow: "0 10px 30px rgba(0, 188, 249, 0.3)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-bold py-3 px-8 rounded-xl border-2 border-slate-200 dark:border-slate-700 shadow-md overflow-hidden group"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Particle burst effect */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, i % 2 === 0 ? 20 : -20],
                    y: [0, i < 2 ? -20 : 20],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                />
              ))}

              <span className="relative z-10 flex items-center gap-2">
                <motion.span
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  📄
                </motion.span>
                Download Resume
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          variants={itemVariants}
          className="md:w-5/12 mt-12 md:mt-0 relative group"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            {/* Rotating Gradient Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-75 blur-md group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full p-2 z-10">
              <img
                alt="Tawhidul Islam Refat"
                className="w-full h-full rounded-full object-cover border-4 border-slate-100 dark:border-slate-800 shadow-inner"
                src={image}
              />
            </div>
            {/* Floating elements decorative */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-lg z-20 flex items-center justify-center"
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute top-1/2 -left-12 w-16 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-20 flex items-center justify-center"
            >
              <span className="text-xl font-bold text-primary">JS</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute -bottom-6 right-10 h-12 px-4 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-20 flex items-center justify-center"
            >
              <span className="text-xl font-bold text-primary whitespace-nowrap">
                Full Stack
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
