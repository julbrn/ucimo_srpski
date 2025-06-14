import React from "react";
import { useTheme } from "../ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer fixed top-4 right-4 z-50 p-2 rounded-full 
        bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 
        text-gray-800 dark:text-gray-200 shadow transition-all duration-300 ease-in-out"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};
export default ThemeToggler;
