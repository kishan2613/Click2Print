import React from 'react';
import BannerSection from "../assets/Home/BannerSection.png";

const HeroSection = () => {
  return (
    <section className="relative text-white h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Background Image in front */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-10" 
        style={{ backgroundImage: `url(${BannerSection})` }}
      ></div>

      {/* Overlay (optional, for better text visibility) */}
      <div className="absolute inset-0  opacity-30 z-20"></div>

      {/* Content */}
      <div className="relative z-30">
        <h1 className="text-5xl font-bold text-slate-800 leading-tight mb-4">Your Prints, Right at Your Door</h1>
        <p className="text-lg mb-6 text-slate-800 ">Print anything from banners to wedding cards with Click2Print. We bring quality prints to your doorstep!</p>

        {/* CTA Button */}
        <a href="#order-now" className="bg-white text-[#005f73] py-2 px-6 rounded-full text-lg font-semibold hover:bg-orange-100 transition duration-300">
          Order Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
