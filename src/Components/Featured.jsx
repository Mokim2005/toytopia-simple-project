import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 120, once: true });
  }, []);

  return (
    <div className="relative py-20 px-6 md:px-16 overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Neon glow particles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-fuchsia-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div
          data-aos="fade-right"
          className="md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-fuchsia-400">Discover</span> the Magic of{" "}
            <br />
            <span className="text-blue-400">Playtime & Creativity</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Bring joy to every child’s world with{" "}
            <span className="font-semibold text-fuchsia-400">ToyTopia</span> —
            where fun, learning, and imagination come alive! 🎈
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 mt-6">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-fuchsia-400" /> 100% Safe Toys
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-fuchsia-400" /> Creative &
              Educational
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-fuchsia-400" /> Designed for All
              Ages
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-fuchsia-400" /> Fast & Easy
              Delivery
            </div>
          </div>

          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-fuchsia-400/50 transition-all duration-300">
            Explore Now
          </button>
        </div>

        {/* Right Section */}
        <div
          data-aos="fade-left"
          className="md:w-1/2 flex justify-center relative"
        >
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-fuchsia-500 rounded-full opacity-30 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-30 blur-2xl"></div>

          <img
            src="https://i.ibb.co.com/FCwMsYP/many-colorful-toys-collection-on-the-desk-generative-ai-photo.jpg"
            alt="Toy Collection"
            className="w-full max-w-[600px] drop-shadow-[0_0_40px_rgba(255,0,255,0.3)] rounded-2xl border border-fuchsia-400/40 hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
