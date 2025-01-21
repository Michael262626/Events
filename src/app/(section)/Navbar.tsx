import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white px-12 py-8 flex items-center justify-between sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-pink-600 w-6 h-6 rounded"></div>
        <span className="text-xl font-bold">eventiva</span>
        <span className="text-pink-600 text-2xl">.</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <div className="relative group">
          <a href="#" className="text-pink-600">
            HOME
          </a>
          <span className="ml-1 group-hover:rotate-180 transform inline-block">&#x25BC;</span>
        </div>
        <a href="#" className="text-white">
          ABOUT US
        </a>
        <a href="#" className="text-white">
          VENUE
        </a>
        <div className="relative group">
          <a href="#" className="text-white">
            BLOG
          </a>
          <span className="ml-1 group-hover:rotate-180 transform inline-block">&#x25BC;</span>
        </div>
        <a href="#" className="text-white">
          CONTACT US
        </a>
      </div>

      {/* CTA Button */}
      <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded flex items-center space-x-2">
        <span>Buy Ticket</span>
      </button>
    </div>
  );
};

export default Navbar;
