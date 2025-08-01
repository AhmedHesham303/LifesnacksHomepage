import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
