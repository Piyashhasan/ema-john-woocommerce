import React from "react";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop_container container py-5">
      <h1>SHOP PAGE</h1>
      <div className="row">
        <div className="col-md-9">
          <Products></Products>
        </div>
        <div className="col-md-3">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
