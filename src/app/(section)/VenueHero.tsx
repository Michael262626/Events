import Light from "../../../public/assets/Blur mexico1.png"
import piano from "../../../public/assets/Neon Piano.jpeg"
import guitar from "../../../public/assets/Free Photo _ Closeup of a man playing the bass guitar.jpeg"
import Image from "next/image"

const VenuHero =()=>{
    return(
        <div className="relative flex flex-col">
            <div className="relative flex flex-col justify-center items-center">
            <Image
                src={Light}
                alt="Light"
                className="h-[400px] w-full object-cover"
            />
  
            <h2 className="absolute text-white text-6xl font-bold">Venue</h2>
            <h2 className="absolute text-2xl mt-36 font-bold">Home / <span className="text-gray-400">Venue</span></h2>
            </div>
            
            <div className="mt-8 p-28 flex flex-col md:flex-row items-center md:justify-between">
            <div className="text-center md:text-left">
                    <p className="mt-4 text-4xl md:text-6xl">
                        City <br /> Of <br /> Palms
                    </p>
                    <h1 className="text-pink-500 text-6xl mb-8 md:text-5xl font-bold">Anthony Village</h1>
                <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-bold">
                    Get Ticket
                </button>
            </div>
            <div className="relative mt-10 md:mt-0">
  {/* First Image with Gradient */}
  <div className="absolute top-10 -right-8 z-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1">
    <Image
      src={piano}
      alt="Event"
      width={350}
      className="rounded-xl h-25 opacity-70"
    />
  </div>

  {/* Second Image (Front) */}
  <div className="relative z-20 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-1">
    <Image
      src={guitar}
      alt="Event 2"
      width={480}
      className="rounded-xl h-25"
    />
  </div>
  </div>

            </div>
        </div>
    )
}
export default VenuHero;