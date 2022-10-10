import React from "react";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound_container container py-5">
      <PageTitle title={"Not found"}></PageTitle>
      <div className="row text-center mt-5">
        <h1 className="mt-5 text-secondary">
          404 <span className="text-warning">|</span> Nothing here to see
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
