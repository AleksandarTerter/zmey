import { Route, Routes } from "solid-app-router";

import Article from "./Article";
import { Component } from "solid-js";
import Home from "./Home";
import Program from "./Program";
import { intro } from "../data/JavaScript/variables";

const RoutesOutlet: Component = () => (
  <div id="routes-outlet" class="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/program" element={<Program />} />
      <Route path="/javascript/intro" element={<Article {...intro} />} />
    </Routes>
  </div>
);

export default RoutesOutlet;
