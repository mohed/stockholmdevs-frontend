import { createTheme } from "@mui/material";
import green from "@mui/material/colors/green";
import purple from "@mui/material/colors/purple";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default: "#282c34",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
