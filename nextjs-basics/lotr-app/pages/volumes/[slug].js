import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentVolume = volumes.find((volume) => volume.slug === slug);
  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextIndex = currentIndex + 1;
  const nextVolume = volumes[nextIndex];
  const previousIndex = currentIndex - 1;
  const previousVolume = volumes[previousIndex];
  if (!currentVolume) {
    return <h1>No movie with slug {slug} has been found</h1>;
  }
  const { title, description, books, cover } = currentVolume;
  return (
    <div>
      <Link href="/">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <div>
        <Image src={cover} alt={title} width={140} height={230} />
      </div>
      <Link href={`/volumes/${previousVolume?.slug}`}>Previous Volume</Link>
      <br />
      <Link href={`/volumes/${nextVolume?.slug}`}>Next Volume</Link>
    </div>
  );
}
