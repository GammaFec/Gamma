import { createGlobalStyle } from "styled-components";
import { theme } from "./variables";

//global styles
const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: ${theme.fontPrimary};
}
`;

export default GlobalStyle;
