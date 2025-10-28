import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
    const addNewAnimal = {
      id: crypto.randomUUID(),
      name: newAnimal.name,
      emoji: newAnimal.emoji,
    };
    const newAddAnimal = [...animals, addNewAnimal];
    setAnimals(newAddAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
