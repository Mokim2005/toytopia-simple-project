import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, setUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSaveChanges = async () => {
    if (!user) {
      toast("User not logged in yet!");
      return;
    }

    try {
      await updateProfile(user, { displayName: name, photoURL });
      setUser({ ...user, displayName: name, photoURL });
      toast("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast("❌ Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4">
      <title>My-Profile</title>

      <div className="bg-[#1a1a2e] shadow-2xl rounded-3xl p-8 max-w-md w-full border border-purple-700/30 hover:border-purple-500 transition-all duration-500 transform hover:scale-[1.02]">
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={
                photoURL ||
                "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="User"
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
            <span className="absolute bottom-1 right-2 w-4 h-4 bg-green-400 border-2 border-[#1a1a2e] rounded-full"></span>
          </div>
          <h1 className="text-2xl font-bold mt-4 tracking-wide">
            {user?.displayName || "Guest User"}
          </h1>
          <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">
              Name:
            </label>
            <input
              type="text"
              className="w-full bg-[#232347] text-gray-200 rounded-lg px-4 py-2 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-1">
              Photo URL:
            </label>
            <input
              type="text"
              className="w-full bg-[#232347] text-gray-200 rounded-lg px-4 py-2 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveChanges}
          className="mt-6 w-full bg-gradient-to-r from-[#7b5cff] to-[#5b21b6] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-purple-700/50 hover:scale-[1.03] transition-all duration-300"
        >
          💾 Save Changes
        </button>
      </div>
    </div>
  );
};

export default MyProfile;