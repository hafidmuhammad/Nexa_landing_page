import { FaCertificate, FaVideo, FaUserFriends } from "react-icons/fa";

export default function ChallengeBanner() {
  return (
    <section className="py-14 px-4 bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 rounded-3xl shadow-2xl max-w-5xl mx-auto my-16 flex flex-col md:flex-row items-center gap-8 animate-fadein">
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#0066B3]">#BeraniJadiHebat Challenge 🚀</h3>
        <p className="mb-4 text-lg font-medium text-gray-800">
          7 hari, 7 tantangan seru buat upgrade diri bareng Nexalant!
          <span className="block mt-2 text-base text-gray-700">Bikin video, story, atau ngobrol bareng teman. Ada reward keren: <b>sertifikat digital + shoutout</b>!</span>
        </p>
        <a
          href="#"
          className="inline-block mt-2 px-6 py-3 rounded-full bg-[#0066B3] text-white font-bold shadow-lg hover:bg-[#00518c] transition"
        >
          Gabung Tantangan
        </a>
      </div>
      <div className="flex-1 flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <FaVideo className="text-4xl text-white bg-[#0066B3] rounded-full p-2 mb-2 shadow" />
          <span className="text-xs font-semibold text-[#0066B3]">Bikin Reels</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUserFriends className="text-4xl text-white bg-pink-500 rounded-full p-2 mb-2 shadow" />
          <span className="text-xs font-semibold text-pink-600">Ngobrol Bareng</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCertificate className="text-4xl text-white bg-yellow-400 rounded-full p-2 mb-2 shadow" />
          <span className="text-xs font-semibold text-yellow-700">Dapat Sertifikat</span>
        </div>
      </div>
    </section>
  );
}