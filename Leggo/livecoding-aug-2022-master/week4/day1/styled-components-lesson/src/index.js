import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/GlobalStyles.styles";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
