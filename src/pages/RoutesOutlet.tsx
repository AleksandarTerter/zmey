import { Route, Routes } from "@solidjs/router";

import { Component, For } from "solid-js";
import { Topic } from "../abstractions/Topic";
import { topics } from "../data/topics";
import Article from "./Article";
import Home from "./Home";
import Program from "./Program";

function GenerateTopicRoutes(topic: Topic) {
  return <Route path={`/${topic.path}`}>
    <Route path='/' element={<Article {...topic.content} />}></Route>
    <For each={topic.subTopics}>
      {(subTopic) => GenerateTopicRoutes(subTopic)}
    </For>
  </Route>;
}

const RoutesOutlet: Component = () => (
  <div id="routes-outlet" class="container">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/program" element={<Program />} />
      <For each={topics}>
        {(topic) => GenerateTopicRoutes(topic)}
      </For>
    </Routes>
  </div>
);

export default RoutesOutlet;
