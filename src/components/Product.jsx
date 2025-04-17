import React from "react";
import { Star, Truck, ShieldCheck } from "lucide-react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/Navbar";
import BannerImg from "../assets/Home/flex-banner.jpg"; // Replace with actual product image

const Product = () => {
  return (
    <div>
        <Navbar />
    <div className="bg-[#f0fdfa] min-h-screen py-10 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-xl shadow-md flex justify-center items-center">
          <img src={BannerImg} alt="Birthday Banner" className="rounded-lg w-full h-auto object-contain" />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-[#005f73]">Sudiksha Enterprises Birthday Banner</h1>
          <p className="text-sm text-gray-600 mt-2">Perfect for Birthday Parties • Premium Flex Print • Easy to hang</p>

          {/* Rating */}
          <div className="flex items-center mt-3 space-x-2">
            <span className="bg-green-600 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
              4.3 <Star size={14} fill="white" />
            </span>
            <span className="text-sm text-gray-500">1,245 Ratings</span>
          </div>

          {/* Price */}
          <div className="mt-4">
            <span className="text-3xl font-bold text-[#005f73]">₹249</span>
            <span className="text-sm text-gray-500 line-through ml-3">₹499</span>
            <span className="text-green-600 font-semibold ml-2">50% off</span>
          </div>

          {/* Highlights */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#005f73] mb-2">Highlights</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
              <li>Durable Flex Material</li>
              <li>Customizable Design</li>
              <li>Easy to Clean</li>
              <li>Perfect for Indoor & Outdoor Use</li>
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <Truck size={18} className="text-[#005f73]" />
            Free Delivery by April 15 — April 18
          </div>

          {/* Seller Info */}
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
            <ShieldCheck size={18} className="text-[#005f73]" />
            Sold by <span className="font-medium text-[#005f73]">Sudiksha Enterprises</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-[#005f73] text-white px-6 py-2 rounded-xl shadow hover:bg-[#0a9396] transition">
              Add to Cart
            </button>
            <button className="border border-[#005f73] text-[#005f73] px-6 py-2 rounded-xl hover:bg-[#e0f7f7] transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Product;
