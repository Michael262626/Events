import { GiGuitarBassHead } from "react-icons/gi";
import Countdown from "../components/CountDown";
import { BsSpeaker } from "react-icons/bs";
import { FaMusic } from "react-icons/fa";

const SubBody = () => {
  return (
    <div className="p-24  bg-black text-white">
      <Countdown />

    <div className="flex mt-24 justify-between">
        <div>
        <p>Highlights</p>
            <div className="flex flex-col text-3xl font-bold mb-4">Supporting</div>
            <div className="text-5xl font-extrabold mb-8 text-purple-600">Music Practioners</div>
        </div>
        
      <div className="lg:w-1/3 lg:text-right">
          <p className="mb-8 text-gray-500">
            Immerse in mesmerizing performances and
            interactive art at our music
            extravaganza.
             Experience a festival atmosphere like no other, where
            unforgettable moments await.
          </p>
        </div>
    </div>
      {/* Main Flex Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 mt-10">
        {/* Left Side: Rounded Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#231E24] p-8 rounded-3xl w-[350px] h-[300px] flex flex-col shadow-lg">
            <div className="text-pink-500 mt-12 mb-8">
              <GiGuitarBassHead size={40} /> 
            </div>
            <h3 className="text-3xl font-semibold">Career<br /> Mentorship</h3>
          </div>
          <div className="border border-[#231E24] p-8 rounded-3xl w-[350px] h-[300px] flex flex-col shadow-lg">
            <div className="text-pink-500 mt-12 mb-8">
              <BsSpeaker  size={40} /> 
            </div>
            <h3 className="text-3xl font-semibold">Musicianship <br /> Leaks</h3>
          </div>
          <div className="border border-[#231E24] p-8 rounded-3xl w-[350px] h-[300px] flex flex-col shadow-lg">
            <div className="text-pink-500 mt-12 mb-8">
              <FaMusic  size={40} /> 
            </div>
            <h3 className="text-3xl font-semibold">Support <br /> Artistes who<br />want to Advance.</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBody;
