export default function ContentCard({ icon, title, desc, color, cta }) {
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl`}
      style={{ background: color }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-base mb-4">{desc}</p>
      {cta && (
        <a
          href={cta.href}
          className="text-sm font-semibold px-4 py-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 text-[#0066B3] shadow transition"
        >
          {cta.label}
        </a>
      )}
    </div>
  );
}