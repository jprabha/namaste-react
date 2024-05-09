import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="title">Namaste React from JSX 🚀</h1>;

const Header = () => (
  <div id="header">
    <Title />
    <h1>Header Component of React</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
