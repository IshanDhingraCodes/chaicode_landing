import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ui/ThemeContext";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import {
  Cohorts,
  Features,
  Hero,
  LogoMarquee,
  Navbar,
  Preloader,
  Tweets,
} from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {!isLoading && (
        <main className="font-roboto select-none max-w-[1440px] mx-auto px-4">
          <Navbar />
          <Hero />
          <Tweets />
          <LogoMarquee />
          <Cohorts />
          <Features />
        </main>
      )}
    </ThemeProvider>
  );
};

export default App;
