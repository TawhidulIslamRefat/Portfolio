import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Reusable social icon button with animated tooltip.
 *
 * Props:
 *  icon       — React icon component
 *  href       — link URL
 *  label      — tooltip text (platform name)
 *  gradient   — Tailwind gradient classes for the button background
 *  shadow     — Tailwind shadow-color class on hover
 *  delay      — float animation delay (seconds)
 *  size       — "md" (default 48px) | "sm" (40px)
 */
const SocialIcon = ({
  icon: Icon,
  href,
  label,
  gradient = "from-slate-600 to-slate-800",
  shadow = "hover:shadow-slate-500/50",
  delay = 0,
  size = "md",
}) => {
  const [hovered, setHovered] = useState(false);
  const isEmail = href?.startsWith("mailto");
  const dim = size === "sm" ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl";

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.85 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="relative px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-700 border border-slate-700 dark:border-slate-600 shadow-xl">
              <span className="text-[11px] font-bold text-white whitespace-nowrap tracking-wide">
                {label}
              </span>
              {/* arrow */}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-[5px] w-2.5 h-2.5 bg-slate-900 dark:bg-slate-700 border-r border-b border-slate-700 dark:border-slate-600 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon button */}
      <motion.a
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        aria-label={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.45 } }}
        whileTap={{ scale: 0.9 }}
        className={`relative ${dim} flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-white shadow-lg hover:shadow-xl ${shadow} transition-shadow duration-300`}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
        >
          <Icon />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default SocialIcon;
