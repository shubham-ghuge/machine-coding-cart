import React from "react";
import { useDataContext } from "../../../contexts/DataContext";
import { Quantity } from "./Quantity";

function Card({ details }) {
  const { id, name, image, price, discount, actualPrice } = details;
  const { dispatch } = useDataContext();

  function cartHandler() {
    dispatch({ type: "ADD_TO_CART", payload: id });
  }

  return (
    <div className="grocery-card">
      <div className="card-thumbnail">
        <img style={{ objectPosition: "top" }} src={image} alt="" />
      </div>
      <div className="card-details">
        <h4 className="fw-500">{name}</h4>
        <div className="d-flex">
          <p>₹{actualPrice}.00</p>
          <p className="strike">₹{price}</p>
        </div>
      </div>
      <span className="badge-rect-danger">{discount}% Off</span>
      {details.isInCart ? (
        <Quantity id={id} quantity={details.quantity} />
      ) : (
        <button className="btn-primary" onClick={cartHandler}>
          Add to cart
        </button>
      )}
    </div>
  );
}
export { Card };
