import React from "react";
import { Link } from "react-router";

const PopularToys = ({ toydata }) => {
  console.log(toydata);
  const { pictureURL, toyName, rating, availableQuantity, price } = toydata;
  return (
    <div className="card w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      <figure className="h-48 bg-gray-100 flex justify-center items-center">
        <img src={pictureURL} alt={toyName} className="h-full w-full object-cover" />
      </figure>

      <div className="card-body p-4">
        <h2 className="text-lg font-semibold text-gray-800">{toyName}</h2>
        <p className="text-sm text-gray-600">Rating: ⭐ {rating}</p>
        <p className="text-sm text-gray-600">Available: {availableQuantity}</p>
        <p className="text-md font-bold text-blue-600">${price}</p>

        <div className="card-actions mt-3">
          <Link to='/toysdetails' className="btn btn-primary btn-sm w-full">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default PopularToys;
