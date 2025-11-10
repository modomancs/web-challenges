import StyledDiv from "@/components/BoxWIthStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  const DivFlex = styled.div`
    display: flex;
    justify-content: center;
  `;

  return (
    <DivFlex>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledDiv />
      <StyledDiv $isBlack />
    </DivFlex>
  );
}
