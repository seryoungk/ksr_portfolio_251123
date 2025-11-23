"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Adjusted spring config: Higher stiffness and lower damping/mass for a responsive "smooth" follow
  // rather than a "draggy/magnetic" feel.
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run on devices with a "fine" pointer (mouse/trackpad), not touch
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 18); // Center the 36px cursor
      cursorY.set(e.clientY - 18);
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    
    // Hide default cursor
    document.body.style.cursor = "none";

    // Also hide cursor on all interactive elements
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleElement);

    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "auto";
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, [cursorX, cursorY]);

  // Don't render on touch devices or initially hidden
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] h-[36px] w-[36px] rounded-full"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        left: 0,
        top: 0,
      }}
    >
      {/* Glass effect container */}
      <div className="h-full w-full rounded-full bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.1)]" />
    </motion.div>
  );
}
