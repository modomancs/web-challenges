import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
export default function TheFellowshipOfTheRing() {
  const firstVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{firstVolume.title}</h1>
      <p>{firstVolume.description}</p>
      <ul>
        {firstVolume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <div>
        <Image
          src="/images/the-fellowship-of-the-ring.png"
          alt="The Fellowship of the Ring"
          width={140}
          height={230}
        />
      </div>
      <Link hidden href="">
        Previous Volume
      </Link>
      <br />
      <Link href="/volumes/the-two-towers">Next Volume</Link>
    </div>
  );
}
