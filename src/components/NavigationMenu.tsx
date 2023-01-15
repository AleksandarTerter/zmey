import { Component, createSignal, For, Show } from "solid-js";

import { A } from "@solidjs/router";
import { Topic } from "../abstractions/Topic";

type NigationForTopic = Partial<Topic & {
  parentPath: string;
}>;

const NavigationMenu: Component<NigationForTopic> = (prop: NigationForTopic) => {
  const showLink = (): boolean => !prop.subTopics?.length;
  const [collapsed, setCollapsed] = createSignal(!showLink());
  const currentPath = prop.parentPath ? `${prop.parentPath}/${prop.path}` : `${prop.path}`;

  return (
    <div class={`accordion ${collapsed() ? "collapsed" : ""}`}>
      <Show when={showLink()}>
        <A href={currentPath}>{prop.label}</A>
      </Show>

      <Show when={!showLink()}>
        <span onClick={() => setCollapsed(!collapsed())}>{prop.label}</span>
        <div class="sub-menu">
          <For each={prop.subTopics}>
            {(subMenu) => (
              <NavigationMenu
                label={subMenu.label}
                path={subMenu.path}
                subTopics={subMenu.subTopics}
                parentPath={currentPath}
              ></NavigationMenu>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default NavigationMenu;
