import React from "react";
import InternalUseTheme from "../Hook/internalUseTheme";
import BaseColor from "../styles/colors";
import BaseFont from "../styles/fonts";

const ThemeContext = React.createContext({
  colors: BaseColor.light,
  applyColors: () => null,
  fonts: BaseFont,
  applyFont: () => null,
});

const ThemeProvider = ({ children, theme = { colors: null, fonts: null } }) => {
  const { colors, applyColors, fonts, applyFont } = InternalUseTheme(theme);
  const contextValue = React.useMemo(
    () => ({ colors, applyColors, fonts, applyFont }),
    [colors, applyColors, fonts, applyFont]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
