import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { ProductListing } from "../Product";
import { Cart } from "../Cart";
import "./App.css";
import data from "../../data/products.json";
import { useDataContext } from "../../contexts/DataContext";
import { NavLink } from "react-router-dom";
import { Wishlist } from "../Wishlist";

function App() {
  const { dispatch } = useDataContext();

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
  }, []);

  return (
    <div className="App">
      <nav className="d-flex jc-center ai-center bgc-base-100 fsz-2 h-10">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart" className="ml-4">
          Cart
        </NavLink>
        <NavLink to="/wishlist" className="ml-4">
          Wishlist
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
