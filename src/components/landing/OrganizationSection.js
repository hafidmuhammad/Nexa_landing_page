import { content } from "@/constants/images";
import colors from "../../constants/colors";

export default function OrganizationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#0066B3]">Visi Nexalant</h2>
        <p className="text-lg text-gray-700 text-center mb-10">{content.visi}</p>
        <h3 className="text-2xl font-bold text-center mb-6 text-[#0066B3]">Misi Kami</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {content.misi.map((m, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#0066B3]/10 to-[#FFD600]/20 rounded-xl shadow p-6 text-center flex flex-col items-center animate-fadein"
            >
              <span className="text-3xl mb-3 font-bold text-[#0066B3]">{i + 1}</span>
              <p className="text-base text-gray-700">{m}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}