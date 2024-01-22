import React from "react";
import { useColorScheme } from "react-native";
import BaseColor from "../styles/colors";
import BaseFont from "../styles/fonts";

const InternalUseTheme = ({ colors, fonts }) => {
  const FinalColor = colors || BaseColor;
  const FinalFont = fonts || BaseFont;
  const [colorSet, setColors] = React.useState(FinalColor["light"]);
  const [fontSet, setFonts] = React.useState(FinalFont);

  const colorScheme = useColorScheme();

  const applyColors = React.useCallback((colorTheme) => {
    setColors(colorTheme);
  }, []);

  const applyFont = React.useCallback((fontTheme) => {
    setFonts(fontTheme);
  }, []);

  React.useEffect(() => {
    applyColors(
      colorScheme === "dark"
        ? FinalColor.dark
        : colorScheme === "light"
        ? FinalColor.light
        : FinalColor["light"]
    );
  }, [applyColors, colorScheme]);

  return {
    colors: colorSet,
    fonts: fontSet,
    applyColors,
    applyFont,
  };
};

export default InternalUseTheme;
