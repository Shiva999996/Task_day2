import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import getTheme from "./theme";

import Header from "./components/Header";
import HeaderFeatures from "./components/HeaderFeatures";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Personalized from "./components/Personalized";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () => getTheme(darkMode ? "dark" : "light"),
    [darkMode]
  );
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeaderFeatures />
      <Hero />
      <Products />
      <Recommended />
      <Personalized />
      <BackToTop />
      <Footer />
     
    </ThemeProvider>
  );
}

export default App;
