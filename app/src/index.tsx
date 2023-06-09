import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Main/>
    </BrowserRouter>
  </React.StrictMode>
);
