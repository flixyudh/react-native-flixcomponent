import { Platform } from "react-native";

const fonts = {
  fontFamily: Platform.select({
    ios: "System",
    android: "sans-serif",
  }),
};

export default fonts;
