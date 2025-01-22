import hall1 from "../../../public/assets/Hall1.jpeg"
import hall2 from "../../../public/assets/Hall2.jpeg"
import hall3 from "../../../public/assets/Hall3.jpeg"

import Image from "next/image";

const VenueContent = () => {
    return (
      <div className="bg-black  text-white py-16 px-6">
        {/* Container */}
        <div className="grid p-14 grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Title Section */}
          <div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-1 bg-pink-500"></div>
                <h3 className="text-lg font-semibold">
                    Hall View
                </h3>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
              The <br /> <span className="text-pink-500">Conference Hall</span>
            </h1>
          </div>
  
          {/* Description Section */}
          <div>
            <p className="text-right text-gray-500">
              Immerse in mesmerizing performances and <br />interactive art at our music extravanganzar.
              Experience <br /> a festival atmosphere like no other else
            </p>
          </div>
        </div>
  
        {/* Profiles Section */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Profile 1 */}
          <div className="relative group w-[30%] h-[500px] rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={hall1} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
        </div>

  
          {/* Profile 2 */}
          <div className="relative group w-[30%] h-[500px]  rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={hall2} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
        </div>
  
          {/* Profile 3 */}
          <div className="relative group w-[30%] h-[500px] rounded-lg overflow-hidden bg-gray-800">
            <Image
                src={hall3} // Replace with your actual image path
                alt="Profile 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
        </div>
        
        </div>
      </div>
    );
  };
  
  export default VenueContent;
  