import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ui/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Lenis from "lenis";
import {
  AppDownload,
  Cohorts,
  Discord,
  Features,
  Feedback,
  Footer,
  FreeApi,
  Hero,
  LogoMarquee,
  Navbar,
  PageNotFound,
  Preloader,
  TopicCloud,
  Tweets,
  Udemy,
  WhyChaiCode,
  YoutubeLink,
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
    <BrowserRouter>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        {!isLoading && (
          <Routes>
            <Route
              path="/"
              element={
                <div className="font-roboto select-none">
                  <main className="max-w-[1440px] mx-auto px-4">
                    <Navbar />
                    <Hero />
                    <Tweets />
                    <LogoMarquee />
                    <Cohorts />
                    <Feedback />
                    <Udemy />
                    <Features />
                    <WhyChaiCode />
                    <TopicCloud />
                    <Discord />
                    <FreeApi />
                    <AppDownload />
                    <YoutubeLink />
                  </main>
                  <Footer />
                </div>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
