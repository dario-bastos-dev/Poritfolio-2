import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   .container {
      max-width: 1280px;
      max-height: 100vh;
      margin: 0 auto;
   }
   
   ul {
     list-style: none;
   }
   
   a {
      text-decoration: none; 
   }
`;

export default GlobalStyle;
