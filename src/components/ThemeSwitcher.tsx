"use client"
import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export default function ThemeSwitcher() {
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextType;
  return (
     <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 
        ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <h1>The app theme </h1>
       <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Change Theme
      </button>
      <h1>Current Team is {theme}</h1>
    </div>
  )
}
