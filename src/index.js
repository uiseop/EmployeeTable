import React from "react";
import ReactDomClient from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDomClient.createRoot(container);

root.render(
  <React.StrictMode>
    <h1>Hello, React!</h1>
  </React.StrictMode>
);
