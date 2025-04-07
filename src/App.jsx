import React, { useState } from "react";
import { Preloader } from "./components";
import { AnimatePresence } from "motion/react";

const App = () => {
  const [isLoading, SetIsLoading] = useState(true);

  setTimeout(() => {
    SetIsLoading(false);
  }, 3000);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
    </main>
  );
};

export default App;
