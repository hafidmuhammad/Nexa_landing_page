import SectionTitle from "../common/SectionTitle";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 mb-8 md:mb-0">
        <SectionTitle className="text-left md:text-left">Mengapa Pilih Nexalent?</SectionTitle>
        <ul className="space-y-4 text-gray-700 dark:text-gray-200">
          <li className="flex items-start gap-3">
            <span className="text-[#0066B3] font-bold text-xl">✓</span>
            <span>Tim berpengalaman lebih dari 10 tahun di bidang digital & teknologi.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0066B3] font-bold text-xl">✓</span>
            <span>Teknologi terbaru, aman, dan selalu update mengikuti kebutuhan bisnis.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#0066B3] font-bold text-xl">✓</span>
            <span>Support lokal, komunikasi mudah, dan solusi yang personal.</span>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/about-illustration.svg"
          alt="Tentang Nexalent"
          width={340}
          height={260}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}