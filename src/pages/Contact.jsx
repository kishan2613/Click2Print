import Footer from "../components/common/footer";
import Navbar from "../components/common/Navbar";
import Couple14 from "../assets/Home/Partner.png";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <section className="bg-[#e0f2f1] py-16 px-6 sm:px-12 mt-10 rounded-lg shadow-md max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="w-full">
            <img
              src={Couple14}
              alt="Partner"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Right Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#005f73] mb-6">
              Become a <span className="text-yellow-400">Partner</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Partner with Click2Print and reach more customers with ease. Fill out the form below to get started.
            </p>

            <form className="space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-[#005f73] font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. yourname@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005f73]"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-[#005f73] font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91-XXXXXXXXXX"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005f73]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#005f73] font-semibold mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005f73]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#005f73] text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
