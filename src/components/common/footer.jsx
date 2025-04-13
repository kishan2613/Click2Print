import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#005f73] text-white pt-10 pb-6 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-300 mb-3">Click2Print</h2>
          <p className="text-sm text-cyan-100">
            Printed with care, delivered with love — your trusted online print partner.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-cyan-100">
            <li><a href="#home" className="hover:text-yellow-200 transition">Home</a></li>
            <li><a href="#categories" className="hover:text-yellow-200 transition">Categories</a></li>
            <li><a href="#order-now" className="hover:text-yellow-200 transition">Order Now</a></li>
            <li><a href="#faq" className="hover:text-yellow-200 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm text-cyan-100">
            <li>Wedding Cards</li>
            <li>Custom T-Shirts</li>
            <li>Flex Banners</li>
            <li>Gift Printing</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm text-cyan-100">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@click2print.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91-9876543210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Delhi, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-cyan-800 pt-4 text-center text-sm text-cyan-100">
        © {new Date().getFullYear()} Click2Print. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
