// Dependancies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Internals
import "./style/index.css";
import App from "./App";
import SingleMovie from "./components/SingleMovie";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
