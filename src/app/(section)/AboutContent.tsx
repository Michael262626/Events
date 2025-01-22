import debs from "../../../public/assets/debs.jpg"
import Image from "next/image";

const AboutContent = () => {
    return (
      <div className="bg-black  text-white py-16 px-6">
        {/* Container */}
        <div className="grid p-14 grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Title Section */}
          <div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-1 bg-pink-500"></div>
                <h3 className="text-lg font-semibold">
                    Behind The Eventiva
                </h3>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              Creative <br /> <span className="text-pink-500">Commanders</span>
            </h1>
          </div>
  
          {/* Description Section */}
          <div>
            <p className="text-right text-gray-500">
              Unleash the rhythm with an extraordinary <br />lineup. Get ready for a
              musical <br /> extravaganza that will captivate your <br /> senses.
            </p>
          </div>
        </div>
  
        {/* Profiles Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Profile 1 */}
          <div className="relative group w-60 h-80 rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={debs} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 py-4 text-center">
                <h2 className="text-white text-2xl font-semibold">{/* Adjust size as needed */}
                    Deborah Joseph
                </h2>
                <p className="text-gray-400 text-xl">Event Director</p>
            </div>
        </div>

  
          {/* Profile 2 */}
          <div className="relative group w-60 h-80 rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={debs} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 py-4 text-center">
                <h2 className="text-white text-2xl font-semibold">{/* Adjust size as needed */}
                    Deborah Joseph
                </h2>
                <p className="text-gray-400 text-xl">Event Director</p>
            </div>
        </div>
  
          {/* Profile 3 */}
          <div className="relative group w-60 h-80 rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={debs} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 py-4 text-center">
                <h2 className="text-white text-2xl font-semibold">{/* Adjust size as needed */}
                    Deborah Joseph
                </h2>
                <p className="text-gray-400 text-xl">Event Director</p>
            </div>
        </div>
          {/* Profile 4 */}
          <div className="relative group w-60 h-80 rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={debs} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 py-4 text-center">
                <h2 className="text-white text-2xl font-semibold">{/* Adjust size as needed */}
                    Deborah Joseph
                </h2>
                <p className="text-gray-400 text-xl">Event Director</p>
            </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default AboutContent;
  