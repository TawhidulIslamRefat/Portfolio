import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const ContactInfoCard = ({ info, index }) => {
    const cardRef = useRef(null);
    const borderRef = useRef(null);
    const iconRef = useRef(null);
    const glowRef = useRef(null);
    const particleRefs = useRef([]);

    useEffect(() => {
        // GSAP border rotation with varying speeds
        if (borderRef.current) {
            gsap.to(borderRef.current, {
                rotation: 360,
                duration: 5 + index * 0.5,
                repeat: -1,
                ease: "linear",
            });
        }

        // GSAP floating animation with different patterns
        if (cardRef.current) {
            gsap.to(cardRef.current, {
                y: -10,
                x: index % 2 === 0 ? 3 : -3,
                duration: 2.5 + index * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.2,
            });
        }

        // GSAP icon pulse and rotation
        if (iconRef.current) {
            gsap.to(iconRef.current, {
                scale: 1.15,
                rotation: 5,
                duration: 1.8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.3,
            });
        }

        // GSAP glow pulse
        if (glowRef.current) {
            gsap.to(glowRef.current, {
                scale: 1.5,
                opacity: 0.4,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: index * 0.4,
            });
        }

        // GSAP particle animations
        particleRefs.current.forEach((particle, i) => {
            if (particle) {
                gsap.to(particle, {
                    y: -20 - i * 5,
                    opacity: 0,
                    duration: 2 + i * 0.3,
                    repeat: -1,
                    ease: "power1.out",
                    delay: i * 0.5,
                });
            }
        });
    }, [index]);

    return (
        <motion.div
            className="relative rounded-2xl p-[3px] overflow-hidden"
            style={{ perspective: "1000px" }}
        >
            {/* Electric Border */}
            <div 
                ref={borderRef}
            />
            
            {/* Gradient border on hover */}
            <div />

            {/* Card Content */}
            <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl flex flex-col items-center text-center group">
                {/* Animated corner accents */}
                <motion.div
                    className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"
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
                    className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg"
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

                {/* Icon with animation */}
                <motion.div 
                    ref={iconRef}
                    className={`w-16 h-16 rounded-full ${info.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center text-primary mb-6 relative`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                >
                    {info.icon}
                    {/* Ripple effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{
                            scale: [1, 1.5],
                            opacity: [0.5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                    />
                </motion.div>

                <motion.h3 
                    className="text-xl font-bold text-slate-900 dark:text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                >
                    {info.title}
                </motion.h3>
                
                {info.link ? (
                    <motion.a 
                        href={info.link} 
                        className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {info.value}
                    </motion.a>
                ) : (
                    <motion.p 
                        className="text-slate-600 dark:text-slate-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                    >
                        {info.value}
                    </motion.p>
                )}
            </div>
        </motion.div>
    );
};

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE ID, TEMPLATE ID, AND PUBLIC KEY
        emailjs.sendForm(
            'service_ldvvfnj',
            'template_6tpfp4h',
            formRef.current,
            'DcpOrevzKxsTYTShi'
        )
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setStatus('error');
                setTimeout(() => setStatus(null), 5000);
            });
    };

    const contactInfo = [
        {
            icon: <MdEmail className="text-3xl" />,
            title: "Email",
            value: "tawhidulislamrefat11@gmail.com",
            link: "mailto:tawhidulislamrefat11@gmail.com",
            color: "bg-blue-500"
        },
        {
            icon: <MdPhone className="text-3xl" />,
            title: "Phone",
            value: "+8801913334594",
            link: "tel:+8801913334594",
            color: "bg-green-500"
        },
        {
            icon: <MdLocationOn className="text-3xl" />,
            title: "Location",
            value: "Khulna, Bangladesh",
            link: null,
            color: "bg-purple-500"
        }
    ];

    return (
        <section className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 py-16 md:py-24 relative overflow-hidden">
            {/* Background Decorations */}
            

            <div className="w-full md:w-11/12 mx-auto px-0 sm:px-6 lg:px-5 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </motion.div>

                {/* Top Section: Contact Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactInfo.map((info, index) => (
                        <ContactInfoCard key={index} info={info} index={index} />
                    ))}
                </div>

                {/* Bottom Section: Contact Form */}
                <div className="max-w-3xl mx-auto">
                    <ContactFormCard formRef={formRef} sendEmail={sendEmail} loading={loading} status={status} />
                </div>
            </div>
        </section>
    );
};

const ContactFormCard = ({ formRef, sendEmail, loading, status }) => {
    const formCardRef = useRef(null);
    const formBorderRef = useRef(null);

    useEffect(() => {
        // GSAP border rotation
        if (formBorderRef.current) {
            gsap.to(formBorderRef.current, {
                rotation: 360,
                duration: 5,
                repeat: -1,
                ease: "linear",
            });
        }
    }, []);

    return (
        <motion.div
            ref={formCardRef}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl p-[3px] overflow-hidden"
        >
            {/* Electric Border */}
            <div 
                ref={formBorderRef}
                className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_15%,transparent_30%,var(--color-primary)_45%,transparent_60%,var(--color-primary)_75%,transparent_90%,var(--color-primary)_100%)] opacity-70"
            />

            {/* Card Content */}
            <div className="relative bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl"
            >
                {/* Animated corner accents */}
                <motion.div
                    className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"
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
                    className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
                <motion.div
                    className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"
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
                <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                    }}
                />

                <motion.p 
                    className='text-xl text-center mb-8 relative z-10'
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Fill out the form below and I'll get back to you as soon as possible
                </motion.p>
                        {/* Status Messages */}
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg flex items-center justify-center"
                            >
                                <span className="font-medium">Message sent successfully!</span>
                            </motion.div>
                        )}
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center justify-center"
                            >
                                <span className="font-medium">Something went wrong. Please try again.</span>
                            </motion.div>
                        )}

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.div 
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                                        placeholder="Your Name"
                                    />
                                </motion.div>
                                <motion.div 
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                                        placeholder="your@email.com"
                                    />
                                </motion.div>
                            </div>
                            <motion.div 
                                className="space-y-2"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none dark:text-white"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                whileHover={{ 
                                    scale: 1.03,
                                    boxShadow: "0 20px 40px rgba(0, 188, 249, 0.4)",
                                }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                disabled={loading}
                                className="relative w-full sm:w-auto sm:min-w-[280px] sm:mx-auto h-14 px-8 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                            >
                                {/* Animated background shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    animate={{
                                        x: ['-200%', '200%'],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 1,
                                        ease: "easeInOut",
                                    }}
                                />
                                
                                {loading ? (
                                    <div className="flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    <>
                                        <span className="relative z-10">Send Message</span>
                                        <motion.span
                                            className="relative z-10"
                                            animate={{
                                                x: [0, 5, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <MdSend className="text-xl" />
                                        </motion.span>
                                    </>
                                )}
                            </motion.button>

                            {/* Social Media Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700"
                            >
                                <motion.p 
                                    className="text-center text-slate-600 dark:text-slate-400 mb-4 font-medium"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Or connect with me on social media
                                </motion.p>
                                <div className="flex justify-center gap-4">
                                    {[
                                        { icon: <FaGithub />, href: 'https://github.com/TawhidulIslamRefat', label: 'GitHub' },
                                        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/tawhidul-islam-refat-webdeveloper/', label: 'LinkedIn' },
                                        { icon: <FaTwitter />, href: 'https://x.com/TawhidulRefat?t=JPXwrO7BzzrNkFx2Kbs6Bw&s=09', label: 'Twitter' },
                                        { icon: <FaFacebook />, href: 'https://www.facebook.com/tawhidulislamrefat11', label: 'Facebook' }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0, y: 20 }}
                                            whileInView={{ 
                                                opacity: 1, 
                                                scale: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay: 0.9 + index * 0.1,
                                                type: "spring",
                                                stiffness: 200,
                                            }}
                                            whileHover={{ 
                                                scale: 1.2,
                                                y: -5,
                                                rotate: [0, -10, 10, -10, 0],
                                                backgroundColor: "var(--color-primary)",
                                                color: "#ffffff",
                                                borderColor: "var(--color-primary)",
                                                boxShadow: "0 10px 25px rgba(0, 188, 249, 0.4)",
                                                transition: { 
                                                    rotate: { duration: 0.5 },
                                                    scale: { duration: 0.2 },
                                                }
                                            }}
                                            whileTap={{ scale: 0.9, rotate: 180 }}
                                            className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 text-xl transition-all duration-300 relative overflow-hidden group"
                                            aria-label={social.label}
                                        >
                                            {/* Ripple effect */}
                                            <motion.span
                                                className="absolute inset-0 rounded-full border-2 border-primary"
                                                initial={{ scale: 1, opacity: 0 }}
                                                whileHover={{
                                                    scale: 1.5,
                                                    opacity: [0, 0.5, 0],
                                                }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <span className="relative z-10">{social.icon}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </form>
                    </div>
        </motion.div>
    );
};

export default Contact;
