import { useState } from "react";

export default function useChronicle(initialValue) {
  const [timeline, setTimeline] = useState([initialValue]);

  function setState(newValue) {
    setTimeline((prevTimeline) => [...prevTimeline, newValue]);
  }
  function resetState() {
    setTimeline((prevTimeline) => {
      if (prevTimeline.length >= 2) {
        return prevTimeline.slice(0, -1);
      } else {
        return prevTimeline;
      }
    });
  }
  const currentValue = timeline.at(-1);
  return [currentValue, setState, resetState];
}
