export default useTheme;
/**
 * @example
 * const { colors } = useTheme();
 * @returns {{applyColors: function, colors:import('../styles/colors').Colors}}
 */
declare function useTheme(): {
    applyColors: Function;
    colors: import('../styles/colors').Colors;
};
