import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1",
      name: "Apple",
      color: "red",
    },
    {
      id: "2",
      name: "Pear",
      color: "green",
    },
    {
      id: "3",
      name: "Tomato",
      color: "red",
    },
    {
      id: "4",
      name: "Strawberry",
      color: "red",
    },
    {
      id: "5",
      name: "Blackberries",
      color: "dark purple",
    },
  ];
  return fruits.map((fruit) => (
    <div key={fruit.id} className="app">
      <Card id={fruit.id} name={fruit.name} color={fruit.color} />
    </div>
  ));
}
