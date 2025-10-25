import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    navigate("/forgot-password", { state: { email } });
  };

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-10">
      <title>Login</title>
      <div className="bg-[#1a1a2e] shadow-2xl rounded-3xl p-8 max-w-sm w-full border border-purple-700/30 hover:border-purple-500 transition-all duration-500 transform hover:scale-[1.02]">
        <h1 className="font-bold text-3xl text-center mt-6 text-white">
          Please Login!
        </h1>

        <div className="card-body space-y-3">
          <form onSubmit={handleLogIn} className="space-y-3">
            <fieldset className="fieldset space-y-3">
              {/* Email */}
              <label className="label font-medium text-gray-300">Email</label>
              <input
                name="email"
                ref={emailRef}
                type="email"
                className="input input-bordered w-full bg-[#232347] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl px-3 py-2"
                placeholder="Enter your email"
              />

              {/* Password */}
              <label className="label font-medium text-gray-300">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full bg-[#232347] text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl px-3 py-2 pr-10"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400 hover:text-purple-300"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div onClick={handleForgotPassword} className="text-right">
                <Link
                  to="/forgot-password"
                  className="link link-hover text-sm text-purple-400 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button className="btn w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-pink-500 hover:to-purple-600 transition-all duration-300">
                Login
              </button>
            </fieldset>
          </form>

          {/* Divider */}
          <div className="divider text-gray-400 text-sm">OR</div>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full bg-[#232347] text-gray-200 border border-purple-600 hover:bg-[#2e2a4d] shadow-sm flex items-center gap-2 transition-colors"
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

          <p className="text-center text-gray-300 mt-4">
            New to our website?{" "}
            <Link
              className="text-purple-400 font-medium underline hover:text-purple-200"
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
