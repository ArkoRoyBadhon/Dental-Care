import "./App.css";
import { theme } from "./Theme/theme";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "@mui/material";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />;
    </ThemeProvider>
  );
}

export default App;
