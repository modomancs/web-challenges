import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [value, setValue] = useState(0);
  function incrementPlus() {
    setValue(value + 1);
  }
  function minus() {
    setValue(value - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={incrementPlus}
        >
          +
        </button>
        <button
          onClick={minus}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
