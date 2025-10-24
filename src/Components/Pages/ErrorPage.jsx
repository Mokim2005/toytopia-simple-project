import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <title>Error</title>
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-2">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link to="/" className="mt-4 text-blue-500 underline hover:text-blue-700">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
