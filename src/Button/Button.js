import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import useTheme from "../Hook/useTheme";
import { Text } from "../index";

const { width, height } = Dimensions.get("window");

const Button = (props) => {
  const { title, label, variant, style, borderless, ...rest } = props;
  const { colors } = useTheme();

  const buttonStyles = React.useMemo(() => {
    switch (variant) {
      case "outlined":
        return {
          borderWidth: 1,
          borderColor: rest.disabled ? colors.onSurface + "1F" : colors.outline,
          borderRadius: 20,
        };
      case "filledTonal":
        return {
          backgroundColor: rest.disabled
            ? colors.onSurface + "1F"
            : colors.secondaryContainer,
        };

      default:
        return {
          backgroundColor: rest.disabled
            ? colors.onSurface + "1F"
            : colors.primary,
        };
    }
  }, [variant, colors]);

  const textStyles = React.useMemo(() => {
    switch (variant) {
      case "outlined":
        return {
          color: rest.disabled ? colors.onSurface + "61" : colors.primary,
        };
      case "filledTonal":
        return {
          color: rest.disabled
            ? colors.onSurface + "61"
            : colors.onSecondaryContainer,
        };

      default:
        return {
          color: rest.disabled ? colors.onSurface + "61" : colors.onPrimary,
        };
    }
  }, [variant, colors]);

  const RenderChidren = () => {
    if (props.children) return props.children;
    return (
      <Text style={[textStyles, { fontWeight: "500" }]}>{title || label}</Text>
    );
  };

  return (
    <View style={[style, !borderless && styles.border]}>
      <Pressable
        style={[styles.buttonStyle, buttonStyles]}
        android_ripple={{ color: textStyles.color + "1A" }}
        {...rest}
      >
        <RenderChidren />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    paddingLeft: 24,
    paddingRight: 24,
  },
  border: { overflow: "hidden", borderRadius: 20 },
});

export default Button;
