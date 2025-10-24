function Greeting({ name, isCoach }) {
  return (
    <div>
      {isCoach ? "Hello Coach !" : "Hello, " + name + "!"}
      {""}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Greeting name="Stathis" isCoach={false} />
      <Greeting isCoach={true} />
    </div>
  );
}
