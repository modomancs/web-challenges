import "./styles.css";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  function handlePlus() {
    setCount(count + 1);
  }
  function handleMinus() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleMinus}>
          -
        </button>
        <button type="button" onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  );
}
