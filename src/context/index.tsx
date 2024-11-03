import React from "react";

const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const initializeTheme = (): Theme => {
    const savedTheme = localStorage.getItem("my-theme") as Theme;
    return savedTheme || "light";
  };

  const [theme, setTheme] = React.useState<Theme>(initializeTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("my-theme", newTheme);
    console.log("call");
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    return () => document.documentElement.removeAttribute("data-theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
