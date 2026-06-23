import { useEffect, useRef } from "react";

export default function MagicCursor() {
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;
    let isHovering = false;
    let isClicking = false;
    let hasEntered = false;
    let animFrame;
    let particles = [];
    let ripples = [];

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Show ring hidden initially
    ring.style.opacity = "0";

    // --- Particle ---
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 2.5;
        this.speedY = (Math.random() - 0.5) * 2.5;
        this.alpha = 0.9;
        this.color = `hsl(${Math.random() * 40 + 180}, 100%, 65%)`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.alpha -= 0.028;
        this.size *= 0.96;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(this.alpha, 0);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(this.size, 0), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // --- Ripple ---
    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 55;
        this.alpha = 1;
      }
      update() {
        this.radius += 2.5;
        this.alpha -= 0.035;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(this.alpha, 0);
        ctx.strokeStyle = "#00bcf9";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#00bcf9";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // --- Mouse events ---
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasEntered) {
        hasEntered = true;
        ringX = mouseX;
        ringY = mouseY;
        ring.style.opacity = "1";
      }

      // Trail particles
      if (Math.random() > 0.45) {
        particles.push(new Particle(mouseX, mouseY));
      }
    };

    const onMouseDown = (e) => {
      isClicking = true;
      ripples.push(new Ripple(e.clientX, e.clientY));
      for (let i = 0; i < 14; i++) {
        const p = new Particle(e.clientX, e.clientY);
        p.speedX = (Math.random() - 0.5) * 7;
        p.speedY = (Math.random() - 0.5) * 7;
        p.size = Math.random() * 5 + 2;
        particles.push(p);
      }
    };

    const onMouseUp = () => { isClicking = false; };

    const onMouseLeave = () => {
      ring.style.opacity = "0";
    };
    const onMouseEnter = () => {
      if (hasEntered) ring.style.opacity = "1";
    };

    // --- Hover on interactive elements ---
    const onEnterInteractive = () => { isHovering = true; };
    const onLeaveInteractive = () => { isHovering = false; };

    const attachHoverListeners = () => {
      document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, label"
      ).forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
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

      // Particles
      particles = particles.filter((p) => p.alpha > 0);
      particles.forEach((p) => { p.update(); p.draw(); });

      // Ripples
      ripples = ripples.filter((r) => r.alpha > 0 && r.radius < r.maxRadius);
      ripples.forEach((r) => { r.update(); r.draw(); });

      // Smooth ring follow
      const ease = isHovering ? 0.07 : 0.13;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      // Ring size
      const ringSize = isClicking ? 12 : isHovering ? 36 : 24;
      ring.style.width = ringSize + "px";
      ring.style.height = ringSize + "px";
      ring.style.marginLeft = -(ringSize / 2) + "px";
      ring.style.marginTop = -(ringSize / 2) + "px";
      ring.style.borderColor = isHovering ? "#ffffff" : "#00bcf9";
      ring.style.boxShadow = isHovering
        ? "0 0 12px 2px rgba(255,255,255,0.3)"
        : "0 0 10px 2px rgba(0,188,249,0.4)";

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
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 99997,
        }}
      />

      {/* Trailing ring — follows the native cursor with smooth easing */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 24,
          height: 24,
          marginLeft: -12,
          marginTop: -12,
          borderRadius: "50%",
          border: "2px solid #00bcf9",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0,
          transition:
            "width 0.18s ease, height 0.18s ease, margin 0.18s ease, border-color 0.2s, box-shadow 0.2s, opacity 0.3s",
          willChange: "left, top",
        }}
      />
    </>
  );
}
