import React, { useState } from "react";
import { DarkMode, Navbar, Preloader } from "./components";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  //Initialize Preloader
  const [isLoading, SetIsLoading] = useState(true);

  setTimeout(() => {
    SetIsLoading(false);
  }, 3000);

  return (
    <ThemeProvider>
      <main className="font-roboto">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
      </main>
    </ThemeProvider>
  );
};

export default App;
