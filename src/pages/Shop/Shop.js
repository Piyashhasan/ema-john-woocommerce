import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import {
  addToDb,
  deleteShoppingCart,
  getCartProductItem,
} from "../../utilities/fakedb";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PageTitle from "../../reusable-components/PageTitle/PageTitle";

const Shop = () => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------

  // **** products load from custom hooks - useProducts ****
  const [products] = useProducts();
  const [cart, setCart] = useState([]);

  // **** load data from local storage ****
  useEffect(() => {
    const storageCartValue = getCartProductItem();
    const savedCart = [];
    for (const id in storageCartValue) {
      const matchProductId = products.find((product) => product.id === id);
      if (matchProductId) {
        const quantity = storageCartValue[id];
        matchProductId.quantity = quantity;
        savedCart.push(matchProductId);
      }
      setCart(savedCart);
    }
  }, [products]);

  // **** add to cart product - handler ****
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  // **** clear cart - handeler ****
  const clearCartHandler = () => {
    deleteShoppingCart();
    setCart([]);
  };
  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="shop_container container-fluid ">
      <PageTitle title={"Shop"}></PageTitle>
      <div className="row">
        <div className="col-md-9 py-5">
          <div className="row">
            {products.map((product) => (
              <Products
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Products>
            ))}
          </div>
        </div>
        <div className="col-md-3 cart">
          <Cart cart={cart} clearCartHandler={clearCartHandler}>
            <Link to="/order" className="btn w-75 review_order_btn">
              Review Order{" "}
              <FontAwesomeIcon icon={faArrowRight} className="trashIcon" />
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
