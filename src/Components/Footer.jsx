import React from "react";
import logoImg from "../assets/logo-img.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white pt-12 pb-6 mt-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              className="w-[60px] rounded-xl shadow-lg"
              src={logoImg}
              alt="logo"
            />
            <h1 className="text-xl font-bold tracking-wide">ToyTopia</h1>
          </Link>
          <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-xs">
            Discover creative and fun toys for kids of all ages. Inspire
            imagination and joyful learning every day.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="font-semibold mb-4 text-lg">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white transition duration-300">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white transition duration-300">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="font-semibold mb-4 text-lg">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-white font-medium">ToyTopia</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;