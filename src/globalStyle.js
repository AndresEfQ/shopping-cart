import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
  }

  :root {
    --yellow: #ffbe0b;
    --orange: #fb5607;
    --pink: #ff006e;
    --purple: #8338ec;
    --blue: #3a86ff;
  }

`;