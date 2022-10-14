import { createGlobalStyle } from "styled-components";
import { colorsPalette } from "styles";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  font-family: "Helvetica Neue";
  font-size: 14px;
}
body{
  background-color: ${colorsPalette.gray[200]};
}
`;

export default GlobalStyle;
