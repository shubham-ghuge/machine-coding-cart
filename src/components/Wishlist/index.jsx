import React from "react";
import { useDataContext } from "../../contexts/DataContext";
import { Card } from "../Product/components";

function Wishlist() {
  const { wishlistData, data } = useDataContext();
  const productsInWishlist = data.filter((i) => wishlistData.includes(i.id));

  return (
    <div className="mt-7">
      <h2 className="text-center">Wishlist</h2>
      {productsInWishlist &&
        productsInWishlist.map((i, idx) => <Card details={i} key={idx} />)}
    </div>
  );
}
export { Wishlist };
