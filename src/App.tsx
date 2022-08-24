import type { Component } from "solid-js";
import Header from "./components/Header";
import QuoteViewer from "./components/QuoteViewer";
import RoutesOutlet from "./pages/RoutesOutlet";
import SideNavigation from "./components/SideNavigation";

const App: Component = () => (
  <>
    <Header />
    <QuoteViewer />
    <SideNavigation/>
    <RoutesOutlet />
  </>
);

export default App;
