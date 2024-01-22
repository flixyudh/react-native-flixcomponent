/**
 * This code defines a JavaScript module that exports a constant object named "colors". The "colors" object contains two properties: "light" and "dark", each representing a color scheme. Each color scheme consists of various color values for different UI elements such as primary, secondary, background, etc.
 *
 * @typedef {object} Colors
 * @property {string} primary
 * @property {string} surfaceTint
 * @property {string} onPrimary
 * @property {string} primaryContainer
 * @property {string} onPrimaryContainer
 * @property {string} secondary
 * @property {string} onSecondary
 * @property {string} secondaryContainer
 * @property {string} onSecondaryContainer
 * @property {string} tertiary
 * @property {string} onTertiary
 * @property {string} tertiaryContainer
 * @property {string} onTertiaryContainer
 * @property {string} error
 * @property {string} onError
 * @property {string} errorContainer
 * @property {string} onErrorContainer
 * @property {string} background
 * @property {string} onBackground
 * @property {string} surface
 * @property {string} onSurface
 * @property {string} surfaceVariant
 * @property {string} onSurfaceVariant
 * @property {string} outline
 * @property {string} outlineVariant
 * @property {string} shadow
 * @property {string} scrim
 * @property {string} inverseSurface
 * @property {string} inverseOnSurface
 * @property {string} inversePrimary
 * @property {string} primaryFixed
 * @property {string} onPrimaryFixed
 * @property {string} primaryFixedDim
 * @property {string} onPrimaryFixedVariant
 * @property {string} secondaryFixed
 * @property {string} onSecondaryFixed
 * @property {string} secondaryFixedDim
 * @property {string} onSecondaryFixedVariant
 * @property {string} tertiaryFixed
 * @property {string} onTertiaryFixed
 * @property {string} tertiaryFixedDim
 * @property {string} onTertiaryFixedVariant
 * @property {string} surfaceDim
 * @property {string} surfaceBright
 * @property {string} surfaceContainerLowest
 * @property {string} surfaceContainerLow
 * @property {string} surfaceContainer
 * @property {string} surfaceContainerHigh
 * @property {string} surfaceContainerHighest
 * @property {object} elevation
 * @property {string} elevation.level0
 * @property {string} elevation.level1
 * @property {string} elevation.level2
 * @property {string} elevation.level3
 * @property {string} elevation.level4
 * @property {string} elevation.level5
 * @property {string} surfaceDisabled
 * @property {string} onSurfaceDisabled
 * @property {string} backdrop
 */

/**
 * @property {Colors} light
 */
const light = {
  primary: "#6E528A",
  surfaceTint: "#6E528A",
  onPrimary: "#FFFFFF",
  primaryContainer: "#EFDBFF",
  onPrimaryContainer: "#280D42",
  secondary: "#655A6F",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#EDDDF6",
  onSecondaryContainer: "#21182A",
  tertiary: "#805158",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFD9DD",
  onTertiaryContainer: "#321017",
  error: "#BA1A1A",
  onError: "#FFFFFF",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",
  background: "#FFF7FF",
  onBackground: "#1E1A20",
  surface: "#FFF7FF",
  onSurface: "#1E1A20",
  surfaceVariant: "#E9DFEB",
  onSurfaceVariant: "#4A454E",
  outline: "#7B757E",
  outlineVariant: "#CCC4CE",
  shadow: "#000000",
  scrim: "#000000",
  inverseSurface: "#332F35",
  inverseOnSurface: "#F6EEF6",
  inversePrimary: "#DAB9F9",
  primaryFixed: "#EFDBFF",
  onPrimaryFixed: "#280D42",
  primaryFixedDim: "#DAB9F9",
  onPrimaryFixedVariant: "#553B71",
  secondaryFixed: "#EDDDF6",
  onSecondaryFixed: "#21182A",
  secondaryFixedDim: "#D0C1DA",
  onSecondaryFixedVariant: "#4D4357",
  tertiaryFixed: "#FFD9DD",
  onTertiaryFixed: "#321017",
  tertiaryFixedDim: "#F3B7BE",
  onTertiaryFixedVariant: "#653A41",
  surfaceDim: "#DFD8DF",
  surfaceBright: "#FFF7FF",
  surfaceContainerLowest: "#FFFFFF",
  surfaceContainerLow: "#F9F1F9",
  surfaceContainer: "#F3EBF3",
  surfaceContainerHigh: "#EEE6EE",
  surfaceContainerHighest: "#E8E0E8",
  elevation: {
    level0: "transparent",
    level1: "#F8F2FB",
    level2: "#F4ECF8",
    level3: "#F0E7F6",
    level4: "#EFE5F5",
    level5: "#ECE2F3",
  },
  surfaceDisabled: "rgba(29, 27, 30, 0.12)",
  onSurfaceDisabled: "rgba(29, 27, 30, 0.38)",
  backdrop: "rgba(51, 47, 55, 0.4)",
};

/**
 * @property {Colors} dark
 */

const dark = {
  primary: "#DCB8FF",
  onPrimary: "#470C7A",
  primaryContainer: "#5F2B92",
  onPrimaryContainer: "#F0DBFF",
  secondary: "#D0C1DA",
  onSecondary: "#362C3F",
  secondaryContainer: "#4D4357",
  onSecondaryContainer: "#EDDDF6",
  tertiary: "#F3B7BE",
  onTertiary: "#4B252B",
  tertiaryContainer: "#653A41",
  onTertiaryContainer: "#FFD9DD",
  error: "#FFB4AB",
  onError: "#690005",
  errorContainer: "#93000A",
  onErrorContainer: "#FFB4AB",
  background: "#1D1B1E",
  onBackground: "#E7E1E5",
  surface: "#1D1B1E",
  onSurface: "#E7E1E5",
  surfaceVariant: "#4A454E",
  onSurfaceVariant: "#CCC4CE",
  outline: "#968E98",
  outlineVariant: "#4A454E",
  shadow: "#000000",
  scrim: "#000000",
  inverseSurface: "#E7E1E5",
  inverseOnSurface: "#322F33",
  inversePrimary: "#7845AC",
  elevation: {
    level0: "transparent",
    level1: "#272329",
    level2: "#2C2830",
    level3: "#322C37",
    level4: "#342E39",
    level5: "#38313E",
  },
  surfaceDisabled: "rgba(231, 225, 229, 0.12)",
  onSurfaceDisabled: "rgba(231, 225, 229, 0.38)",
  backdrop: "rgba(51, 47, 55, 0.4)",
};

/**
 * @typedef {Object} colors
 * @property {Colors} light
 * @property {Colors} dark
 */

const colors = {
  light,
  dark,
};

export default colors;
