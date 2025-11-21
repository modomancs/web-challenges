import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/products/${id}`);
  if (!data) {
    return <h1>No data has been found</h1>;
  }
  return (
    <div>
      <p>{data.id}</p>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <p>
        {data.price}
        {data.currency}
      </p>
      <small>{data.category}</small>
    </div>
  );
}
