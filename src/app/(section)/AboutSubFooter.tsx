"use client";

import Image from "next/image";  
import music from "../../../public/assets/musicc.jpeg";  
import { useRouter } from "next/navigation";



const AboutSubFooter = () => {  
    const router = useRouter();  

    const handleTicketBuying = () =>{
      router.push("/sign-up")
    }
  
  return (  
    <div className="relative bg-black text-white py-8 md:py-12"> {/* Adjusted padding for better mobile view */}  
      <div className="container mx-auto p-6 md:p-12"> {/* Adjusted padding for smaller screens */}  
        <div className="relative bg-gray-900 min-h-[400px] rounded-3xl overflow-hidden">  
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
          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between px-4 md:px-12 py-6 space-y-6 md:space-y-0"> {/* Adjusted padding and spacing */}  
            <div className="max-w-md p-4"> {/* Adjusted padding for smaller screens */}  
              <h2 className="text-3xl md:text-5xl font-extrabold text-pink-500"> {/* Reduced size for mobile view */}  
                Early Bird Tickets <br />  
                Available!  
              </h2>  
              <p className="mt-2 mb-4 text-gray-300 text-sm md:text-base"> {/* Reduced size for mobile view */}  
                Don’t miss this extraordinary celebration of <br /> music and create  
                memories that will last a lifetime.  
              </p>  
            </div>  

            {/* Button moved to bottom left */}  
            <div className="absolute -bottom-6 left-8 md:left-12"> {/* Adjusted button positioning */}  
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