import { introduction } from "@/resources/lib/data";
import Link from "next/link";

import { volumes } from "@/resources/lib/data";
import styled from "styled-components";
import Image from "next/image";

export default function HomePage() {
  const StyledDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `;
  const VolumeList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    gap: 80px;
    padding: 0;
    margin-top: 20px;
  `;
  const StyledVolumeLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    list-style: none;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: black;
      left: 0;
    }
    img {
      border-radius: 8px;
      box-shadow: 15px 10px 16px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    a:hover img {
      transform: scale(1.05);
      box-shadow: 20px 15px 20px rgba(0, 0, 0, 0.2);
    }
  `;

  return (
    <StyledDiv>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <VolumeList>
        {volumes.map((volume) => (
          <StyledVolumeLi key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              <Image src={volume.cover} alt="Cover" width={200} height={300} />
              {volume.title}
            </Link>
          </StyledVolumeLi>
        ))}
      </VolumeList>
    </StyledDiv>
  );
}
