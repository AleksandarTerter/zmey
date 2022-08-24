import { Component, For, Show, createSignal } from "solid-js";

import { NavLink } from "solid-app-router";

export interface Navigation {
  label?: string;
  path?: string;
  subPaths?: Navigation[];
}

const NavigationMenu: Component<Navigation> = (prop: Navigation) => {
  const showLink = (): boolean => !!(prop.path && prop.label);
  const [collapsed, setCollapsed] = createSignal(!showLink());

  return (
    <div class={`accordion ${collapsed() ? "collapsed" : ""}`}>
      <Show when={showLink()}>
        <NavLink href={`/${prop.path}`}>{prop.label}</NavLink>
      </Show>

      <Show when={!showLink()}>
        <span onClick={() => setCollapsed(!collapsed())}>{prop.label}</span>
        <div class="sub-menu">
          <For each={prop.subPaths}>
            {(subMenu) => (
              <NavigationMenu
                label={subMenu.label}
                path={subMenu.path}
                subPaths={subMenu.subPaths}
              ></NavigationMenu>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default NavigationMenu;
