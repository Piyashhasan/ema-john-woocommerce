import React from "react";
import "./Home.css";
import bannerImg from "../../images/home.png";

const Home = () => {
  return (
    <div className="home_container container py-5">
      <div className="row">
        <div className="col-md-6">
          <small className="text-warning">Sale up to 70% off</small>
          <h1>New Collection For Fall</h1>
          <p>Discover all the new arrivals of ready-to-wear collection.</p>
          <button className="btn btn-warning">SHOP NOW</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid w-75 h-75" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
