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
    console.log(email, password);
    //Password Validation Checks
    if (password.length < 6) {
      toast.error("❌ Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error(
        "❌ Password must contain at least one uppercase letter (A–Z)!"
      );
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error(
        "❌ Password must contain at least one lowercase letter (a–z)!"
      );
      return;
    }

    // If the password is valid, then call creatUser
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
        // Success alert
        Swal.fire({
          title: "Registration Successful!",
          text: "Congratulations 🎉 Your account has been created successfully!",
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 p-4">
        <div className="card bg-white w-full max-w-md shadow-2xl rounded-2xl border border-gray-200">
          <h1 className="font-extrabold text-3xl text-center text-gray-800 mt-6">
            Please Register!
          </h1>

          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset space-y-3">
                {/* name  */}
                <label className="label font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />

                {/* PhotoUrl  */}
                <label className="label font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter photo URL"
                />

                {/* email  */}
                <label className="label font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />

                {/* password  */}
                <label className="label font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={handleTogglePassword}
                    className="absolute top-3 right-3 text-gray-500 hover:text-blue-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="text-right mt-1">
                  <a className="link text-blue-500 hover:text-blue-700 text-sm cursor-pointer">
                    Forgot password?
                  </a>
                </div>

                {/* Register Button */}
                <button className="btn btn-primary w-full mt-4 hover:scale-[1.02] transition-transform">
                  Register
                </button>
              </fieldset>
            </form>

            {/* Already have an account */}
            <p className="text-center mt-4 text-gray-700">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline hover:text-blue-700 font-medium"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
