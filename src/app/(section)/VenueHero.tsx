import Light from "../../../public/assets/Blur mexico1.png";  
import piano from "../../../public/assets/Neon Piano.jpeg";  
import guitar from "../../../public/assets/Free Photo _ Closeup of a man playing the bass guitar.jpeg";  
import Image from "next/image";  

const VenuHero = () => {  
  return (  
    <div className="relative flex flex-col">  
      <div className="relative flex flex-col justify-center items-center">  
        <Image  
          src={Light}  
          alt="Light"  
          className="h-[250px] md:h-[400px] w-full object-cover" // Adjusted height for mobile  
        />  

        <h2 className="absolute text-white text-4xl md:text-6xl font-bold">Venue</h2>  
        <h2 className="absolute text-white text-sm md:text-2xl mt-24 md:mt-36 font-bold">Home / <span className="text-gray-300">Venue</span></h2>  
      </div>  

      <div className="bg-black p-6 md:p-28 flex flex-col md:flex-row items-center md:justify-between">  
        <div className="text-center md:text-left">  
        <p className="text-white mt-4 text-3xl md:text-4xl whitespace-nowrap md:whitespace-normal">  
          City Of Palms  
        </p> 
          <h1 className="text-pink-500 text-4xl mb-4 md:text-5xl font-bold">Anthony Village</h1>  
          <button className="mt-6 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-bold md:px-6 md:py-3">  
            Get Ticket  
          </button>  
        </div>  
        
        <div className="relative mt-6 md:mt-0">  
          {/* First Image with Gradient */}  
          <div className="absolute top-8 md:top-10 -right-4 md:-right-8 z-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1">  
            <Image  
              src={piano}  
              alt="Event"  
              width={250} // Adjusted width for mobile  
              className="rounded-xl opacity-70"  
            />  
          </div>  

          {/* Second Image (Front) */}  
          <div className="relative z-20 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1">  
            <Image  
              src={guitar}  
              alt="Event 2"  
              width={350} // Adjusted width for mobile  
              className="rounded-xl"  
            />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default VenuHero;