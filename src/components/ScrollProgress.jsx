import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { useSmoothScroll } from "../providers/SmoothScrollProvider";

export default function ScrollProgress() {
  const { lenis } = useSmoothScroll();
  const scaleX = useSpring(0, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const lenisInstance = lenis?.current;
    if (!lenisInstance) return undefined;

    const onScroll = ({ scroll, limit }) => {
      scaleX.set(limit ? scroll / limit : 0);
    };

    lenisInstance.on("scroll", onScroll);
    return () => lenisInstance.off("scroll", onScroll);
  }, [lenis, scaleX]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 origin-left z-[100] pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
