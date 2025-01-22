import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import youtube from "../../../public/assets/youtube1.png"
import instagram from "../../../public/assets/ig.png"


const SubFooter = () => {
  return (
    <div className="bg-black text-white py-16 flex justify-center items-center min-h-screen">
    <div className="border p-12 justify-center items-center w-[85%] rounded-2xl border-gray-300 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto text-center">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            {/* Left Section */}
            <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span className="w-8 h-1 bg-pink-500"></span>
                    The Power Behind Us
            </h2>

              <h3 className="text-4xl font-extrabold text-white mb-4">
                Cadence <br />
                <span className="text-purple-500">Contributors</span>
              </h3>
            </div>

            {/* Right Section */}
            <div className="text-right lg:w-1/2">
              <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
                Elevating the Music. Our valued partners <br /> and sponsors play a pivotal role in bringing our vision to <br /> life. We orchestrate an unforgettable music <br /> celebration that resonates.
              </p>
            </div>
          </div>

          {/* Logos Section */}
          <div className="flex flex-wrap justify-center items-center gap-8 my-8">
            <Image
              src={youtube}
              width={200}
              alt="Youtube"
            />
            <Image
              src={instagram}
              width={200}
              alt="Imstagram"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Zelle"
              className="h-16"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Rackspace"
              className="h-16"
            />
            <img
              src="https://via.placeholder.com/100"
              alt="Amazon"
              className="h-16"
            />
          </div>

          {/* Call to Action */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2">
              Become A Sponsor
              <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
