import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signInUser } = use(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
        e.target.reset()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
      <h1 className="font-bold text-2xl text-center">Please Login!</h1>
      <div className="card-body">
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
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
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p>
          Already have an account{" "}
          <Link
            className="text-blue-500 underline hover:text-blue-800"
            to="/register"
          >
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
