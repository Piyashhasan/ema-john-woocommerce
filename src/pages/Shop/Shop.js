import React from "react";
import useProducts from "../../hooks/useProducts";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";
import "./Shop.css";

const Shop = () => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------

  // **** products load from custom hooks - useProducts ****
  const [products] = useProducts();

  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="shop_container container-fluid ">
      <div className="row">
        <div className="col-md-9 py-5">
          <div className="row">
            {products.map((product) => (
              <Products key={product.id} product={product}></Products>
            ))}
          </div>
        </div>
        <div className="col-md-3 cart">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
