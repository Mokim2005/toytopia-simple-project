import React, { use } from "react";
import { NavLink } from "react-router";
import logoImg from "../assets/logo-img.jpeg";
import { AuthContext } from "../Context/AuthContext";
import { FaUser } from "react-icons/fa";

const Navber = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      {" "}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mr-2 px-3 py-1 rounded transition-all duration-200 ${
            isActive ? "text-blue-500 font-semibold" : "text-gray-700"
          } hover:text-blue-600`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/myprofile"
        className={({ isActive }) =>
          `mr-2 px-3 py-1 rounded transition-all duration-200 ${
            isActive ? "text-blue-500 font-semibold" : "text-gray-700"
          } hover:text-blue-600`
        }
      >
        My Profile
      </NavLink>
      <NavLink
        to="/topratedpage"
        className={({ isActive }) =>
          `mr-2 px-3 py-1 rounded transition-all duration-200 ${
            isActive ? "text-blue-500 font-semibold" : "text-gray-700"
          } hover:text-blue-600`
        }
      >
        Features
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/">
          <img className="w-[70px] p-0 rounded-4xl" src={logoImg} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-x-3">
        <div className="relative group">
          {user && user.photoURL ? (
            <>
              <img
                src={user.photoURL}
                alt="User"
                className="w-12 h-12 rounded-full object-cover cursor-pointer"
              />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-[-35px] bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {user.displayName || "User"}
              </span>
            </>
          ) : (
            <FaUser className="text-3xl text-gray-600" />
          )}
        </div>

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white hover:from-orange-400 hover:to-pink-500 transition-all"
          >
            LogOut
          </button>
        ) : (
          <NavLink to="/login">
            <button className="btn bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white hover:from-orange-400 hover:to-pink-500 transition-all">
              LogIn
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
