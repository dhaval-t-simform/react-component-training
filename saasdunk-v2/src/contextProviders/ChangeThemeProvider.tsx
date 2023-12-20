import { createContext, useContext, useState } from "react";

export type ThemeType = "Default" | "WhiteMode";

const themeContext = createContext<{
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}>({
  theme: "Default",
  setTheme: () => {},
});

const ChangeThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [theme, setTheme] = useState<ThemeType>("Default");

  const switchTheme = (theme: ThemeType) => {
    setTheme(theme);
  };

  return (
    <themeContext.Provider value={{ theme, setTheme: switchTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ChangeThemeProvider;

export const useChangeTheme = () => useContext(themeContext);
