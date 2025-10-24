import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="hero min-h-[60vh] bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-200 text-center">
      <div className="hero-content flex-col">
        <h1 className="text-6xl font-extrabold text-pink-600 animate-bounce">
          🎁 Mega Toy Sale!
        </h1>
        <p className="text-gray-700 text-xl mt-3">
          Up to <span className="font-bold text-orange-500">50% OFF</span> on
          your favorite toys!
        </p>
        <button className="btn mt-5 bg-gradient-to-r from-pink-500 to-yellow-400 border-none text-white text-lg">
          Grab the Deals Now
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
