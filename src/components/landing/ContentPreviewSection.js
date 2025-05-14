import { FaInstagram, FaTiktok } from "react-icons/fa";

const previews = [
  {
    type: "Reels",
    platform: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    img: "/preview-reels.png",
    desc: "Video singkat: Tips konsisten belajar tiap hari!",
  },
  {
    type: "Carousel",
    platform: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    img: "/preview-carousel.png",
    desc: "Carousel: 5 cara atasi insecure versi Nexa Mind.",
  },
  {
    type: "Story QnA",
    platform: "Instagram",
    icon: <FaInstagram className="text-pink-500" />,
    img: "/preview-story.png",
    desc: "Story QnA: Tanya jawab bareng followers.",
  },
  {
    type: "Shorts",
    platform: "TikTok",
    icon: <FaTiktok className="text-black" />,
    img: "/preview-tiktok.png",
    desc: "Shorts: Studi kasus Nexa Think, yuk ikutan jawab!",
  },
];

export default function ContentPreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#0066B3]">Preview Konten Seru di Nexalant</h2>
      <div className="flex overflow-x-auto gap-6 px-4 max-w-6xl mx-auto pb-4">
        {previews.map((p, i) => (
          <div
            key={i}
            className="min-w-[220px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 flex-shrink-0"
          >
            <img
              src={p.img}
              alt={p.type}
              className="rounded-t-2xl w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm font-semibold">
                {p.icon}
                <span>{p.type}</span>
                <span className="text-gray-400">·</span>
                <span className="text-xs">{p.platform}</span>
              </div>
              <div className="text-sm">{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}