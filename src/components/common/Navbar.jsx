import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#005f73] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo + Slogan */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-300">Click2Print</h1>
          <p className="text-xs text-cyan-100">Printed with care, delivered with love</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm">
          <li><a href="#" className="hover:text-cyan-200">Home</a></li>
          <li className="relative group">
            <button className="hover:text-cyan-200">Services ▾</button>
            <ul className="absolute left-0 top-8 bg-white text-gray-800 rounded shadow-md w-48 hidden group-hover:block z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Flex Banner Printing</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Wedding Cards</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Visiting Cards</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Custom Design</a></li>
            </ul>
          </li>
          <li><a href="#" className="hover:text-cyan-200">Pricing</a></li>
          <li><a href="#" className="hover:text-cyan-200">Order Now</a></li>
          <li><a href="#" className="hover:text-cyan-200">Track Order</a></li>
          <li><a href="#" className="hover:text-cyan-200">About Us</a></li>
          <li><a href="#" className="hover:text-cyan-200">Contact</a></li>
        </ul>

        {/* Desktop Login */}
        <button className="hidden md:block border border-white px-4 py-2 rounded hover:bg-white hover:text-[#005f73] transition">
          Login
        </button>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#005f73]">
          <a href="#" className="block py-2 rounded hover:bg-[#0a9396] px-2">Home</a>
          <details className="group">
            <summary className="cursor-pointer py-2 px-2 rounded hover:bg-[#0a9396]">Services</summary>
            <ul className="ml-4 text-sm text-white space-y-1 mt-1">
              <li><a href="#" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Flex Banner Printing</a></li>
              <li><a href="#" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Wedding Cards</a></li>
              <li><a href="#" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Visiting Cards</a></li>
              <li><a href="#" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Custom Design</a></li>
            </ul>
          </details>
          <a href="#" className="block py-2 rounded hover:bg-[#0a9396] px-2">Pricing</a>
          <a href="#" className="block py-2 rounded hover:bg-[#0a9396] px-2">Order Now</a>
          <a href="#" className="block py-2 rounded hover:bg-[#0a9396] px-2">Track Order</a>
          <a href="#" className="block py-2 rounded hover:bg-[#0a9396] px-2">About Us</a>
          <a href="#" className="block py-2 rounded hover:bg-[#0a9396] px-2">Contact</a>
          <button className="w-full mt-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-[#005f73] transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
