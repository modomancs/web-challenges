import { useState } from "react";
import { useEffect } from "react";

export default function useMouse() {
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  useEffect(() => {
    function handleMouseMove(event) {
      setCursorPosition([event.clientX, event.clientY]);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return cursorPosition;
}
