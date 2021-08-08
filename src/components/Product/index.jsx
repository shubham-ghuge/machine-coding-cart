import React from "react";
import { useDataContext } from "../../contexts/DataContext";
import { Card } from "./components";

function ProductListing() {
  const { data } = useDataContext();
  return <>{data && data.map((i, idx) => <Card details={i} key={idx} />)}</>;
}
export { ProductListing };
