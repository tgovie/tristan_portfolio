"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

// Skip the transition on the very first load so server HTML is fully visible (better LCP).
let hasNavigated = false;

/** Fast fade between routes. Templates remount on navigation, so this runs on every page change. */
export default function Template({ children }: { children: React.ReactNode }) {
  const animateIn = hasNavigated;
  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 6 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}
