import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/header.css";
import "./styles/cotizacion.css";
import "./styles/inicio.css";
import "./styles/servicios.css";
import "./styles/acerca.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
