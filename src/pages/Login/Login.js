import React from "react";
import "./Login.css";
import googleImg from "../../images/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_container container py-5">
      <div className="row">
        <div className="form_field w-50 m-auto ">
          <h1 className="text-center text-gray mb-5 mt-3">Login</h1>
          <form className="">
            <div className="form-group mb-4">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control mt-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-4">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control mt-2"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <input
              className="btn w-100 mt-4 login_button"
              type="submit"
              value="Login"
            />
          </form>
          <div className="create_new_account d-flex justify-content-center mt-3">
            <p>
              <small className="mx-1">New to Ema-john?</small>
            </p>
            <p>
              <Link to="/registration" className="text-warning">
                <small>Create New Account</small>
              </Link>
            </p>
          </div>
          <div className="before_after text-center ">
            <p>
              <small>Or</small>
            </p>
          </div>
          <div className="google_log_in text-center">
            <button className="btn btn-dark w-100">
              <img className="img-fluid mx-2" src={googleImg} alt="" />
              <span className="">Continue with Google </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
