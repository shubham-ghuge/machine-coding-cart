import React from "react";
import { useDataContext } from "../../../contexts/DataContext";

function Quantity({ id, quantity }) {
  const { dispatch } = useDataContext();
  return (
    <div className="d-flex ai-center jc-space-around">
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id, quantity: quantity - 1 },
          })
        }
        className="btn-primary"
      >
        -
      </button>
      <p className="fsz-2 fw-600">{quantity}</p>
      <button
        onClick={() =>
          dispatch({
            type: "UPDATE_QUANTITY",
            payload: { id, quantity: quantity + 1 },
          })
        }
        className="btn-primary fw-600"
      >
        +
      </button>
    </div>
  );
}
export { Quantity };
