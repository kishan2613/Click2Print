import React from "react";
import { BadgeCheck, Truck, Clock, Sparkles } from "lucide-react";

const WhyClick2Print = () => {
  return (
    <section className="bg-white py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">
          Why Click2Print?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We make printing seamless, stunning, and stress-free. Whether it's your big day or your business needs, Click2Print ensures quality prints delivered to your doorstep — on time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <BadgeCheck className="w-10 h-10 text-[#005f73] mb-3" />
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Premium Quality</h4>
            <p className="text-sm text-gray-500 text-center">Top-notch materials with vibrant print finishes that stand out.</p>
          </div>

          <div className="flex flex-col items-center">
            <Truck className="w-10 h-10 text-[#005f73] mb-3" />
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-500 text-center">Swift doorstep delivery so you're always on schedule.</p>
          </div>

          <div className="flex flex-col items-center">
            <Clock className="w-10 h-10 text-[#005f73] mb-3" />
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Easy Ordering</h4>
            <p className="text-sm text-gray-500 text-center">User-friendly platform for placing orders in just a few clicks.</p>
          </div>

          <div className="flex flex-col items-center">
            <Sparkles className="w-10 h-10 text-[#005f73] mb-3" />
            <h4 className="font-semibold text-lg text-gray-800 mb-2">Custom Designs</h4>
            <p className="text-sm text-gray-500 text-center">Personalize prints your way — from wedding cards to mugs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClick2Print;
