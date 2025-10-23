import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">This is too easy</h2>
      <label htmlFor="test"></label>
      <input id="test"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(software)"
        alt="React"
      >
        Wikipedia
      </a>
    </article>
  );
}
