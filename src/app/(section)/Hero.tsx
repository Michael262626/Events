import Image from "next/image";
import instagram from "../../../public/assets/ig.png";
import youtube from "../../../public/assets/youtube1.png";

const Body = () => {
  return (
    <div className="bg-[url('/assets/background.jpeg')] h-screen bg-cover bg-center relative text-white">
      {/* Main Content */}
      <div className="relative flex flex-col p-20">
        {/* Hashtag */}
        <p className="text-xl font-bold text-left text-purple-400">#Advance Your Sound</p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4 text-left">
          Unveil the Magic of <br /> Soundscapes
        </h1>

        {/* Powered by Section */}
        <div className="flex space-x-4 mt-6 text-sm items-start">
          <p className="text-gray-300 italic font-mono text-left">Powered by</p>
          <div className="flex">
            <Image src={instagram} width={250} alt="Instagram" />
            <Image src={youtube} width={200} alt="Youtube" />
          </div>
        </div>

        {/* Event Details Section */}
        {/* Event Details Section */}
    <div className="border border-gray-500 bg-gradient-to-r from-[#1F1A22] to-[#040009] bg-opacity-80 p-10 rounded-2xl shadow-md flex flex-wrap justify-start gap-10 mt-12 max-w-8xl mx-auto">
      <div className="flex flex-col items-start">
    <p className="text-gray-400 text-4xl font-bold">1st Mar 2025</p>
    <p className="font-semibold text-2xl">09:00am</p>
  </div>
  <div className="flex flex-col items-start">
    <p className="text-gray-400 text-4xl font-bold">Anthony Village</p>
    <p className="font-semibold text-2xl">34-36, Faramobi Ajike Street, Lagos</p>
  </div>
  <div className="flex flex-col items-start">
    <p className="text-gray-400 text-4xl font-bold">352</p>
    <p className="font-semibold text-2xl">Attending</p>
  </div>
  <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg font-bold flex items-center space-x-2">
    <span>Interested</span>
  </button>
</div>

      </div>
    </div>
  );
};

export default Body;
