import React from "react";
import "./ReviewItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = ({ product, handleRemoveProduct }) => {
  const { name, price, shipping, img, quantity } = product;
  const trimmedName =
    name.length > 20 ? name.substring(0, 17) + " ....." : name;
  return (
    <div className="review_container mb-3">
      <div className="row border review_main mx-auto">
        <div className="col-md-8 review_img_text">
          <div className="review_product_img">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="review_text">
            <p>{trimmedName}</p>
            <p>
              {" "}
              <small>
                Price : <span>{price}</span>{" "}
              </small>{" "}
            </p>
            <p>
              {" "}
              <small>
                Shipping Charge: <span>${shipping}</span>{" "}
              </small>{" "}
            </p>
            <p>
              {" "}
              <small>
                Quantity: <span>{quantity}</span>{" "}
              </small>{" "}
            </p>
          </div>
        </div>
        <div className="col-md-4 ">
          <button
            onClick={() => handleRemoveProduct(product)}
            className="btn review_delete-btn"
          >
            <FontAwesomeIcon icon={faTrashCan} className="trashIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItems;
