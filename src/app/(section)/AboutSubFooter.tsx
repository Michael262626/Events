import Image from "next/image";
import music from "../../../public/assets/musicc.jpeg";

const AboutSubFooter = () => {
  return (
    <div className="relative bg-black text-white py-12">
      <div className="container mx-auto p-12">
        <div className="relative bg-gray-900 min-h-[400px] rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={music}
              alt="Music Background"
              layout="fill" // Makes the image fill its container
              objectFit="cover" // Ensures the image covers the space proportionally
              objectPosition="center" // Centers the image
              className="opacity-60" // Adds the semi-transparent overlay
              priority // Ensures the image is loaded eagerly
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-8 md:px-12 py-10 space-y-6 md:space-y-0">
            <div className="max-w p-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-pink-500">
                Early Bird Tickets <br />
                Available!
              </h2>
              <p className="mt-4 mb-4 text-gray-300">
                Don’t miss this extraordinary celebration of <br /> music and create
                memories that will last a lifetime.
              </p>
            </div>

            {/* Button moved to bottom left */}
            <div className="absolute bottom-6 pl-12">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transform transition">
                Get Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSubFooter;
