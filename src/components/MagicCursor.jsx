import { useEffect, useRef, useState } from "react";

export default function MagicCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isHovering = false;
    let isClicking = false;
    let animFrame;
    let particles = [];

    // Resize canvas to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // --- Particle class ---
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.alpha = 1;
        this.color = `hsl(${Math.random() * 40 + 180}, 100%, 60%)`; // cyan-blue range
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.03;
        this.size *= 0.95;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(this.alpha, 0);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // --- Ripple class (on click) ---
    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 60;
        this.alpha = 1;
      }
      update() {
        this.radius += 3;
        this.alpha -= 0.04;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(this.alpha, 0);
        ctx.strokeStyle = "#00bcf9";
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00bcf9";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    let ripples = [];

    // --- Mouse events ---
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Spawn trail particles
      if (Math.random() > 0.4) {
        particles.push(new Particle(mouseX, mouseY));
      }

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onMouseDown = (e) => {
      isClicking = true;
      ripples.push(new Ripple(e.clientX, e.clientY));
      // Burst particles on click
      for (let i = 0; i < 12; i++) {
        const p = new Particle(e.clientX, e.clientY);
        p.speedX = (Math.random() - 0.5) * 6;
        p.speedY = (Math.random() - 0.5) * 6;
        p.size = Math.random() * 5 + 2;
        particles.push(p);
      }
    };

    const onMouseUp = () => { isClicking = false; };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // --- Hover detection ---
    const onEnterInteractive = () => { isHovering = true; };
    const onLeaveInteractive = () => { isHovering = false; };

    const attachHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label").forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };
    attachHoverListeners();

    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    // --- Animation loop ---
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & draw particles
      particles = particles.filter((p) => p.alpha > 0);
      particles.forEach((p) => { p.update(); p.draw(); });

      // Update & draw ripples
      ripples = ripples.filter((r) => r.alpha > 0 && r.radius < r.maxRadius);
      ripples.forEach((r) => { r.update(); r.draw(); });

      // Smooth ring follow
      const ease = isHovering ? 0.08 : 0.12;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

      // Ring scale on hover / click
      const ringSize = isClicking ? 20 : isHovering ? 52 : 36;
      const ringOffset = ringSize / 2;
      ring.style.width = `${ringSize}px`;
      ring.style.height = `${ringSize}px`;
      ring.style.marginLeft = `-${ringOffset}px`;
      ring.style.marginTop = `-${ringOffset}px`;
      ring.style.borderColor = isHovering ? "#fff" : "#00bcf9";
      ring.style.opacity = isClicking ? "0.4" : "1";

      // Dot scale on click
      dot.style.width = isClicking ? "4px" : "8px";
      dot.style.height = isClicking ? "4px" : "8px";
      dot.style.marginLeft = isClicking ? "-2px" : "-4px";
      dot.style.marginTop = isClicking ? "-2px" : "-4px";

      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99997,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          border: "2px solid #00bcf9",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: isVisible ? 1 : 0,
          transition: "width 0.15s ease, height 0.15s ease, margin 0.15s ease, border-color 0.15s ease, opacity 0.3s",
          willChange: "transform",
          backdropFilter: "invert(10%)",
        }}
      />

      {/* Center dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: "50%",
          backgroundColor: "#00bcf9",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 8px 2px #00bcf9",
          transition: "width 0.1s, height 0.1s, margin 0.1s, opacity 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}
