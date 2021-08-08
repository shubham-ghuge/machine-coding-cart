import React from "react";
import { useDataContext } from "../../../contexts/DataContext";

function Card({ details }) {
  const { id, name, price, discount } = details;
  const { dispatch } = useDataContext();

  function cartHandler() {
    dispatch({ type: "ADD_TO_CART", payload: id });
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{discount}</p>
      {details.isInCart ? (
        <>
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: { id, quantity: details.quantity + 1 },
              })
            }
          >
            +
          </button>
          {details.quantity}
          <button
            onClick={() =>
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: { id, quantity: details.quantity - 1 },
              })
            }
          >
            -
          </button>
        </>
      ) : (
        <button onClick={cartHandler}>Add to cart</button>
      )}
    </div>
  );
}
export { Card };
