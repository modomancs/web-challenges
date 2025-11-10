import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  width: 100px;
  height: 100px;
  margin: 2rem;
  &:hover {
    background-color: red;
  }
`;

export default StyledDiv;
