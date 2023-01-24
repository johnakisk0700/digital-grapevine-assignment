import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./loader.css";
import "react-virtualized/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
