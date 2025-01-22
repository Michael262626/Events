const ContactBody = () => {
    return (
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading Section */}
          <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="md:w-1/2">
            <div className="flex gap-4 items-center">
                <div className="w-12 h-1 bg-pink-500"></div>
                <h2 className="text-4xl font-semibold">Contact</h2>
            </div>
            
              <h1 className="text-6xl font-bold leading-tight">
                Music <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  Get In Touch
                </span>
              </h1>
            </div>
            <p className="md:w-1/2 text-right mt-4 text-gray-400 max-w text-xl">
              Immerse in mesmerizing performances, vibrant <br /> soundscapes, and
              interactive art at our music <br />  a festival atmosphere like no <br /> other, where unforgettable moments.
            </p>
          </div>
  
          {/* Form Section */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-300 mb-2">First Name *</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-gray-300 mb-2">Last Name *</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            {/* Comment */}
            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2">Your Comment</label>
              <textarea
                placeholder="Your Comment"
                rows={4} // Updated to use a number
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactBody;
  