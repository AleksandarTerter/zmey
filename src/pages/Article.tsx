import { Component, For, Show } from "solid-js";

import CodeViewer from "../components/CodeViewer";
import { TypedInterface } from "../abstractions/TypedInterface";

export interface Code extends TypedInterface {
  type: "code";
  value: string;
}

export interface Text extends TypedInterface {
  type: "text";
  value: string;
}

export interface SubTopic {
  header: string;
  data: (Text | Code)[];
}

export interface ArticleProps {
  header: string;
  subTopics: SubTopic[];
}

const Article: Component<ArticleProps> = (props: ArticleProps) => (
  <article>
    <h2>{props.header}</h2>
    <For each={props.subTopics}>
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
