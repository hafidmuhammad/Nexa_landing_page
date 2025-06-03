import { motion } from "framer-motion";

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  distance = 20,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  ...props 
}) {
  // Menentukan arah animasi
  const getDirectionAnimation = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionAnimation() }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, threshold }}
      transition={{ duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}