import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
  const { creatUser, updateUser, setUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password Validation
    if (password.length < 6) {
      toast.error("❌ Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("❌ Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("❌ Password must contain at least one lowercase letter!");
      return;
    }

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      

        Swal.fire({
          title: "Registration Successful!",
          text: "🎉 Your account has been created successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("❌ " + error.message);
      });
  };

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={4000} />
      <title>Register</title>
      <div
        className="min-h-screen flex items-center justify-center
                      bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-10"
      >
        <div className="bg-[#1a1a2e]/90 backdrop-blur-md w-full max-w-md rounded-3xl shadow-2xl border border-purple-700/30 p-8 hover:shadow-purple-500 transition-all duration-500">
          <h1 className="text-3xl font-extrabold text-center text-white mb-2">
            Create Your Account
          </h1>
          <p className="text-center text-gray-300 mb-6">
            Register to get started!
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-xl border border-purple-600 bg-[#232347] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Photo URL
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 rounded-xl border border-purple-600 bg-[#232347] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-medium mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-xl border border-purple-600 bg-[#232347] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-300 font-medium mb-1">
                Password
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-xl border border-purple-600 bg-[#232347] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition pr-10"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute top-[70%] -translate-y-1/2 right-3 text-gray-400 hover:text-purple-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right">
              <a className="text-purple-400 text-sm hover:underline cursor-pointer">
                Forgot password?
              </a>
            </div>

            <button className="w-full py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all">
              Register
            </button>
          </form>

          <p className="text-center mt-6 text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-400 font-medium underline hover:text-purple-200"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;