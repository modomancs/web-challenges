import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`
  );
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
