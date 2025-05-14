export default function Button({ children, href, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 rounded-full font-semibold
        bg-white text-[#8F5FE8] border border-[#B388FF] shadow
        hover:bg-[#F3EFFF] hover:text-[#6C3FC5] transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-[#B388FF] focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}