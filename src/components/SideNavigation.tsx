import { Component, For } from "solid-js";
import NavigationMenu, { Navigation } from "./NavigationMenu";

const menu: Navigation[] = [
  {
    label: 'HTML'
  },
  {
    label: 'CSS'
  },
  {
    label: "JavaScript",
    subPaths: [
      {
        label: "Какво е  JavaScript",
        path: "javascript/intro",
      }
    ],
  },
  {
    label: 'Arduino'
  },
];

const SideNavigation: Component = () => (
  <div id="side-nav">
    <For each={menu}>
      {(navigation) => (
        <NavigationMenu
          label={navigation.label}
          path={navigation.path}
          subPaths={navigation.subPaths}
        ></NavigationMenu>
      )}
    </For>
  </div>
);

export default SideNavigation;
