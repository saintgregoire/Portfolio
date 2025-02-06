import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme.js";
import App from "./App.jsx";
import { CssBaseline, GlobalStyles } from "@mui/material";
import SnackbarContextProvider from "./context/SnackbarContext.jsx";
import DialogContextProvider from "./context/DialogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarContextProvider>
        <DialogContextProvider>
          <CssBaseline />
          <GlobalStyles
            styles={{
              html: { scrollBehavior: "smooth" },
            }}
          />
          <App />
        </DialogContextProvider>
      </SnackbarContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
