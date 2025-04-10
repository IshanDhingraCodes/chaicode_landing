import React, { useState } from "react";
import { Navbar, Preloader, Hero } from "./components";
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
  }, 2000);

  return (
    <ThemeProvider>
      <main className="font-roboto select-none">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Navbar />
        <Hero />
      </main>
    </ThemeProvider>
  );
};

export default App;
