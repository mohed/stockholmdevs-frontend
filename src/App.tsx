import { Container, ThemeProvider } from "@mui/material";

import { theme } from "./globalStyle";
import { LandingPage } from "./LandingPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          background: theme.palette.background.default,
          color: "white",
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LandingPage />
      </Container>
    </ThemeProvider>
  );
};

export default App;
