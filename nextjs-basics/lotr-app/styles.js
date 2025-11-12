import { createGlobalStyle } from "styled-components";
import { Lora } from "next/font/google";
const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
html, body, #__next {
  height: 100%;
}

  body {
    margin: 0;
    font-family: ${lora.style.fontFamily}, serif;
    background-color: #d8cbb3;
  }
  #__next {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
