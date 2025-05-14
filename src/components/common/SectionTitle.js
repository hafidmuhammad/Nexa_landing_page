export default function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 text-[#0066B3] ${className}`}>
      {children}
    </h2>
  );
}