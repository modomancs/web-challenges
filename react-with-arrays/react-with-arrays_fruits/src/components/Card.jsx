import "./Card.css";

export default function Card({ id, name, color }) {
  return (
    <p className="card">
      ID:{id}, Name: {name}, Color: {color}
    </p>
  );
}
