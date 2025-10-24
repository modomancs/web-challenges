export default function App() {
  function handleClick() {
    console.log("Dont click so hard");
    alert("Dont click so hard");
  }

  return (
    <div>
      <Button color="black" text="Click Me Bro" onClick={handleClick} />
      <Button color="gray" disabled={true} text="Dont Click" />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled} style={{ color }}>
        {text}
      </button>
    </>
  );
}
