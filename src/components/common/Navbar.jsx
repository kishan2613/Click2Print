import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-[#005f73] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Logo + Slogan */}
        <div>
          <h1 className="text-2xl font-bold text-yellow-300">Click2Print</h1>
          <p className="text-xs text-cyan-100">Printed with care, delivered with love</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-sm relative">
          <Link to="/" className="hover:text-cyan-200">Home</Link>

          {/* Services with Toggle */}
          <li className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="hover:text-cyan-200 flex items-center gap-1"
            >
              Services ▾
            </button>
            {isServicesOpen && (
              <ul
                className="absolute left-0 top-8 bg-white text-gray-800 rounded shadow-md w-52 z-50"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <li><Link to="/Product" className="block px-4 py-2 hover:bg-gray-100">Flex Banner Printing</Link></li>
                <li><Link to="/services/wedding-cards" className="block px-4 py-2 hover:bg-gray-100">Wedding Cards</Link></li>
                <li><Link to="/services/visiting-cards" className="block px-4 py-2 hover:bg-gray-100">Visiting Cards</Link></li>
                <li><Link to="/services/custom-design" className="block px-4 py-2 hover:bg-gray-100">Custom Design</Link></li>
              </ul>
            )}
          </li>

          <Link to="/pricing" className="hover:text-cyan-200">Pricing</Link>
          <Link to="/order" className="hover:text-cyan-200">Order Now</Link>
          <Link to="/track-order" className="hover:text-cyan-200">Track Order</Link>
          <Link to="/about" className="hover:text-cyan-200">About Us</Link>
          <Link to="/contact" className="hover:text-cyan-200">Contact</Link>
        </ul>

        {/* Desktop Login */}
        <Link to="/login" className="hidden md:block border border-white px-4 py-2 rounded hover:bg-white hover:text-[#005f73] transition">
          Login
        </Link>

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
          <Link to="/" className="block py-2 rounded hover:bg-[#0a9396] px-2">Home</Link>

          <details className="group">
            <summary className="cursor-pointer py-2 px-2 rounded hover:bg-[#0a9396]">Services</summary>
            <ul className="ml-4 text-sm text-white space-y-1 mt-1">
              <li><Link to="/services/flex-banner" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Flex Banner Printing</Link></li>
              <li><Link to="/services/wedding-cards" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Wedding Cards</Link></li>
              <li><Link to="/services/visiting-cards" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Visiting Cards</Link></li>
              <li><Link to="/services/custom-design" className="block px-2 py-1 hover:bg-[#0a9396] rounded">Custom Design</Link></li>
            </ul>
          </details>

          <Link to="/pricing" className="block py-2 rounded hover:bg-[#0a9396] px-2">Pricing</Link>
          <Link to="/order" className="block py-2 rounded hover:bg-[#0a9396] px-2">Order Now</Link>
          <Link to="/track-order" className="block py-2 rounded hover:bg-[#0a9396] px-2">Track Order</Link>
          <Link to="/about" className="block py-2 rounded hover:bg-[#0a9396] px-2">About Us</Link>
          <Link to="/contact" className="block py-2 rounded hover:bg-[#0a9396] px-2">Contact</Link>

          <Link to="/login" className="w-full block text-center mt-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-[#005f73] transition">
            Login
          </Link>
        </div>
      )}
    </nav>  
  );
};

export default Navbar;
