import React, { use, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, setUser } = use(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleSaveChanges = async () => {
    if (!user) {
      alert("User not logged in yet!");
      return;
    }

    try {
      await updateProfile(user, { displayName: name, photoURL });
      // context update
      setUser({ ...user, displayName: name, photoURL });
      alert("✅ Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("❌ Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-100 flex justify-center items-center px-4">
      <title>My-Profile</title>
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center border border-gray-200">
        <img
          src={photoURL || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
          alt="User"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-md mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          {user?.displayName || "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">{user?.email}</p>

        <div className="text-left space-y-3 mb-4">
          <label className="font-semibold">Name:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="font-semibold">Photo URL:</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>

        <button
          onClick={handleSaveChanges}
          className="btn w-full bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white hover:from-orange-400 hover:to-pink-500 transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
