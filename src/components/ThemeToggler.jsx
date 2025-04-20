import { useTheme } from "../ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer fixed top-4 right-4 z-50 p-2 rounded-full 
            bg-[var(--color-light-field)] hover:bg-[var(--color-light-field-hover)] 
            dark:bg-[var(--color-dark-field)] dark:hover:bg-[var(--color-dark-field-hover)] 
            text-zinc-800 dark:text-zinc-100 shadow transition-all duration-300 ease-in-out"
    >
      {theme === "dark" ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
}
