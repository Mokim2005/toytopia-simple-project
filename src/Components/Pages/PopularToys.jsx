import React from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
  once: true,
});

const PopularToys = ({ toydata }) => {
  const { pictureURL, toyName, rating, availableQuantity, price, toyId } =
    toydata;

  return (
    <div
      data-aos="zoom-in"
      className="card w-full bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 
      shadow-xl rounded-2xl overflow-hidden border border-purple-700/40 
      transform transition-transform duration-700 ease-in-out 
      hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
    >
      <figure className="h-52 bg-gray-950 flex justify-center items-center overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110 opacity-90 hover:opacity-100"
        />
      </figure>

      <div className="card-body p-5 text-center text-gray-200">
        <h2 className="text-lg font-semibold text-white mb-1 tracking-wide">
          {toyName}
        </h2>
        <p className="text-sm text-gray-400">⭐ Rating: {rating}</p>
        <p className="text-sm text-gray-400">Available: {availableQuantity}</p>
        <p className="text-md font-bold text-blue-400 mt-2">${price}</p>

        <div className="card-actions mt-4 justify-center">
          <Link
            to={`/toysdetails/${toyId}`}
            className="btn btn-sm bg-gradient-to-r from-purple-600 to-blue-600 
            border-none text-white font-semibold 
            hover:from-purple-500 hover:to-blue-500 
            hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] 
            transition-all duration-300 w-full rounded-xl"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;