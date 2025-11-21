import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("/api/products");
  if (!data) {
    return <h1>No data has been found</h1>;
  }
  return (
    <div>
      <h1>Welcome to Next.js API Routes!</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <p>{product.id}</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              {product.price}
              {product.currency}
            </p>
            <small>{product.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
