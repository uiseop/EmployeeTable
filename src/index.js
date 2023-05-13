import React from "react";
import ReactDomClient from "react-dom/client";
import Router from "./Router";

const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
