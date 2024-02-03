import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Creating a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#02a06b",
    },
    secondary: {
      main: "#5dce9c",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
