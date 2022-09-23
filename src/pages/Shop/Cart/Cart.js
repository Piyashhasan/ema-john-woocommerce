import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { cart, clearCartHandler } = props;

  // **** product price calculation ****
  let totalPrice = 0;
  let totalShippingPrice = 0;
  let totalQuantity = 0;
  for (let product of cart) {
    totalPrice += product.price * product.quantity;
    totalShippingPrice += product.shipping * product.quantity;
    totalQuantity += product.quantity;
  }

  // total tax calculation
  let totalTax = 0;
  let taxAmount = (totalPrice * 0.05).toFixed(3);
  totalTax = parseFloat(taxAmount);

  // grand total calculation
  let grandTotal = totalPrice + totalShippingPrice + totalTax;

  return (
    <div className="cart_container py-5">
      <h2 className="text-center mb-5">Order Summary</h2>
      <div className="cart_text m-4">
        <p>Selected Items: {totalQuantity}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Total Shipping Charge: {totalShippingPrice}</p>
        <p>Tax: {totalTax}</p>
        <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
      </div>
      <div className="button_group text-center mt-4">
        <button
          onClick={clearCartHandler}
          className="btn w-75 mb-3 clear_cart_btn"
        >
          Clear Cart <FontAwesomeIcon icon={faTrashCan} className="trashIcon" />
        </button>

        {/* children button */}
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
