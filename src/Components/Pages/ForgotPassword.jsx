import React, { use, useRef } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { passwordResetEmail } = use(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const defaultEmail = location.state?.email || "";

  const handleReset = () => {
    const email = emailRef.current.value;

    if (!email) {
      toast("Please enter your email address!");
      return;
    }

    // call password reset function from context
    passwordResetEmail(email);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4">
      <title>Forgotten Password</title>
      <div className="bg-[#1a1a2e] shadow-2xl rounded-3xl p-8 max-w-md w-full border border-purple-700/30 hover:border-purple-500 transition-all duration-500 transform hover:scale-[1.02]">
        <h1 className="text-2xl font-bold text-center mb-6 tracking-wide">
          🔑 Reset Your Password
        </h1>

        {/* Email Input */}
        <input
          ref={emailRef}
          defaultValue={defaultEmail}
          type="email"
          placeholder="Enter your email"
          className="w-full bg-[#232347] text-gray-200 rounded-lg px-4 py-3 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition mb-4"
        />

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="w-full bg-gradient-to-r from-[#7b5cff] to-[#5b21b6] text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-purple-700/50 hover:scale-[1.03] transition-all duration-300 mb-3"
        >
          🔄 Reset Password
        </button>

        {/* Back to Login */}
        <Link
          to="/login"
          className="block text-center w-full bg-transparent border border-purple-600 text-purple-400 py-3 rounded-xl hover:bg-purple-600 hover:text-white font-medium transition-all duration-300"
        >
          🔙 Go to Login Page
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
