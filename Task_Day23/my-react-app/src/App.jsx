import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./components/GlobalStyles";

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

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />

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
