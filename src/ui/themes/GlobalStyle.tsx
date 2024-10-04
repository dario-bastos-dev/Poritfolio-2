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
      color: ${({ theme }) => theme.colors.textWhite};

      h2 {
      letter-spacing: 10px !important;
      font-size: ${({ theme }) => theme.fontSize.title} !important;

    }

    h2,
    h3,
    h4 {
      font-family: ${({ theme }) => theme.font.ubunto};
      font-size: ${({ theme }) => theme.fontSize.button};
      margin: 0 0 5px 0;
      text-transform: uppercase;
      letter-spacing: 2px;
   }

   p {
        font-family: ${({ theme }) => theme.font.openSans};
        font-size: ${({ theme }) => theme.fontSize.text};
      }
   
   ul {
     list-style: none;
   }
   
   a {
      text-decoration: none; 
   }
}
`;

export default GlobalStyle;
