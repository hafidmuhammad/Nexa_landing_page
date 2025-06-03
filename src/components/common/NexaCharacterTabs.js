import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import characterProfiles from "../../constants/characterProfiles";
import colors from "../../constants/colors";

export default function NexaCharacterTabs() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="characters" className="py-16 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B388FF]"
      >
        Kenalan sama Karakter Nexa!
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex justify-center gap-2 mb-8 flex-wrap"
      >
        {characterProfiles.map((char, idx) => (
          // ... kode lainnya tetap sama
          <motion.button
            key={char.name}
            onClick={() => setActive(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${active === idx
              ? "shadow-sm bg-white text-[#6C63FF] border border-[#D1D1F7]"
              : "bg-[#F4F3FF] text-[#6C63FF] border border-transparent hover:border-[#D1D1F7]"
              }`}
          >
            <span className="mr-2">{char.icon}</span>
            {char.name}
          </motion.button>
        ))}
      </motion.div>
      
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl p-8 text-center shadow-lg bg-gray-100 animate-pulse"
            style={{ minHeight: 120 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-3"></div>
            <div className="h-6 w-1/3 mx-auto bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 mx-auto bg-gray-200 rounded"></div>
          </motion.div>
        ) : (
          <motion.div
            key={characterProfiles[active].name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-2xl p-8 text-center shadow-sm border"
            style={{
              background: colors.nexa[characterProfiles[active].name.toLowerCase()] || "#F4F3FF",
              borderColor: colors.nexaBorder[characterProfiles[active].name.toLowerCase()] || "#D1D1F7",
              minHeight: 120,
            }}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-5xl mb-3"
            >
              {typeof characterProfiles[active].icon === 'string' && characterProfiles[active].icon.startsWith('/') ? (
                <img 
                  src={characterProfiles[active].icon} 
                  alt={characterProfiles[active].name} 
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
              ) : (
                characterProfiles[active].icon
              )}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold mb-2"
            >
              {characterProfiles[active].name}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-base"
            >
              {characterProfiles[active].desc}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}