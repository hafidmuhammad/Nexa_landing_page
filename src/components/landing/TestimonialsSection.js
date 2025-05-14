import SectionTitle from "../common/SectionTitle";

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
    text: "UI/UX Nexalent sangat modern dan mudah digunakan oleh tim kami.",
    avatar: "/avatar2.png",
  },
];

const partners = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle>Apa Kata Klien Kami?</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4 mb-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#0066B3]" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-200 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
          {partners.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-10 grayscale hover:grayscale-0 transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}