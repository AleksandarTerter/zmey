import { Component, For, Show } from "solid-js";

import { TypedInterface } from "../abstractions/TypedInterface";
import CodeViewer from "../components/CodeViewer";

export interface Code extends TypedInterface {
  type: "code";
  value: string;
}

export interface Text extends TypedInterface {
  type: "text";
  value: string;
}

export interface Resource {
  header: string;
  data: (Text | Code)[];
}

export interface Content {
  header: string;
  resource: Resource[];
}

const Article: Component<Content> = (props: Content) => (
  <article>
    <h2>{props.header}</h2>
    <For each={props.resource}>
      {(subTopic) => (
        <>
          <h3>{subTopic.header}</h3>
          <For each={subTopic.data}>
            {(data) => (
              <>
                <Show when={data.type === "code"}>
                  <CodeViewer code={data.value} />
                </Show>
                <Show when={data.type === "text"}>
                  <p>{data.value}</p>
                </Show>
              </>
            )}
          </For>
        </>
      )}
    </For>
  </article>
);

export default Article;
