import React from "react";
import { useDataContext } from "../../contexts/DataContext";
import { Card } from "./components";

function ProductListing() {
  const { data } = useDataContext();
  return (
    <div className="flex-layout jc-center ai-center">
      {data && data.map((i, idx) => <Card details={i} key={idx} />)}
    </div>
  );
}
export { ProductListing };
