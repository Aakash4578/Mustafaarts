import React from "react";
import { useThemeCustom } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeCustom();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}