import { A } from "@solidjs/router";
import { Component } from "solid-js";

import { svgs } from "../assets/svgs";
import ThemePicker from "./ThemePicker";

const Header: Component = () => (
  <header>
    <span class="logo">
      {svgs.dragon}
      <span>Змей</span>
    </span>
    <nav>
      <A href="/home" end>
        Змей
      </A>
      <A href="/program">Програма</A>
    </nav>
    <ThemePicker />
  </header>
);

export default Header;
