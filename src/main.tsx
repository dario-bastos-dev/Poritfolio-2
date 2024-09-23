import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Principal component
import App from "./App.tsx";
// Theme
import { ThemeProvider } from "styled-components";
import theme from "./ui/themes/Theme.tsx";
import GlobalStyle from "./ui/themes/GlobalStyle.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
);
