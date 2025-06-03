import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-[#F3EFFF] z-50"
        >
          <div className="text-center">
                     <motion.div
              className="w-20 h-20 mb-4 mx-auto"
            >
              <svg 
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
                stroke="#B388FF"
                strokeWidth="2"
              >
                {/* Static battery outline */}
                <rect
                  x="2"
                  y="6"
                  width="18"
                  height="12"
                  rx="2"
                />
                {/* Static battery tip */}
                <path
                  d="M20 10h2v4h-2"
                />
                {/* Animated battery fill */}
                <motion.rect
                  x="4"
                  y="8"
                  width="14"
                  height="8"
                  fill="#B388FF"
                  initial={{ width: 0 }}
                  animate={{ width: 14 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>
            <motion.h2 
              animate={{ 
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5 
              }}
              className="text-xl font-bold text-[#B388FF]"
            >
              Loading Nexa...
            </motion.h2>
          </div>
        </motion.div>
      ) : (
        <Component {...pageProps} />
      )}
    </AnimatePresence>
  );
}
