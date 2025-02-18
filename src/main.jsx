import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ScrollToTop } from "./components/index.js";
import { FilterProvider } from "./contexts/FilterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <FilterProvider>
      <ScrollToTop/>
      <App />
      </FilterProvider>
    </Router>
  </StrictMode>
);
