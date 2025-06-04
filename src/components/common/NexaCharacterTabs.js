import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import characterProfiles from "../../constants/characterProfiles";
import colors from "../../constants/colors";

export default function ModernCharacterTabs() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Memoize current character untuk avoid re-renders
  const currentCharacter = useMemo(() => characterProfiles[active], [active]);

  // Memoize border color
  const borderColor = useMemo(() =>
    colors.nexaBorder[currentCharacter.name.toLowerCase()] || "#6C63FF",
    [currentCharacter.name]
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Reset popup ketika ganti character
  useEffect(() => {
    setShowPopup(false);
  }, [active]);

  const handleCharacterClick = (idx) => {
    if (idx !== active) {
      setActive(idx);
    }
  };

  const togglePopup = () => setShowPopup(prev => !prev);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header dengan gradient text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black text-blue-500 bg-clip-text  mb-4">
          Meet Your Squad! 🔥
        </h2>
      </motion.div>

      {/* Character Selector - Lebih Gen Z */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-3 mb-12 flex-wrap"
      >
        {characterProfiles.map((char, idx) => (
          <motion.button
            key={char.name}
            onClick={() => handleCharacterClick(idx)}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative px-6 py-3 rounded-2xl font-bold transition-all duration-300 backdrop-blur-sm ${active === idx
              ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-2xl scale-105"
              : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90"
              }`}
            style={{
              border: active === idx ? `2px solid ${char.color}` : "2px solid transparent",
              boxShadow: active === idx ? `0 8px 25px ${char.color}40` : "0 4px 15px rgba(0,0,0,0.1)"
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-700"
                />
                <div
                  className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800"
                  style={{ backgroundColor: char.color }}
                />
              </div>
              <span className="font-bold">{char.name}</span>
            </div>

            {/* Glow effect */}
            {active === idx && (
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{ backgroundColor: char.color }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-96"
          >
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-full border-4 border-purple-200"
                style={{ borderTopColor: currentCharacter.color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-2xl">
                ✨
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentCharacter.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Character Image Section */}
            <motion.div
              className="relative flex justify-center"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePopup}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ backgroundColor: currentCharacter.color }}
                  animate={{
                    scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                />

                {/* Character Image */}
                <motion.div
                  className="relative w-80 h-80 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl"
                  style={{ boxShadow: `0 20px 40px ${currentCharacter.color}30` }}
                >
                  <img
                    src={currentCharacter.image}
                    alt={currentCharacter.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </motion.div>

                {/* Floating emoji */}
                {/* <motion.div
                  className="absolute -top-4 -right-4 text-4xl"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {currentCharacter.icon}
                </motion.div> */}

                {/* Popup Speech Bubble */}
                <AnimatePresence>
                  {showPopup && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                      className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div
                        className="relative p-4 rounded-2xl shadow-xl max-w-xs text-center backdrop-blur-sm"
                        style={{
                          backgroundColor: `${currentCharacter.color}E6`,
                          border: `2px solid ${currentCharacter.color}`
                        }}
                      >
                        <p className="font-semibold text-gray-900 text-sm leading-relaxed">
                          {currentCharacter.greeting}
                        </p>

                        {/* Speech bubble tail */}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent"
                          style={{ borderTopColor: currentCharacter.color }}
                        />

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPopup(false);
                          }}
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-gray-600 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Character Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Name and Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div>
                  <h3 className="text-4xl font-black text-gray-900 dark:text-white">
                    {currentCharacter.name}
                  </h3>
                  <div
                    className="h-1 w-20 rounded-full mt-2"
                    style={{ backgroundColor: currentCharacter.color }}
                  />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
              >
                {currentCharacter.desc}
              </motion.p>

              {/* Traits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {currentCharacter.trait.map((trait, i) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="px-4 py-2 rounded-full font-semibold text-gray-900 shadow-lg"
                    style={{
                      backgroundColor: `${currentCharacter.color}40`,
                      border: `2px solid ${currentCharacter.color}`
                    }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Dots Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center gap-3 mt-12"
      >
        {characterProfiles.map((char, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleCharacterClick(idx)}
            className="relative p-2 group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-300 ${active === idx ? 'scale-125' : 'scale-100 opacity-60'
                }`}
              style={{
                backgroundColor: active === idx ? char.color : '#D1D5DB'
              }}
            />
            {active === idx && (
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: char.color }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        ))}
      </motion.div> */}
    </section>
  );
}