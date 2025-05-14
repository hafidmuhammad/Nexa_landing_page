import Button from "../common/Button";

export default function CTASection() {
  return (
    <section id="cta" className="py-16 bg-gradient-to-r from-[#0066B3] to-blue-400 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Digitalisasi Bisnis Anda?</h2>
      <p className="mb-8 text-lg max-w-2xl mx-auto">
        Konsultasikan kebutuhan Anda bersama tim Nexalent dan dapatkan solusi terbaik untuk pertumbuhan bisnis Anda.
      </p>
      <Button href="mailto:info@nexalent.com" className="bg-white text-[#0066B3] hover:bg-gray-100 hover:text-[#00518c] shadow-lg">
        Hubungi Kami
      </Button>
    </section>
  );
}