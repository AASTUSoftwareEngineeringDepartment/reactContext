"use client";
import React, { createContext, ReactNode, useState } from "react";
type ThemeProviderProps = {
  children: ReactNode;
};
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType|undefined>(undefined);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   const updateTheme = theme == "light" ? "dark" : "light";
  //   setTheme(updateTheme);
  // };
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
