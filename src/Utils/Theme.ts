import { createTheme, ThemeOptions } from "@mui/material/styles";
// A custom theme for this app

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#349DAC",
      contrastText: "#fff",
      light: "#f4f4f4",
    },
    secondary: {
      main: "#fff",
    },
    success: {
      main: "#ff7f7f",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
};
const theme = createTheme(themeOptions);

export default theme;
