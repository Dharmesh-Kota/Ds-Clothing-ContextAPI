import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import CartProvider from "./providers/cart/cart.provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
      <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.StrictMode>
  </CartProvider>
);