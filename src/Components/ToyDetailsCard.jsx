import React, { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence } from "framer-motion";

const ToyDetailsCard = ({ toys }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsModalOpen(false);
      setSuccessModal(true);
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex justify-center items-center px-4 py-10">
      <title>Toy-Details</title>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-purple-500/20"
      >
        {/* Image Section */}
        <div className="relative">
          <img
            src={pictureURL || "https://i.ibb.co.com/2KzQzjH/toy-placeholder.jpg"}
            alt={toyName}
            className="w-full h-80 object-cover rounded-t-3xl"
          />
          <div className="absolute top-5 left-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full font-semibold shadow-md">
            {category || "Toy"}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 text-white">
          <h1 className="text-4xl font-extrabold mb-3 text-purple-300">
            {toyName}
          </h1>
          <p className="text-gray-300 leading-relaxed">{description}</p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-purple-500/30">
              <h3 className="font-semibold text-pink-400 mb-2">Seller Info</h3>
              <p className="text-gray-300">👤 {sellerName}</p>
              <p className="text-gray-300">✉️ {sellerEmail}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-purple-500/30">
              <h3 className="font-semibold text-blue-400 mb-2">Product Info</h3>
              <p className="text-gray-300">💰 Price: ${price}</p>
              <p className="text-gray-300">⭐ Rating: {rating}</p>
              <p className="text-gray-300">📦 In Stock: {availableQuantity}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white shadow-md hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              🏠 Go Home
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl font-semibold text-white shadow-md hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            >
              🚀 Try Now
            </button>
          </div>
        </div>
      </motion.div>

      {/* Try Now Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-[#1a1a2e] p-6 rounded-2xl shadow-2xl w-80 border border-purple-500/40 text-white relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold text-center text-purple-400 mb-5">
                Try {toyName}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#232347] text-gray-200 rounded-lg px-4 py-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#232347] text-gray-200 rounded-lg px-4 py-2 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {successModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-6 rounded-2xl shadow-2xl w-80 text-center"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-3">
                🎉 Success!
              </h2>
              <p className="text-gray-700 mb-5">
                Thanks for trying{" "}
                <span className="font-semibold text-purple-700">{toyName}</span>!
              </p>
              <button
                onClick={() => setSuccessModal(false)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToyDetailsCard;
