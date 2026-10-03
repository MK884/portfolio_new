import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative flex h-9 w-9 items-center justify-center
        rounded-lg
        border border-[var(--border)]
        bg-[var(--surface)]
        text-[var(--foreground)]
        transition-all duration-300
        hover:-translate-y-0.5
      "
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
