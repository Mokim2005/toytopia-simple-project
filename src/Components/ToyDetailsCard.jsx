import React, { useState } from "react";
import { Link } from "react-router";

const ToyDetailsCard = ({ toys }) => {
  console.log(toys)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsModalOpen(false);
      setSuccessModal(true);
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden my-10">
      <title>Toy-Details</title>
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

        {/* Buttons */}
        <div className="pt-6 flex gap-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Go To Home
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Try Now
          </button>
        </div>
      </div>

      {/* Try Now Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Try {toyName}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="input input-bordered w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="input input-bordered w-full border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {successModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-3">
              🎉 Success!
            </h2>
            <p className="text-gray-700 mb-5">
              Thank you for trying{" "}
              <span className="font-semibold">{toyName}</span>!
            </p>
            <button
              onClick={() => setSuccessModal(false)}
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToyDetailsCard;
