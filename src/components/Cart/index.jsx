import React from "react";
import { useDataContext } from "../../contexts/DataContext";
import { Quantity } from "../Product/components";

function Cart() {
  const { cartData, data, dispatch } = useDataContext();
  const cartProducts = data.filter((product) => cartData.includes(product.id));

  return cartData.length !== 0 ? (
    <div className="cart-layout mt-7">
      <div className="cart">
        <div className="cart-heading">
          <h3>product</h3>
          <h3>quantity</h3>
          <h3>price</h3>
        </div>
        {cartProducts.map(
          (
            {
              isInCart,
              quantity,
              id,
              name,
              image,
              price,
              actualPrice,
              discount,
              isInBag = false,
            },
            idx
          ) =>
            isInCart && (
              <div className="product-card" key={idx}>
                <div className="product-details">
                  <img src={image} alt="" className="product-img" />
                  <div className="wrapper">
                    <h3 className="product-title">{name}</h3>
                    <h4 className="product-price">
                      ₹{actualPrice}.00
                      <span className="strike">₹ {price}.00</span>
                    </h4>
                    <h4 className="product-discount">Discount: {discount}</h4>
                    <div className="d-flex ai-center mt-2">
                      {isInBag ? (
                        <button className="btn-success">Saved</button>
                      ) : (
                        <button
                          className="btn-success"
                          onClick={() =>
                            dispatch({
                              type: "TOGGLE_WISHLIST",
                              payload: { id, status: true },
                            })
                          }
                        >
                          Save Later
                        </button>
                      )}

                      <button
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: id, quantity: 0 },
                          })
                        }
                        className="btn-danger ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="quantity">
                  <Quantity id={id} quantity={quantity} />
                </div>
                <h3 className="final-price">₹{quantity * actualPrice}.00</h3>
              </div>
            )
        )}
      </div>
      <div className="checkout">
        <h2>checkout</h2>
        <div className="wrapper">
          <div className="muted">Total Payable</div>
          <h2>₹ {cartProducts.reduce((acc, i) => acc + i.price, 0)}.00</h2>
        </div>
      </div>
    </div>
  ) : (
    <h2 className="text-center mt-7 fsz-3">No Products in your cart</h2>
  );
}
export { Cart };
