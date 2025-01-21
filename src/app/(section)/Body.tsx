import Image from "next/image";
import spotify from "../../../public/assets/Spotify-removebg-preview.png";
import youtube from "../../../public/assets/youtube1.png";
import audiomack from "../../../public/assets/Audiomack.png";
const Body = () => {
  return (
    <div className='bg-[url("/assets/background.jpg")]  h-screen bg-cover bg-center relative flex items-center text-white'>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Main Content */}
      <div className="relative flex flex-col mt-60 p-20">
        {/* Hashtag */}
        <p className="text-xl font-bold text-purple-400">#MusicFest</p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
          Unveil the Magic of <br /> Soundscapes
        </h1>

        {/* Powered by Section */}
        <div className="flex space-x-4 mt-6 text-sm">
          <p className="text-gray-300 italic font-mono">Powered by</p>
          <div className="flex">
            <Image src={spotify} width={250} alt="Spotify" />
            <Image src={youtube} width={200} alt="Youtube" />
            <Image src={audiomack} width={200} alt="Audiomack" />
          </div>
        </div>

        {/* Event Details Section */}
        <div className="mt-12 bg-gradient-to-b w-[140%]  from-gray-800 to-black bg-opacity-80 p-8 rounded-lg shadow-md flex flex-wrap justify-center items-center text-center gap-10">
          <div>
            <p className="text-gray-400 text-2xl font-bold">25th Dec 2023</p>
            <p className="font-semibold text-l">22:30 - 07:00</p>
          </div>
          <div>
            <p className="text-gray-400 text-2xl font-bold">BASEMENT</p>
            <p className="font-semibold text-l">135 W, 46nd Street, New York</p>
          </div>
          <div>
            <p className="text-gray-400 text-2xl font-bold">352</p>
            <p className="font-semibold text-l">Attending</p>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg font-bold flex items-center space-x-2">
            <span>Interested</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
