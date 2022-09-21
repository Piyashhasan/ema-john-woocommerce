import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound_container container py-5">
      <div className="row text-center mt-5">
        <h1 className="mt-5 text-secondary">
          404 <span className="text-warning">|</span> Nothing here to see
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
