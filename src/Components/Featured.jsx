import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Featured = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 120, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section */}
      <div
        data-aos="fade-right"
        className="md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 leading-tight">
          Discover the Magic of <br />
          <span className="text-blue-600">Playtime & Creativity</span>
        </h1>
        <p className="text-gray-700 text-lg">
          Bring joy to every child’s world with{" "}
          <span className="font-semibold text-pink-600">ToyTopia</span> — where
          fun, learning, and imagination come alive! 🎈
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800 mt-6">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> 100% Safe Toys
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> Creative & Educational
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> Designed for All Ages
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-pink-500" /> Fast & Easy Delivery
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        data-aos="fade-left"
        className="md:w-1/2 flex justify-center relative"
      >
        <img
          src="https://i.ibb.co.com/FCwMsYP/many-colorful-toys-collection-on-the-desk-generative-ai-photo.jpg"
          alt="Toy Collection"
          className="w-full max-w-[600px] drop-shadow-2xl rounded-xl hover:scale-105 transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default Featured;
