import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart_container py-5">
      <h2 className="text-center mb-5">Order Summary</h2>
      <div className="cart_text m-4">
        <p>Selected Items: 6</p>
        <p>Total Price: $1140</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114</p>
        <h5>Grand Total: $1559</h5>
      </div>
      <div className="button_group text-center mt-4">
        <button className="btn w-75 mb-3 clear_cart_btn">Clear Cart</button>
        <Link to="/order" className="btn w-75 review_order_btn">
          Review Order
        </Link>
      </div>
    </div>
  );
};

export default Cart;
