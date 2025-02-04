"use client";

import Image from "next/image";  
import music from "../../../public/assets/musicc.jpeg";  
import { useRouter } from "next/navigation";

const AboutSubFooter = () => {  
  const router = useRouter();  

  const handleTicketBuying = () => {
    router.push("/sign-up");
  };

  return (  
    <div className="relative bg-black text-white py-6 md:py-8"> {/* Reduced padding */}  
      <div className="container mx-auto p-6 md:p-10"> {/* Slightly reduced padding */}  
        <div className="relative bg-gray-900 min-h-[350px] rounded-3xl overflow-hidden">  
          {/* Background Image */}  
          <div className="absolute inset-0">  
            <Image  
              src={music}  
              alt="Music Background"  
              layout="fill"  
              objectFit="cover"  
              objectPosition="center"  
              className="opacity-60"  
              priority  
            />  
          </div>  

          {/* Content */}  
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-12 py-6 space-y-6 md:space-y-0">  
            <div className="max-w-md p-4">  
              <h2 className="text-3xl md:text-5xl font-extrabold text-pink-500">  
                Tickets <br />  
                Available!  
              </h2>  
              <p className="mt-2 mb-4 text-gray-300 text-sm md:text-base">  
                Don’t miss this extraordinary celebration of <br /> music and create  
                memories that will last a lifetime.  
              </p>  
            </div>  

            {/* Adjusted button positioning to reduce bottom space */}  
            <div className="absolute bottom-0 left-8 md:left-16"> {/* Moved button closer to the bottom */}  
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md shadow-lg hover:scale-105 transform transition" onClick={handleTicketBuying}>  
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
