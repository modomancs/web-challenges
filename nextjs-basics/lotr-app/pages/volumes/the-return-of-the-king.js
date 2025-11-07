import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  const thirdVolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{thirdVolume.title}</h1>
      <p>{thirdVolume.description}</p>
      <ul>
        {thirdVolume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <div>
        <Image
          src="/images/the-return-of-the-king.png"
          alt="The Return of the King"
          width={140}
          height={230}
        />
      </div>
      <Link href="/volumes/the-two-towers">Previous Volume</Link>
      <br />
      <Link href="" hidden>
        Next Volume
      </Link>
    </div>
  );
}
