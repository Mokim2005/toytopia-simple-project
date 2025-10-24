import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
   const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const from = location.state?.from?.pathname || "/";

  //google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //email sign in
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        console.log(result);
        //success alret
        Swal.fire({
          title: "Login Successful!",
          text: "Congratulations 🎉 You have logged in successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate(from, { replace: true });
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Login Failed",
          text: error.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  const handleTogglePassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-10 px-4">
      <title>Login</title>
      <div className="card bg-white/90 backdrop-blur-md w-full max-w-sm mx-auto shadow-2xl rounded-2xl border border-gray-200">
        <h1 className="font-bold text-3xl text-center mt-6 text-gray-800">
          Please Login!
        </h1>

        <div className="card-body space-y-3">
          <form onSubmit={handleLogIn} className="space-y-3">
            <fieldset className="fieldset space-y-3">
              {/* Email */}
              <label className="label font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />

              {/* Password */}
              <label className="label font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="btn btn-xs absolute top-2 right-2 bg-transparent border-none text-gray-600 hover:text-blue-600"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="text-right">
                <a className="link link-hover text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button className="btn btn-neutral w-full mt-2 hover:bg-gray-800 transition-all duration-300">
                Login
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="divider text-gray-400 text-sm">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 shadow-sm flex items-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-center text-gray-700 mt-4">
            New to our website?{" "}
            <Link
              className="text-blue-600 font-medium underline hover:text-blue-800"
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
