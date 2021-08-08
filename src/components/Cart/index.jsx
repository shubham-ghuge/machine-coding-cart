import React from "react";
import { useDataContext } from "../../contexts/DataContext";

function Cart() {
  const { cartData } = useDataContext();
  return (
    cartData.length !== 0 &&
    cartData.map((i, idx) => (
      <div key={idx}>
        <p>{i.id}</p>
        <p>{i.quantity}</p>
      </div>
    ))
  );
}
export { Cart };
