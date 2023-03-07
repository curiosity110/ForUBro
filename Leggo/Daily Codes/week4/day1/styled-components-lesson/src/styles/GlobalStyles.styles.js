import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: ${props => props.theme.bgPrimary}
   }
`;

export const theme = {
  bgPrimary: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
  bgSecondary: "#302b63",
  text: "#ffff",
};
