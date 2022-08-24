import { Component } from "solid-js";
import Prism from "prismjs";

export enum CodeType {
  js,
  css,
  html
}

interface CodeViewerProp {
  code: string;
  type?: CodeType;
}

export const getGrammer = (codeType: CodeType | undefined): Prism.Grammar => {
  switch (codeType) {
    case CodeType.css:
      return Prism.languages.css;
    case CodeType.html:
      return Prism.languages.html;
    case CodeType.js:
    default:
      return Prism.languages.javascript;
  }
};

const CodeViewer: Component<CodeViewerProp> = (prop: CodeViewerProp) => {
  const highlightedHtml: string = Prism.highlight(
    prop.code,
    getGrammer(prop.type),
    "javascript"
  );

  return (
    <pre>
      <code innerHTML={highlightedHtml}></code>
    </pre>
  );
};

export default CodeViewer;
