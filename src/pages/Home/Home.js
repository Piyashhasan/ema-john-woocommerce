import React from "react";
import "./Home.css";
import bannerImg from "../../images/home.png";
import { Link } from "react-router-dom";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";

const Home = () => {
  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="home_container container py-5">
      <PageTitle title={"Home"}></PageTitle>
      <div className="row p-2">
        <div className="col-md-6 my-auto">
          <small className="text-warning">Sale up to 70% off</small>
          <h1 className="mt-4">New Collection For Fall</h1>
          <p>Discover all the new arrivals of ready-to-wear collection.</p>
          <Link to="/shop" className="btn btn-warning mt-4">
            SHOP NOW
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img className="img-fluid banner_img" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
