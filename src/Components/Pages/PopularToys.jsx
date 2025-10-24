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
      className="card w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden 
      transform transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      <figure className="h-48 bg-gray-100 flex justify-center items-center overflow-hidden">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </figure>

      <div className="card-body p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{toyName}</h2>
        <p className="text-sm text-gray-600">⭐ Rating: {rating}</p>
        <p className="text-sm text-gray-600">Available: {availableQuantity}</p>
        <p className="text-md font-bold text-blue-600 mt-2">${price}</p>

        <div className="card-actions mt-3 justify-center">
          <Link
            to={`/toysdetails/${toyId}`}
            className="btn btn-primary btn-sm w-full hover:bg-blue-700 transition-all duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
