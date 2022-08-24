import { Component, createSignal } from "solid-js";

import { allQuotes } from "../data/quotes";
import { svgs } from "../assets/svgs";

export interface Quote {
  quote: string;
  source: string;
  tag?: string[];
}

const QuoteViewer: Component = () => {
  let quoteId = 0;
  const [quote, setQuote] = createSignal<Quote>(allQuotes[quoteId]);
  const chageQuote = () => {
    quoteId++;
    setQuote(allQuotes[quoteId % allQuotes.length]);
  };
  setInterval(chageQuote, 40 * 1000);

  return (
    <blockquote class="quote">
      {svgs.quote}
      <p>{quote().quote}</p>
      <footer>"{quote().source}"</footer>
    </blockquote>
  );
};

export default QuoteViewer;
