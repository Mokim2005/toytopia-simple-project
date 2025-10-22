import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { auth } from "../../Firebase/Firebase.init";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { creatUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    creatUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          New to our website{" "}
          <Link
            className="text-blue-500 underline hover:text-blue-800"
            to="/login"
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
