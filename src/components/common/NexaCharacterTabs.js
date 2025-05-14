import { useState } from "react";
import characterProfiles from "../../constants/characterProfiles";

export default function NexaCharacterTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#B388FF]">Kenalan sama Karakter Nexa!</h2>
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {characterProfiles.map((char, idx) => (
          <button
            key={char.name}
            onClick={() => setActive(idx)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${active === idx
              ? "shadow bg-white text-[#B388FF]"
              : "bg-[#F8F7FF] text-[#B388FF] hover:bg-white"
              }`}
          >
            <span className="mr-2">{char.icon}</span>
            {char.name}
          </button>
        ))}
      </div>
      <div
        className="rounded-2xl p-8 text-center shadow-lg transition-all duration-300 animate-fadein"
        style={{
          background: characterProfiles[active].color,
          minHeight: 120,
        }}
        key={characterProfiles[active].name}
      >
        <div className="text-5xl mb-3">{characterProfiles[active].icon}</div>
        <div className="text-xl font-bold mb-2">{characterProfiles[active].name}</div>
        <div className="text-base">{characterProfiles[active].desc}</div>
      </div>
    </section>
  );
}