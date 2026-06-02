"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [ready,   setReady]   = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);
  const x = useSpring(rawX, { damping: 28, stiffness: 320, mass: 0.5 });
  const y = useSpring(rawY, { damping: 28, stiffness: 320, mass: 0.5 });

  useEffect(() => {
    // Only activate on true pointer-fine devices (desktops with mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Add class to body so CSS hides the system cursor
    document.body.classList.add("gz-custom-cursor");
    setReady(true);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHover(
        t.tagName === "A" || t.tagName === "BUTTON" ||
        t.tagName === "G" || t.tagName === "PATH" || t.tagName === "ELLIPSE" ||
        !!t.closest("a, button, [data-cursor-hover]")
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", () => setVisible(false));
    document.addEventListener("mouseenter", () => setVisible(true));

    return () => {
      document.body.classList.remove("gz-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready) return null;

  return (
    <>
      {/* Outer ring — spring lag */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ opacity: visible ? 1 : 0, scale: isHover ? 1.7 : 1 }}
        transition={{
          opacity: { duration: 0.18 },
          scale: { type: "spring", stiffness: 420, damping: 26 },
        }}
      >
        <div
          className="w-8 h-8 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-150"
          style={{
            border: isHover ? "1.5px solid rgba(201,168,76,0.9)" : "1.5px solid rgba(61,31,92,0.3)",
            background: isHover ? "rgba(201,168,76,0.08)" : "transparent",
          }}
        />
      </motion.div>

      {/* Center dot — instant */}
      <motion.div
        style={{ x: rawX, y: rawY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ opacity: visible && !isHover ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-gold -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
}
