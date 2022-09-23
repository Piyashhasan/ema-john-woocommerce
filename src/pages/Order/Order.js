import React from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Shop/Cart/Cart";
import ReviewItems from "./ReviewItems/ReviewItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  // handleRemoveProduct
  const handleRemoveProduct = (selectedProduct) => {
    const rest = cart.filter((product) => product.id !== selectedProduct.id);
    setCart(rest);
    removeFromDb(selectedProduct.id);
  };

  // **** clear cart - handeler ****
  const clearCartHandler = () => {
    deleteShoppingCart();
    setCart([]);
  };
  return (
    <div className="container py-5 order_container">
      <div className="row">
        <div className="col-md-9">
          {cart.map((product) => (
            <ReviewItems
              key={product.id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            ></ReviewItems>
          ))}
        </div>
        <div className="col-md-3 cart_area">
          <Cart cart={cart} clearCartHandler={clearCartHandler}>
            <Link to="/inventory" className="btn w-75 review_order_btn">
              Proceed Checkout{" "}
              <FontAwesomeIcon icon={faCreditCard} className="trashIcon" />
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
