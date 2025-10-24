export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? "Smileeeeeeeee:)" : "why sad bro:("}</div>;
}
