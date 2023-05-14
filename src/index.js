import React from "react";
import ReactDomClient from "react-dom/client";
import Router from "./Router";
import GlobalStlye from "./styles/Global";

const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);

root.render(
  <React.StrictMode>
    <GlobalStlye />
    <Router />
  </React.StrictMode>
);
