import { useState } from "react";
import ChatWidget from "./ChatWidget";
import { FaCommentDots } from "react-icons/fa";
import colors from "../../constants/colors";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Buka chat Nexa AI"
        onClick={() => setOpen(true)}
        className="fixed z-50 bottom-6 right-6 bg-[#0066B3] hover:bg-[#00518c] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform duration-200 hover:scale-110"
        style={{ boxShadow: "0 4px 24px rgba(0,102,179,0.18)" }}
      >
        <FaCommentDots size={26} />
      </button>
      {open && <ChatWidget onClose={() => setOpen(false)} />}
    </>
  );
}