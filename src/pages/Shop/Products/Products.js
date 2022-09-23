import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Products = ({ product, handleAddToCart }) => {
  // ---------------------------------------
  // =============== JS AREA ===============
  // ---------------------------------------
  const { img, name, price, seller, ratings } = product;

  // **** cut the porducts name length ****
  const trimmedName =
    name.length > 20 ? name.substring(0, 17) + " ....." : name;

  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="products_container col-md-4 px-4">
      <Card className="product_item">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{trimmedName}</Card.Title>
          <Card.Text>Price : $ {price}</Card.Text>
          <Card.Text className="mt-4">
            <small>Manufacturer : {seller}</small>
          </Card.Text>
          <Card.Text>
            <small>Rating : {ratings} start</small>
          </Card.Text>
          <Button
            onClick={() => handleAddToCart(product)}
            className="w-100 mt-3 add_to_cart_btn"
          >
            Add to Cart{" "}
            <FontAwesomeIcon icon={faCartPlus} className="trashIcon" />
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
