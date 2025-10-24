import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { Navigate } from "react-router";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, auth } = useContext(AuthContext); // auth = Firebase auth instance
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setImagePreview(user.photoURL || "");
    }
  }, [user]);

  // 🔒 Protect route: redirect if not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    if (!name.trim() || !photoURL.trim()) {
      Swal.fire("Error", "Both fields are required!", "error");
      return;
    }

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      Swal.fire("Success!", "Profile updated successfully", "success");
      setImagePreview(photoURL);
    } catch (error) {
      console.error("Error updating profile:", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-pink-100 to-yellow-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center border border-gray-200">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={imagePreview || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-md"
          />
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-800 mb-1">
          {user.displayName || "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">{user.email}</p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Edit Form */}
        <form onSubmit={handleSaveChanges} className="space-y-4 text-left">
          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded-md"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-800 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="border p-2 w-full rounded-md"
              placeholder="Enter photo URL"
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white hover:from-orange-400 hover:to-pink-500 transition-all"
          >
            Save Changes
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Changes will update your user info in Firebase and also update your
          Navbar photo.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
