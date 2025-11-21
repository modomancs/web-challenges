import useSWR from "swr";

export default function HomePage() {
  const { data } = useSWR("/api/random-character");
  if (!data) {
    return <h1>No data has been found</h1>;
  }
  return (
    <>
      <h2>
        {data.firstName}, {data.lastName}
      </h2>
      <p>
        {data.twitter}, {data.geohash}
      </p>
    </>
  );
}
