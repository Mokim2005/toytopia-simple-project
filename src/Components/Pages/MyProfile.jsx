import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center border border-gray-200">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={
              user?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-md"
          />
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.displayName || "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">{user?.email || "No email found"}</p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Profile Details */}
        <div className="space-y-2 text-left text-gray-700">
          <p>
            <span className="font-semibold text-gray-800">Account Type:</span>{" "}
            {user ? "Registered User" : "Guest"}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Status:</span>{" "}
            <span className="text-green-600 font-medium">
              {user ? "Active ✅" : "Inactive ❌"}
            </span>
          </p>
        </div>

        {/* Action Button */}
        <button className="btn w-full mt-2 bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white hover:from-orange-400 hover:to-pink-500 transition-all">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
