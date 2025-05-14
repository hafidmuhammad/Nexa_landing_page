import ContentCard from "./ContentCard";
import { FaBrain, FaSeedling, FaUsers, FaLightbulb } from "react-icons/fa";

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
    title: "Nexa Think",
    desc: "Belajar mikir kritis & problem solving lewat studi kasus seru. Siap jadi problem solver?",
    color: "linear-gradient(135deg, #B9F6CA 0%, #00E676 100%)",
    cta: { label: "Ikutan Think", href: "#" },
  },
];

export default function PillarsSection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0066B3]">4 Pilar Seru di Nexalant.id</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {pillars.map((p, i) => (
          <ContentCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}