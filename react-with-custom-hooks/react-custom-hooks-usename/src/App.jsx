import useName from "./hooks/useName";
import "./styles.css";

export default function App() {
  const [fullName, firstName, secondName, setFirstName, setSecondName] =
    useName();
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="last name"
          value={secondName}
          onChange={(event) => setSecondName(event.target.value)}
        />
      </form>
      <h2>The full name:</h2>
      <output>{fullName}</output>
    </>
  );
}
