import React, { ReactNode, useContext, useState, createContext } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

type Theme = "light" | "dark";

const themeFactory = (mode: Theme) => createTheme({ palette: { mode } });

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const darkTheme = themeFactory("dark");

const lightTheme = themeFactory("light");

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const currentTheme =
    localStorage.getItem("theme") === "light" ? "light" : "dark";

  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const muiThemeObject = theme === "light" ? lightTheme : darkTheme;

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <MUIThemeProvider theme={muiThemeObject}>
      <ThemeContext.Provider value={contextValue}>
        {children}
      </ThemeContext.Provider>
    </MUIThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
