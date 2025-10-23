import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, } from "react-router";

const PrivetRout = ({ children }) => {
  const { user, loading } = use(AuthContext);

  console.log(location)
  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate  to="/login" />;
};

export default PrivetRout;
