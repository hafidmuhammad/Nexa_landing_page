import Button from "../common/Button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 rounded-b-3xl shadow-sm border-b border-[#D1D1F7]"
      style={{
        background: "linear-gradient(120deg, #FFFFFF 0%, #F4F3FF 100%)", // Gradient yang lebih subtle
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Accent Blobs - lebih subtle */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#D1D1F7] opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#F4F3FF] opacity-30 rounded-full blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6C63FF] opacity-10 rounded-full blur-2xl pointer-events-none"></div>
      
      {/* Konten lainnya */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow text-[#333333]">
            <span className="block">Selamat Datang di</span>
            <span className="inline-block bg-white px-3 py-1 rounded-xl text-[#6C63FF] shadow-sm border border-[#D1D1F7]">
              Nexalant
            </span>
          </h1>
          {/* Konten lainnya */}
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
          <Image
            src="/nexa_gemini.png"
            alt="Nexalant Hero"
            width={320}
            height={320}
            className="w-80 relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

