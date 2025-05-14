import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-4 justify-center ${className}`}>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0066B3] transition-colors">
        <FaLinkedin size={22} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0066B3] transition-colors">
        <FaInstagram size={22} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0066B3] transition-colors">
        <FaTwitter size={22} />
      </a>
    </div>
  );
}