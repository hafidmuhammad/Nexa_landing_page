import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
    <section id="characters" className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B388FF] dark:text-[#D4B3FF]"
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
          <motion.button
            key={char.name}
            onClick={() => setActive(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 flex items-center gap-2 ${active === idx
              ? "shadow-md bg-white dark:bg-gray-800 text-[#6C63FF] border border-[#D1D1F7] dark:border-[#6C63FF]"
              : "bg-[#F4F3FF] dark:bg-gray-700 text-[#6C63FF] dark:text-[#B388FF] border border-transparent hover:border-[#D1D1F7] dark:hover:border-[#6C63FF]"}`}
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={char.image}
                alt={char.name}
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
            <span className="mr-1">{char.icon}</span>
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
            className="rounded-2xl p-8 text-center shadow-lg bg-gray-100 dark:bg-gray-800 animate-pulse"
            style={{ minHeight: 120 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 dark:bg-gray-700 mb-3"></div>
            <div className="h-6 w-1/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-2/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Karakter Image */}
            <motion.div
              key={`image-${characterProfiles[active].name}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                initial={{ scale: 0.9, rotateY: 45 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 opacity-70 blur-xl"></div>
                <Image
                  src={characterProfiles[active].image}
                  alt={characterProfiles[active].name}
                  width={320}
                  height={320}
                  className="relative z-10 drop-shadow-xl"
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            </motion.div>

            {/* Karakter Info */}
            <motion.div
              key={`info-${characterProfiles[active].name}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl p-8 shadow-md border"
              style={{
                background: `${characterProfiles[active].color}20`,
                borderColor: colors.nexaBorder[characterProfiles[active].name.toLowerCase()] || "#D1D1F7",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="text-3xl">{characterProfiles[active].icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold">{characterProfiles[active].name}</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg mb-6 text-gray-700 dark:text-gray-300"
              >
                {characterProfiles[active].desc}
              </motion.div>

              {characterProfiles[active].trait && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2 mt-4"
                >
                  {characterProfiles[active].trait.map((trait, i) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm font-medium shadow-sm"
                      style={{
                        color: colors.nexaBorder[characterProfiles[active].name.toLowerCase()] || "#6C63FF",
                        borderColor: colors.nexaBorder[characterProfiles[active].name.toLowerCase()] || "#D1D1F7",
                      }}
                    >
                      {trait}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#B388FF] text-white font-medium shadow-md"
              >
                Kenalan dengan {characterProfiles[active].name}
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Indikator Karakter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center gap-2 mt-8"
      >
        {characterProfiles.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${active === idx ? 'bg-[#6C63FF] scale-125' : 'bg-gray-300 dark:bg-gray-600'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </section>
  );
}