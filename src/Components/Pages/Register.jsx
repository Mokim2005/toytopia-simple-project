import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { creatUser } = use(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
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
        console.log(result);

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

      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
        <h1 className="font-bold text-2xl text-center">Please Register!</h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* PhotoUrl  */}
              <label className="label">PhotoUrl</label>
              <input
                name="Photo"
                type="text"
                className="input"
                placeholder="PhotoUrl"
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* password  */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="btn btn-xs absolute top-2 right-5"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <p>
            Already have an account{" "}
            <Link
              className="text-blue-500 underline hover:text-blue-800"
              to="/login"
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
