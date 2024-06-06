import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      dark: "#164863",
      main: "#427D9D",
      light: "#9BBEC8",
    },
    error: {
      dark: "#4A0100",
      main: "#FD4659",
      light: "#FDB0C0",
    },
  },
});
