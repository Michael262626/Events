const Direction =()=>{
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <div className="max-w-7xl w-full bg-[#181818] rounded-lg p-8 md:flex md:space-x-6">
            {/* Left Section */}
            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-5">Get Direction to Advance</h1>
              <div className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex flex-col md:flex-row items-start gap-12">
  {/* Venue Section */}
  <div>
    <div className="flex items-center mb-2 gap-2">
      <div className="w-8 h-1 bg-pink-500"></div>
      <h2 className="text-lg font-semibold">Venue</h2>
    </div>
    <p className="font-bold text-xl ">ANTHONY VILLAGE</p>
    <p className="text-gray-500">34-36, Faramobi Ajike St, Lagos, Nigeria</p>
  </div>

  {/* Time Section */}
  <div>
    <div className="flex items-center mb-2 gap-2">
      <div className="w-8 h-1 bg-pink-500"></div>
      <h2 className="text-lg font-semibold">Time</h2>
    </div>
    <p className="font-medium text-gray-500">1st March 2025</p>
    <p className="text-gray-500">Saturday <span className="text-gray-500">  09:00</span></p>
  </div>
</div>

</div>
</div>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold shadow-lg">
                Get Direction →
              </button>
            </div>
    
            {/* Right Section (Map) */}
            <div className="relative flex-1 bg-[#242424] rounded-lg overflow-hidden">
              <img
                src="/map-placeholder.png" // Replace with your map image
                alt="Map"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="bg-black/70 px-4 py-2 rounded-lg">
                  <p className="font-bold text-lg">Basement</p>
                  <p>135W, 46nd Street, New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
export default Direction;