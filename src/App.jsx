import React, { useState, useEffect } from "react";
import {
  Navbar,
  Preloader,
  Hero,
  TwitterTestimonials,
  LogoMarquee,
  Cohorts,
  Features,
} from "./components";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import { ThemeProvider } from "./components/ThemeContext";

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
      <main className="font-roboto select-none">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Navbar />
            <Hero />
            <TwitterTestimonials />
            <LogoMarquee />
            <Cohorts />
            <Features />
          </>
        )}
      </main>
    </ThemeProvider>
  );
};

export default App;
