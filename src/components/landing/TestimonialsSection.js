import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andi Wijaya",
    role: "CTO, PT Digital Maju",
    text: "Nexalent membantu kami scale up dengan cepat dan aman. Supportnya sangat responsif!",
    avatar: "/avatar1.png",
  },
  {
    name: "Siti Rahma",
    role: "CEO, Solusi Cerdas",
    text: "Kami sudah coba beberapa platform, tapi Nexalent yang paling user-friendly dan lengkap fiturnya.",
    avatar: "/avatar2.png",
  },
  {
    name: "Budi Santoso",
    role: "Founder, Startup Inovatif",
    text: "Nexalent jadi partner teknologi yang sangat membantu untuk startup kami yang sedang berkembang.",
    avatar: "/avatar3.png",
  },
];

const partners = [
  "/partner1.png",
  "/partner2.png",
  "/partner3.png",
  "/partner4.png",
  "/partner5.png",
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <SectionTitle>Apa Kata Mereka?</SectionTitle>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.1 * i} direction="up" distance={30}>
              <motion.div
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 overflow-hidden mr-4">
                    {t.avatar && <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">{t.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.3} threshold={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
            {partners.map((logo, i) => (
              <motion.img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-10 grayscale hover:grayscale-0 transition-all duration-200"
                whileHover={{ scale: 1.1, grayscale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}