import React, { useEffect } from "react";
import "./Login.css";
import googleImg from "../../images/google.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";

const Login = () => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------

  // **** declare firebase hooks ****
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  // **** declare Email Password state ****
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error message handle
  let errorElement;
  if (error) {
    errorElement = <p className="errorMessage">Error: {error?.message}</p>;
  }

  // **** Login Form Handler ****
  const handleLoginForm = (event) => {
    event.preventDefault();
    // call firebase hooks

    signInWithEmailAndPassword(email, password);
  };

  // **** Handle passoword reset ****
  const handleResetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Check your email....!");
    } else {
      toast("Please enter your email address");
    }
  };

  // **** Navigate the path ****
  const navigate = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  useEffect(() => {
    if (user || googleUser) {
      navigate(from);
    }
  }, [from, navigate, user, googleUser]);

  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="login_container container py-5">
      <PageTitle title={"Login"}></PageTitle>
      <div className="row">
        <div className="form_field w-50 m-auto ">
          <h1 className="text-center text-gray mb-5 mt-3">Login</h1>
          <form onSubmit={handleLoginForm}>
            <div className="form-group mb-4">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                onBlur={(e) => setEmail(e.target.value)}
                className="form-control mt-2"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onBlur={(e) => setPassword(e.target.value)}
                className="form-control mt-2"
                placeholder="Password"
                required
              />
            </div>
            {errorElement}
            <input
              className="btn w-100 mt-3 login_button"
              type="submit"
              value="Login"
            />
          </form>
          <div className="create_new_account d-flex justify-content-center mt-3">
            <p>
              <small className="mx-1">New to Ema-john?</small>
            </p>
            <p>
              <Link to="/registration" style={{ color: "#ff8c00" }}>
                <small>Create New Account</small>
              </Link>
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p>
              Forget passowrd?{" "}
              <Link onClick={handleResetPassword} className="text-primary">
                Reset your password
              </Link>{" "}
            </p>
          </div>
          <div className="before_after text-center ">
            <p>
              <small>Or</small>
            </p>
          </div>
          <div className="google_log_in text-center">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-dark w-100"
            >
              <img className="img-fluid mx-2" src={googleImg} alt="" />
              <span className="">Login with Google </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
