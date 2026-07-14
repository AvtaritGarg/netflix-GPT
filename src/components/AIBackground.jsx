import { useEffect, useRef } from "react";


export default function AIBackground({
  particleCount = 150,
  colors = ["#a78bfa", "#818cf8", "#60a5fa", "#ffffff"], // violet/indigo/blue/white mix
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;
    let particles = [];

    const rand = (min, max) => Math.random() * (max - min) + min;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        radius: rand(0.5, 1.8),
        baseAlpha: rand(0.2, 0.9),
        twinkleSpeed: rand(0.005, 0.02),
        twinklePhase: rand(0, Math.PI * 2),
        driftX: rand(-0.05, 0.05),
        driftY: rand(-0.05, 0.05),
        color: colors[Math.floor(rand(0, colors.length))],
      }));
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      // subtle radial glow behind the particles
      const glow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.2,
      );
      glow.addColorStop(0, "rgba(76, 29, 149, 0.15)");
      glow.addColorStop(1, "rgba(10, 10, 20, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        // twinkle
        const alpha =
          p.baseAlpha *
          (0.5 + 0.5 * Math.sin(time * p.twinkleSpeed + p.twinklePhase));

        // drift, wrapping around edges
        p.x += p.driftX;
        p.y += p.driftY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    animationId = requestAnimationFrame(draw);

    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    // respect reduced-motion preference: draw one static frame only
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      cancelAnimationFrame(animationId);
      draw(0);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none bg-black ${className}`}
      aria-hidden="true"
    />
  );
}
