import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaArrowUp,
} from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const SocialIcon = ({ social, index }) => {
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // GSAP rotation animation
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: 360,
        duration: 3 + index * 0.5,
        repeat: -1,
        ease: "linear",
        yoyo: false,
      });
    }

    // GSAP glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.3,
        opacity: 0.6,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    }
  }, [index]);

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        scale: { duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 200 },
        y: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: index * 0.2,
        }
      }}
      whileHover={{
        y: -12,
        scale: 1.3,
        rotate: [0, -15, 15, -15, 0],
        backgroundColor: "var(--color-primary)",
        color: "#ffffff",
        borderColor: "var(--color-primary)",
        transition: {
          rotate: { duration: 0.6 },
          y: { duration: 0.2 },
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.3 },
          color: { duration: 0.3 },
          borderColor: { duration: 0.3 }
        }
      }}
      whileTap={{ scale: 0.85, rotate: 180 }}
      className="w-10 h-10 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-400 shadow-sm dark:shadow-none hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div
        ref={glowRef}
        className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0"
      />

      {/* Rotating border effect */}
      <div
        ref={iconRef}
        className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, var(--color-primary) 50%, transparent 100%)',
        }}
      />

      {/* Icon */}
      <span className="relative z-10">{social.icon}</span>

      {/* Ripple effect on hover */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-primary"
        initial={{ scale: 1, opacity: 0 }}
        whileHover={{
          scale: 1.6,
          opacity: [0, 0.6, 0],
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Particle burst on hover */}
      {[...Array(4)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          initial={{ scale: 0, x: 0, y: 0 }}
          whileHover={{
            scale: [0, 1, 0],
            x: [0, Math.cos((i * Math.PI) / 2) * 20],
            y: [0, Math.sin((i * Math.PI) / 2) * 20],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 0.6, delay: i * 0.05 }}
        />
      ))}
    </motion.a>
  );
};

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/TawhidulIslamRefat" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/tawhidul-islam-refat-webdeveloper/" },
    { icon: <FaTwitter />, href: "https://x.com/TawhidulRefat?t=JPXwrO7BzzrNkFx2Kbs6Bw&s=09" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/tawhidulislamrefat11" },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full md:w-11/12 mx-auto relative font-display overflow-hidden transition-colors duration-500 border-t border-slate-200 dark:border-slate-800">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:pt-15 relative border-b border-white z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: About */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <span className="p-2 bg-primary/10 rounded-lg">
                  <HiCode className="text-2xl text-primary" />
                </span>
                <span className="text-primary">Tawhidul Islam Refat</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base transition-colors duration-300">
                Full-Stack MERN Developer building modern, scalable, and high-performance web applications with a strong focus on user experience and clean code.
              </p>
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} social={social} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white relative inline-block transition-colors duration-300">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 w-fit"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium text-sm">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white relative inline-block transition-colors duration-300">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MdEmail />
                </div>
                <div className="text-sm">
                  <p className="text-slate-500 dark:text-slate-500 font-medium mb-0.5 transition-colors duration-300">
                    Email
                  </p>
                  <a
                    href="mailto:tawhidulislamrefat11@gmail.com"
                    className="text-slate-700 dark:text-slate-300 font-semibold hover:text-primary dark:hover:text-primary transition-colors break-all"
                  >
                    tawhidulislamrefat11@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MdPhone />
                </div>
                <div className="text-sm">
                  <p className="text-slate-500 dark:text-slate-500 font-medium mb-0.5 transition-colors duration-300">
                    Phone
                  </p>
                  <a
                    href="tel:+8801913334594"
                    className="text-slate-700 dark:text-slate-300 font-semibold hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    +880 1913-334594
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="mt-1 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MdLocationOn />
                </div>
                <div className="text-sm">
                  <p className="text-slate-500 dark:text-slate-500 font-medium mb-0.5 transition-colors duration-300">
                    Location
                  </p>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold transition-colors duration-300">
                    Khulna, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Map */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h3
              className="text-lg font-bold text-slate-900 dark:text-white relative inline-block transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Location
              <motion.span
                className="absolute -bottom-2 left-0 h-0.5 bg-primary rounded-full"
                initial={{ width: "2rem" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="w-full h-40 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-800/50 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117562.90317531726!2d89.479589!3d22.8456208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9071cb47152f%3A0xf04b212290718952!2sKhulna!5e0!3m2!1sen!2sbd!4v1716789012345!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              ></iframe>
              <motion.div
                className="absolute inset-0 bg-primary/10 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Animated corner indicators */}
              <motion.div
                className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar: Copyright + Designed By + Back to Top */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm relative"
        >
          {/* Animated border line */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              width: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.p
            className="text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} Tawhidul Islam Refat. All rights
            reserved.
          </motion.p>

          <div className="flex items-center gap-6">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300 font-medium group relative overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 188, 249, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10"></span>
              <motion.div
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <FaArrowUp className="w-3 h-3" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
