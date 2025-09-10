

import ThemeProvider from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";

export default function Home() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
