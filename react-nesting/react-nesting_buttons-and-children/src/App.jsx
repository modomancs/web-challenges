import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button text="click me"></Button>
      <Button text="no dont click"></Button>
      <Button text="hellyea brother click"></Button>
      <Button text="me too:("></Button>
    </main>
  );
}

function Button({ children, text }) {
  return (
    <button className="button" type="button">
      {children} {text}
    </button>
  );
}
