import React from 'react';
import Couple14 from  "../assets/Home/Partner.png";

const Questions = () => {
  return (
    <div>
      <section className="bg-orange-50 py-12 px-5 sm:px-12 rounded-lg mt-10 shadow-md max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Partner Image */}
        <div className="w-full">
          <img
            src={Couple14}
            alt="Partner"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#005f73] mb-6">
           Become a Partner
          </h2>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message (Optional) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="bg-[#005f73] text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    </div>
  );
};

export default Questions;
