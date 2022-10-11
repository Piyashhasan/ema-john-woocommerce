import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (!user.emailVerified) {
    return (
      <div className="verification_container container py-5">
        <div className="row text-center mt-5">
          <h1 className="text-warning">VERIFICATION</h1>
          <h3 className="my-3">Please check your email & verify</h3>
          <h5 className="my-3 text-danger">
            If you not receive any mail .....!{" "}
            <button
              onClick={async () => {
                await sendEmailVerification();
                toast("sent email");
              }}
              className="btn btn-primary"
            >
              Send link to Email
            </button>{" "}
          </h5>
          <h2 className="text-primary my-4">
            After verification please reload the page.....!
          </h2>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
