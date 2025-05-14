import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 rounded-b-3xl shadow-lg"
      style={{
        background: "linear-gradient(120deg, #E9DFFF 0%, #B388FF 100%)",
        backdropFilter: "blur(2px)",
      }}
    >
      {/* Accent Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#B388FF] opacity-30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#F3EFFF] opacity-40 rounded-full blur-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8F5FE8] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow">
            <span className="block">Selamat Datang di</span>
            <span className="inline-block bg-white/70 px-3 py-1 rounded-xl text-[#8F5FE8] shadow-sm backdrop-blur">
              Nexalant
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            <span className="bg-white/60 rounded px-2 py-1 text-[#6C3FC5] font-semibold backdrop-blur">
              Komunitas belajar Gen-Z
            </span>{" "}
            yang seru, suportif, dan siap bantu kamu berkembang bareng!
          </p>
          <Button
            href="#cta"
            className="bg-white text-[#8F5FE8] font-bold px-8 py-3 rounded-full shadow hover:bg-[#ede7f6] hover:text-[#6C3FC5] transition"
          >
            Gabung Sekarang
          </Button>
          <div className="mt-6 flex justify-center md:justify-start gap-3 text-xs text-[#6C3FC5] font-medium">
            <span className="bg-white/60 px-3 py-1 rounded-full backdrop-blur">#Supportive</span>
            <span className="bg-white/60 px-3 py-1 rounded-full backdrop-blur">#FunLearning</span>
            <span className="bg-white/60 px-3 py-1 rounded-full backdrop-blur">#GenZGrowth</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
          <img
            src="/hero-illustration.svg"
            alt="Nexalant Hero"
            className="w-80 rounded-2xl shadow-xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

