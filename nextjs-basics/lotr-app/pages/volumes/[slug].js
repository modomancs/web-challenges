import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.$background};
  color: white;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const StyledImage = styled(Image)`
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 20px;
  a {
    display: flex;
    color: white;
    text-decoration: none;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const StyledAllVolumesLink = styled(Link)`
  align-self: flex-start;
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  font-weight: 600;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  &:hover {
    opacity: 0.8;
    transform: translateX(-3px);
  }
  &::before {
    content: "←";
    font-size: 18px;
  }
`;
const StyledBookList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  text-align: left;
  display: inline-block;
`;

const StyledBookItem = styled.li`
  margin: 6px 0;
  font-size: 1.1rem;
`;

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
    <StyledDiv $background={currentVolume.color}>
      <StyledAllVolumesLink href="/">All Volumes</StyledAllVolumesLink>
      <h1>{title}</h1>
      <p>{description}</p>
      <StyledBookList>
        {books.map((book) => (
          <StyledBookItem key={book.ordinal}>
            {book.ordinal}: {book.title}
          </StyledBookItem>
        ))}
      </StyledBookList>

      <StyledImage src={cover} alt={title} width={140} height={230} />
      <StyledNav>
        <Link href={`/volumes/${previousVolume?.slug}`}>
          <Image
            src="/images/arrow.png"
            alt="PreviousBook"
            width={45}
            height={35}
          />
          Previous Volume
        </Link>

        <Link href={`/volumes/${nextVolume?.slug}`}>
          Next Volume
          <Image
            src="/images/right.png"
            alt="nextBook"
            width={45}
            height={35}
          />
        </Link>
      </StyledNav>
    </StyledDiv>
  );
}
