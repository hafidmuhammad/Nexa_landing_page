import { useTheme } from "./ThemeProvider";

export default function Logo() {
  const { darkMode } = useTheme();
  
  return (
    <span className={`text-2xl font-extrabold tracking-tight ${darkMode ? 'text-[#B388FF]' : 'text-[#0066B3]'}`}>
      Nexalent
    </span>
  );
}