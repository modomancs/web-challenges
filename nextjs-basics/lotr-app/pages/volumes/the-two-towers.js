import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function TheTwoTowers() {
  const secondVolume = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{secondVolume.title}</h1>
      <p>{secondVolume.description}</p>
      <ul>
        {secondVolume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <div>
        <Image
          src="/images/the-two-towers.png"
          alt="The two towers"
          width={140}
          height={230}
        />
      </div>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </div>
  );
}
