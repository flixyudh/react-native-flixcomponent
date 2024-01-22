import React from "react";
import { Text as RNText, StyleSheet } from "react-native";
import { useTheme } from "../index";

/**
 * @typedef {import("react-native").TextProps} PropsText
 * @param {PropsText} props
 * @returns {JSX.Element}
 */
const Text = (props) => {
  const { colors, fonts } = useTheme();

  return (
    <RNText
      style={[
        {
          color: colors.onSurface,
          fontFamily: fonts.fontFamily,
        },
        props.style,
      ]}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
