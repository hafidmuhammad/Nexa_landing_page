import ContentCard from "./ContentCard";
import { FaBrain, FaSeedling, FaUsers, FaLightbulb } from "react-icons/fa";
import ScrollReveal from "../common/ScrollReveal";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: <FaBrain />,
    title: "Nexa Mind",
    desc: "Ngobrolin mental health, relasi, dan keresahan Gen-Z. Santai aja, semua pernah ngerasain kok!",
    color: "linear-gradient(135deg, #A7FFEB 0%, #64B5F6 100%)",
    cta: { label: "Explore Mind", href: "#" },
  },
  {
    icon: <FaSeedling />,
    title: "Nexa Grow",
    desc: "Motivasi ringan, tips konsisten, dan pengembangan diri biar makin pede ngejalanin hari.",
    color: "linear-gradient(135deg, #FFF59D 0%, #FFB74D 100%)",
    cta: { label: "Mulai Grow", href: "#" },
  },
  {
    icon: <FaUsers />,
    title: "Nexa Skill",
    desc: "Soft skill itu penting! Yuk belajar komunikasi, teamwork, dan leadership dengan cara fun.",
    color: "linear-gradient(135deg, #FFD6E0 0%, #FF80AB 100%)",
    cta: { label: "Cek Skill", href: "#" },
  },
  {
    icon: <FaLightbulb />,
    title: "Nexa Create",
    desc: "Tempat buat kamu yang suka bikin konten, desain, atau apapun yang kreatif. Bisa kolaborasi juga!",
    color: "linear-gradient(135deg, #B9F6CA 0%, #69F0AE 100%)",
    cta: { label: "Mulai Create", href: "#" },
  },
];

export default function PillarsSection() {
  return (
    <section className="py-16 px-4">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0066B3]">
          Pilar Komunitas Nexa
        </h2>
      </ScrollReveal>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <ScrollReveal 
            key={pillar.title} 
            delay={0.1 * index}
            threshold={0.2}
          >
            <ContentCard
              icon={pillar.icon}
              title={pillar.title}
              desc={pillar.desc}
              color={pillar.color}
              cta={pillar.cta}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}