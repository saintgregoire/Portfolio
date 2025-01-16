import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme.js";
import App from "./App.jsx";
import { CssBaseline, GlobalStyles } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{
        html: {scrollBehavior: 'smooth'},
      }} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
