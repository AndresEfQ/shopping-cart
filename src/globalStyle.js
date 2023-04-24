import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    user-select: none;
  }

  :root {
    --main: rgb(207,5,179);
    --secondary: rgba(27,0,65,1);
    --secondary-op60: rgb(47, 13, 68, 0.6);
    --secondary-op90: rgb(47, 13, 68, 0.9);
    --grey: rgb(119, 119, 119);
    --grey-op70: rgba(200, 200, 200, 0.7);
    --op50: rgba(255,255,255,0.5);
    --op80: rgba(255,255,255,0.8);
    --op90: rgba(255,255,255,0.9);
  }
`;