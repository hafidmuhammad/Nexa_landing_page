import { useRef, useEffect, useState } from "react";
import { MessageCircle, X, Send, ChevronDown, Heart, Smile, Image, Sticker, HelpCircle } from "lucide-react";

export default function ChatWidget({ onClose }) {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hai! Aku Nexa, teman curhat kamu di sini. Apa yang lagi kamu rasain sekarang? Cerita aja, aku siap dengerin 💜" },
  ]);
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [typing, setTyping] = useState(false);
  const [mood, setMood] = useState("normal"); // normal, sad, happy, anxious
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Mood suggestions based on keywords
  const detectMood = (text) => {
    text = text.toLowerCase();
    if (text.includes("sedih") || text.includes("kecewa") || text.includes("putus asa") ||
      text.includes("depresi") || text.includes("nangis")) {
      return "sad";
    } else if (text.includes("takut") || text.includes("cemas") || text.includes("khawatir") ||
      text.includes("panik") || text.includes("stress")) {
      return "anxious";
    } else if (text.includes("senang") || text.includes("bahagia") || text.includes("suka") ||
      text.includes("cinta") || text.includes("happy")) {
      return "happy";
    }
    return "normal";
  };

  // Get appropriate responses based on mood
  const getMoodResponse = (detectedMood) => {
    const responses = {
      sad: [
        "Aku paham itu berat buat kamu. Mau cerita lebih lanjut?",
        "Kadang, sedih itu normal. Kamu nggak sendirian, aku di sini dengerin kamu 💜",
        "It's okay to not be okay. Mau bahas apa yang bikin kamu merasa gini?"
      ],
      anxious: [
        "Coba tarik napas dulu sebentar. Aku bakal tetap di sini kok",
        "Kecemasan itu wajar, tapi kita bisa handle ini sama-sama. Apa yang bikin kamu cemas?",
        "Kamu sudah berani buat share apa yang kamu rasain. Itu langkah besar banget!"
      ],
      happy: [
        "Love that for you! Apa yang bikin kamu happy banget?",
        "Senang dengar kamu lagi happy! Vibes positif gini perlu dibagikan 🎉",
        "Gimana cara kamu bisa mempertahankan mood bagus ini lebih lama?"
      ],
      normal: [
        "Fitur konsultasi lengkap coming soon! Stay tuned ya 👀",
        "Gimana perasaan kamu hari ini? Aku di sini kalau kamu butuh teman ngobrol",
        "Kadang ngobrol sama teman virtual juga bisa bantu kamu lihat perspektif baru lho"
      ]
    };

    const selectedResponses = responses[detectedMood];
    return selectedResponses[Math.floor(Math.random() * selectedResponses.length)];
  };

  // Simulate AI typing for better UX
  const simulateTyping = (text) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "ai", text }]);
      setTyping(false);
    }, 1200); // Slightly longer typing time for a more natural feel
  };

  const sendMessage = (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Add user message immediately
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);

    // Detect mood from text
    const detectedMood = detectMood(input);
    setMood(detectedMood);

    // Store input and clear field
    const userInput = input;
    setInput("");

    // Simulate AI response based on mood
    simulateTyping(getMoodResponse(detectedMood));
  };

  // Handle key press for Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Generate bubble color based on message mood
  const generateBubbleColor = (text) => {
    const moodDetected = detectMood(text);

    const moodColors = {
      sad: "bg-purple-500",
      anxious: "bg-blue-500",
      happy: "bg-pink-500",
      normal: "bg-indigo-500"
    };

    return moodColors[moodDetected] || "bg-indigo-500";
  };

  if (!expanded) {
    return (
      <div
        className="fixed z-50 bottom-24 right-6 bg-gradient-to-r from-purple-500 to-pink-500 w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        <MessageCircle size={24} className="text-white" />
      </div>
    );
  }

  return (
    <div className="fixed z-50 bottom-24 right-6 w-80 max-w-[95vw] bg-white rounded-3xl shadow-xl border border-purple-100 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-1 rounded-lg">
            <Heart size={18} className="text-white" />
          </div>
          <span className="font-bold text-white">Nexa | Safe Space</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setExpanded(false)}
            className="text-white/80 hover:text-white transition p-1"
          >
            <ChevronDown size={18} />
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition p-1"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Status message */}
      <div className="bg-purple-50 px-4 py-2 text-xs text-purple-700 flex items-center justify-center">
        <HelpCircle size={14} className="mr-1" />
        <span>Ini adalah ruang aman. Semua cerita kamu dijaga kerahasiaannya.</span>
      </div>

      {/* Messages Area */}
      <div
        className="flex-1 overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-purple-50/50 to-white"
        style={{ minHeight: 280, maxHeight: 360 }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"} mb-2`}
          >
            {msg.from === "ai" ? (
              <div className="flex max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  <Heart size={14} className="text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 text-sm shadow-sm border border-purple-100">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div className={`${generateBubbleColor(msg.text)} text-white rounded-2xl rounded-tr-none px-3 py-2 text-sm shadow-sm max-w-[85%]`}>
                {msg.text}
              </div>
            )}
          </div>
        ))}

        {/* Show typing indicator */}
        {typing &&
          (
            <div className="flex justify-start">
              <div className="flex max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                  <Heart size={14} className="text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 text-sm shadow-sm border border-purple-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

        <div ref={messagesEndRef} />
      </div>

      {/* Mood selector */}
      <div className="flex px-3 py-2 border-t border-purple-100 bg-purple-50 justify-between">
        <div className="flex gap-2">
          <button className="hover:bg-purple-100 p-2 rounded-full transition text-purple-500">
            <Smile size={20} />
          </button>
          <button className="hover:bg-purple-100 p-2 rounded-full transition text-purple-500">
            <Image size={20} aria-label="Upload gambar" />
          </button>
          <button className="hover:bg-purple-100 p-2 rounded-full transition text-purple-500">
            <Sticker size={20} />
          </button>
        </div>
        <button className="text-xs text-purple-600 hover:text-purple-800 flex items-center">
          <HelpCircle size={14} className="mr-1" />
          Butuh bantuan?
        </button>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-purple-100">
        <div className="flex items-center gap-2 bg-purple-50 rounded-full px-3 py-1 border border-purple-200 focus-within:ring-2 focus-within:ring-purple-400 focus-within:border-purple-400 transition">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            className="flex-1 py-2 text-sm bg-transparent focus:outline-none placeholder:text-purple-300"
            placeholder="Cerita apa yang kamu rasain..."
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className={`p-2 rounded-full ${input.trim()
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              : "bg-gray-200 text-gray-400"
              } transition-all duration-200`}
          >
            <Send size={16} className={input.trim() ? "text-white" : "text-gray-500"} />
          </button>
        </div>
        <div className="mt-2 flex justify-center">
          <p className="text-xs text-purple-400">Cari bantuan profesional? <a href="#" className="text-purple-600 font-medium">Hubungi konselor</a></p>
        </div>
      </div>
    </div>
  );
}