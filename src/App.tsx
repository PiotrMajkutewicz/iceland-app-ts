import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ClippedDrawer from "./components/Toolbar/Toolbar";
import { Box, Container } from "@mui/material";
import AppRoutes from "./Routes";
import { ThemeProvider } from "context/ThemeContext";

function App() {  
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ClippedDrawer appName="Iceland App" />
        <Box
          component="main"
          sx={{ display: "flex", flexGrow: 1, pt: 8, pl: 30 }}
        >
          <Container
            sx={{
              position: "relative",
              height: "calc(100vh - 64px)",
              py: "2em",
            }}
          >
            <AppRoutes />
          </Container>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
