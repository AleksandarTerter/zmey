import { Component, For } from "solid-js";
import { topics } from "../data/topics";
import NavigationMenu from "./NavigationMenu";

const SideNavigation: Component = () => (
  <div id="side-nav">
    <For each={topics}>
      {(topic) => (
        <NavigationMenu
          label={topic.label}
          path={topic.path}
          subTopics={topic.subTopics}
        ></NavigationMenu>
      )}
    </For>
  </div>
);

export default SideNavigation;
