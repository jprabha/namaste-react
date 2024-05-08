import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>I'm an h1 tag (Child 1)</h1>
 *      <h2>I'm an h2 tag (Child 1)</h1>
 *  </div>
 *  <div id="child2">
 *      <h1>I'm an h1 tag (Child 2)</h1>
 *      <h2>I'm an h2 tag (Child 2)</h1>
 *  </div>
 * </div>
 */

// const heading = React.createElement(
//   "h1",
//   { id: "react-heading" },
//   "Hello World from React! (External script file)"
// );

const nestedElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag (Child 1)"),
    React.createElement("h2", {}, "I'm an h2 tag (Child 1)"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag (Child 2)"),
    React.createElement("h2", {}, "I'm an h2 tag (Child 2)"),
  ]),
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(nestedElement);
