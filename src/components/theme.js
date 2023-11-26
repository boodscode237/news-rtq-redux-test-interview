import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#F44336",
    },
    background: {
      paper: "#F5F5F5",
      default: "#878787",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#878787",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#03a9f4",
    },
    success: {
      main: "#4caf50",
    },
    common: {},
  },
  typography: {},
  overrides: {},
});

export default theme;
