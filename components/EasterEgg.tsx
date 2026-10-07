"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Two small things for curious visitors:
 *  - a note in the dev-tools console
 *  - typing "tg" anywhere (outside inputs) shows a tiny toast
 */
export function EasterEgg() {
  const [visible, setVisible] = useState(false);
  const buffer = useRef("");
  const logged = useRef(false);

  useEffect(() => {
    if (!logged.current) {
      logged.current = true;
      console.log(
        "%cHey 👋 Thanks for checking out the code.",
        "font: 600 13px ui-sans-serif, system-ui; color: #60a5fa;",
      );
    }

    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (e.metaKey || e.ctrlKey || e.altKey || target.closest("input, textarea, [contenteditable]")) return;
      buffer.current = (buffer.current + e.key.toLowerCase()).slice(-2);
      if (buffer.current === "tg") {
        buffer.current = "";
        setVisible(true);
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => setVisible(false), 2600);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          className="no-print fixed bottom-5 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-line bg-card/95 px-4 py-2 font-mono text-xs text-muted shadow-lg shadow-black/40 backdrop-blur"
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
        >
          <span className="text-accent">&gt;</span> hello from tg — thanks for poking around
        </motion.div>
      )}
    </AnimatePresence>
  );
}
