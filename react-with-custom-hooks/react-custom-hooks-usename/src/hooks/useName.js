import { useState } from "react";

export default function useName() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const fullName = `${firstName} ${secondName}`;
  return [fullName, firstName, secondName, setFirstName, setSecondName];
}
