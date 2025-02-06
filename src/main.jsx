import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme.js";
import App from "./App.jsx";
import { CssBaseline, GlobalStyles } from "@mui/material";
import SnackbarContextProvider from "./context/SnackbarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarContextProvider>
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: { scrollBehavior: "smooth" },
          }}
        />
        <App />
      </SnackbarContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
