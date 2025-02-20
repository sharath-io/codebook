import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import "./index.css";
import App from "./App.jsx";
import { ScrollToTop } from "./components/index.js";
import { FilterProvider } from "./contexts/FilterContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CartProvider>
      <FilterProvider>
      <ScrollToTop/>
      <ToastContainer/>
      <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
