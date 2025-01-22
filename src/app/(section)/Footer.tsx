import logo from "../../../public/assets/Brand_logo_2[1].png"
import Image from "next/image";


const Footer = () => {
    return (
        <div className="flex flex-col bg-black text-white py-16 flex justify-center items-center min-h-screen">
            <div className="border p-12 justify-center items-center w-[85%] rounded-2xl border-gray-300 bg-gradient-to-r from-black to-gray-900">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Left Section */}
          <div className="flex-1">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <span className="w-6 h-1 bg-pink-500"></span>
              Schedule
            </h4>
            <h2 className="text-4xl font-extrabold mt-4">
              Sonic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Dispatch
              </span>
            </h2>
            <p className="text-gray-400 mt-4">
              Become Part of Our Harmonious Community and Receive Exclusive
              Updates, Special Offers, and Exciting News about the Festival
              Straight to Your Inbox.
            </p>
            <div className="mt-6 flex items-center border border-gray-400 rounded-lg p-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent text-gray-300 outline-none flex-1 px-4"
              />
              <button className="text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
                →
              </button>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex-1">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <span className="w-6 h-1 bg-pink-500"></span>
              Harmonia Wayfinder
            </h4>
            <div className="mt-4 bg-gray-800 rounded-2xl p-4">
              <div className="bg-gray-900 rounded-xl overflow-hidden relative">
                <div className="absolute top-4 left-4">
                  <div className="flex flex-col">
                    <span className="text-white font-semibold">Basement</span>
                    <span className="text-gray-400 text-sm">
                      135W, 46nd Street, New York
                    </span>
                  </div>
                  <button className="mt-2 text-white text-sm bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
                    Get Direction →
                  </button>
                </div>
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Map"
                  className="opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-12 gap-20 justify-between items-center bg-black text-white">
    <h2 className="text-gray-400">@2025</h2>
    <Image
      src={logo}
      width={250}
      height={20}
      alt="Logo"
    />
    <div className="flex gap-4 text-gray-400">
      <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
      <a href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</a>
    </div>
  </div>
      </div>
    );
  };
  
  export default Footer;
  