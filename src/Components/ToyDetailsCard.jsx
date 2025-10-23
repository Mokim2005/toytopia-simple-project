import React from "react";
import { Link } from "react-router";

const ToyDetailsCard = ({ toys }) => {
  if (!toys) {
    return (
      <div className="text-center text-lg font-semibold text-gray-500 py-10">
        Loading toy details...
      </div>
    );
  }

  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    category,
  } = toys;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden my-10">
      {/* Image Section */}
      <div className="relative">
        <img
          src={pictureURL || "https://i.ibb.co.com/2KzQzjH/toy-placeholder.jpg"}
          alt={toyName}
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category || "Toy"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{toyName}</h1>
        <p className="text-gray-600">{description}</p>

        <div className="grid md:grid-cols-2 gap-4 pt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Seller Info</h3>
            <p className="text-gray-600">Name: {sellerName}</p>
            <p className="text-gray-600">Email: {sellerEmail}</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Product Info</h3>
            <p className="text-gray-600">Price: ${price}</p>
            <p className="text-gray-600">Rating: ⭐ {rating}</p>
            <p className="text-gray-600">Available: {availableQuantity}</p>
          </div>
        </div>

        <div className="pt-6">
          <Link to='/' className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsCard;
