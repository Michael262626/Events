import Light from "../../../public/assets/Lights.jpeg";  
import piano from "../../../public/assets/Neon Piano.jpeg";  
import guitar from "../../../public/assets/Free Photo _ Closeup of a man playing the bass guitar.jpeg";  
import Image from "next/image";  

const AboutHero = () => {  
  return (  
    <div className="relative flex flex-col">  
      <div className="relative flex flex-col justify-center items-center">  
        <Image  
          src={Light}  
          alt="Light"  
          className="h-[300px] md:h-[400px] w-full object-cover"  
        />  
        <h2 className="absolute text-white text-4xl md:text-6xl font-bold">About us</h2>  
        <h2 className="absolute text-lg md:text-2xl mt-28 md:mt-36 font-bold text-white">Home / <span className="text-gray-400">About us</span></h2>  
      </div>  

      <div className="bg-black p-6 md:p-28 flex flex-col md:flex-row items-center md:justify-between">  
        <div className="text-center md:text-left">  
          <h1 className="text-pink-500 text-4xl md:text-6xl font-bold">Advance 2025</h1>  
          <p className="mt-4 text-xl text-white md:text-3xl">
            <span className="block">Where music and magic unite</span>
            <span className="block">for unforgettable experiences</span>
          </p>

          <button className="mt-6 px-4 py-2 md:px-6 md:py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-bold">  
            Get Ticket  
          </button>  
        </div>  
        <div className="relative mt-8 md:mt-0 w-full md:w-auto">  
          {/* First Image with Gradient */}  
          <div className="absolute top-4 -right-4 md:top-10 md:-right-8 z-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1">  
            <Image  
              src={piano}  
              alt="Event"  
              width={600}  
              className="rounded-xl h-[150px] md:h-[400px] opacity-70"  
            />  
          </div>  

          {/* Second Image (Front) */}  
          <div className="relative z-20 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1">  
            <Image  
              src={guitar}  
              alt="Event 2"  
              width={600}  
              className="rounded-xl h-[200px] md:h-[350px]"  
            />  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default AboutHero;