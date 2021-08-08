import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { ProductListing } from "../Product";
import { Cart } from "../Cart";
import "./App.css";
import data from "../../data/products.json";
import { useDataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";

function App() {
  const { dispatch } = useDataContext();

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, []);
  
  return (
    <div className="App">
      <nav>
        <Link to="/cart">Cart</Link>
        {"   "}
        <Link to="/">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
