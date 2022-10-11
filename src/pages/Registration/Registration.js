import React, { useEffect } from "react";
import "./Registration.css";
import googleImg from "../../images/google.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";

const Registration = () => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------

  // **** declare state ****
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // **** declare firebase hooks ****
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Google sign in hooks
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  // Set User Name
  const [updateProfile] = useUpdateProfile(auth);

  // **** declare handler ****
  const handleName = (event) => {
    setName(event.target.value);
  };

  // email
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  
  // password
  const handlePassword = (event) => {
    if (event.target.value.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setPassword(event.target.value);
      setError("");
    }
  };

  // confirm password
  const handleConfirmPassword = (event) => {
    if (password !== event.target.value) {
      setError("Password did not match..!");
    } else {
      setConfirmPassword(event.target.value);
      setError("");
    }
  };

  // **** Registration Form Handler ****
  const handleRegistrationForm = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did not match..!");
      return;
    }
    // call firebase hooks
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Registration successful & check your mail for verification");
  };
  
  // **** Navigate the path ****
  const navigate = useNavigate();
  useEffect(() => {
    if (user || googleUser) {
      navigate("/shop");
    }
  }, [navigate, user, googleUser]);

  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="login_container container py-5">
      <PageTitle title={"Sign up"}></PageTitle>
      <div className="row">
        <div className="form_field w-50 m-auto">
          <h1 className="text-center text-gray mb-4">Sign Up</h1>
          <form onSubmit={handleRegistrationForm}>
            <div className="form-group mb-3">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="name"
                onBlur={handleName}
                className="form-control mt-2"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                onBlur={handleEmail}
                className="form-control mt-2"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handlePassword}
                className="form-control mt-2"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleConfirmPassword}
                className="form-control mt-2"
                placeholder="Password"
                required
              />
            </div>
            <p style={{ margin: "0px", color: "red" }}>{error}</p>
            <input
              className="btn w-100 mt-3 login_button"
              type="submit"
              value="Sign Up"
            />
          </form>
          <div className="create_new_account d-flex justify-content-center mt-2">
            <p>
              <small className="mx-1">Already have an account?</small>
            </p>
            <p>
              <Link to="/login" style={{ color: "#ff8c00" }}>
                <small>Login</small>
              </Link>
            </p>
          </div>
          <div className="before_after text-center ">
            <p>
              <small>Or</small>
            </p>
          </div>
          <div className="google_log_in text-center">
            <button
              onClick={() => {
                signInWithGoogle();
                toast("Registration successful");
              }}
              className="btn btn-dark w-100"
            >
              <img className="img-fluid mx-2" src={googleImg} alt="" />
              <span className="">Sign Up with Google </span>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;
