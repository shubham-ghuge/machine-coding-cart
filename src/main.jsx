import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./contexts/CartContext";
import DataContextProvider from "./contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <CartContextProvider>
        <Router>
          <App />
        </Router>
      </CartContextProvider>
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
