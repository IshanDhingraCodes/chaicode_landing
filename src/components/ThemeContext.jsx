import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark-theme";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light-theme" ? "dark-theme" : "light-theme"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Custom hook component (just providing theme) 
export function ThemeConsumer() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("ThemeConsumer must be used within a ThemeProvider");
  }
  return context;
}
