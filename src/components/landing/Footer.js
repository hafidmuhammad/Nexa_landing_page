import Logo from "../common/Logo";
import SocialLinks from "../common/SocialLinks";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo />
          <span>© {new Date().getFullYear()} Nexalent. All rights reserved.</span>
        </div>
        <nav className="flex gap-6">
          <a href="#features" className="hover:text-[#0066B3] transition-colors">Fitur</a>
          <a href="#about" className="hover:text-[#0066B3] transition-colors">Tentang</a>
          <a href="#cta" className="hover:text-[#0066B3] transition-colors">Kontak</a>
          <a href="/privacy" className="hover:text-[#0066B3] transition-colors">Privasi</a>
          <a href="/terms" className="hover:text-[#0066B3] transition-colors">Terms</a>
        </nav>
        <SocialLinks />
      </div>
    </footer>
  );
}