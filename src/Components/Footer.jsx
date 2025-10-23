import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-2">ToyTopia</h1>
          <p className="text-gray-400 max-w-xs">
            The best place to find creative toys for kids of all ages. Inspire
            imagination and fun!
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h2 className="font-semibold mb-2">Company</h2>
            <ul>
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-700 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ToyTopia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;