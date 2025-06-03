export default function Button({ children, href, variant = "primary", className = "", ...props }) {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-white text-[#6C63FF] border border-[#D1D1F7] shadow-sm hover:bg-[#F4F3FF] hover:border-[#6C63FF]";
      case "secondary":
        return "bg-[#F4F3FF] text-[#6C63FF] border border-[#D1D1F7] hover:bg-white";
      case "outline":
        return "bg-transparent text-[#6C63FF] border border-[#D1D1F7] hover:bg-[#F4F3FF]";
      case "text":
        return "bg-transparent text-[#6C63FF] border-none hover:bg-[#F4F3FF] shadow-none";
      default:
        return "bg-white text-[#6C63FF] border border-[#D1D1F7] shadow-sm hover:bg-[#F4F3FF] hover:border-[#6C63FF]";
    }
  };

  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 rounded-full font-semibold
        ${getButtonStyles()}
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-[#D1D1F7] focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}