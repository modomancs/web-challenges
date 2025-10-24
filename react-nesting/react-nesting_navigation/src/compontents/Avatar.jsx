export default function Avatar({ src, alt }) {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <img className="round-image" src={src} alt={alt} />
    </button>
  );
}
