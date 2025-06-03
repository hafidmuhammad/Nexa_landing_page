import { motion } from "framer-motion";

export default function ContentCard({ icon, title, desc, color, cta }) {
  return (
    <motion.div
      className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center h-full`}
      style={{ background: color }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="text-4xl mb-3"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm mb-4 flex-grow">{desc}</p>
      {/* {cta && (
        <motion.div
          className={`rounded-2xl shadow-sm p-6 flex flex-col items-center text-center h-full border`}
          style={{ 
            background: "#FFFFFF", // Background putih untuk semua card
            borderColor: color, // Gunakan warna sebagai border saja
            borderWidth: "1px",
          }}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {cta.label}
        </motion.div>
      )} */}
    </motion.div>
  );
}