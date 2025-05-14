import SectionTitle from "../common/SectionTitle";
import { FaRocket, FaLock, FaPlug, FaHeadset, FaDesktop, FaLayerGroup } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-[#0066B3] text-3xl mb-2" />,
    title: "Performa Tinggi",
    desc: "Akses cepat, stabil, dan siap untuk traffic besar.",
  },
  {
    icon: <FaLock className="text-[#0066B3] text-3xl mb-2" />,
    title: "Keamanan Data",
    desc: "Proteksi data kelas enterprise dengan enkripsi modern.",
  },
  {
    icon: <FaPlug className="text-[#0066B3] text-3xl mb-2" />,
    title: "Integrasi Mudah",
    desc: "Integrasi API & tools bisnis tanpa ribet.",
  },
  {
    icon: <FaHeadset className="text-[#0066B3] text-3xl mb-2" />,
    title: "Dukungan 24/7",
    desc: "Tim support siap membantu kapan saja.",
  },
  {
    icon: <FaDesktop className="text-[#0066B3] text-3xl mb-2" />,
    title: "UI/UX Modern",
    desc: "Tampilan profesional, mudah digunakan di semua device.",
  },
  {
    icon: <FaLayerGroup className="text-[#0066B3] text-3xl mb-2" />,
    title: "Skalabilitas",
    desc: "Siap berkembang seiring bisnis Anda tumbuh.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Fitur Unggulan Nexalent</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col items-center text-center group"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-200">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}