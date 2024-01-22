export default Snackbar;
export type SnackbarData = {
    /**
     * - The message to be displayed in the snackbar.
     */
    message: string;
    /**
     * - The label for the action button (optional).
     */
    label?: string;
    /**
     * - The callback function for the action button (optional).
     */
    onPress?: Function;
    /**
     * - The duration in milliseconds for which the snackbar should be visible (default: 2000).
     */
    duration?: number;
    /**
     * - The background color of the snackbar (default: '#424940').
     */
    backgroundColor?: string;
    /**
     * - The text color of the snackbar (default: '#dee5d8').
     */
    color?: string;
    /**
     * - The unique identifier for the snackbar.
     */
    id: string;
    /**
     * - The function to hide the snackbar.
     */
    hide: Function;
};
/**
 * @typedef {object} SnackbarData
 * @prop {string} message - The message to be displayed in the snackbar.
 * @prop {string} [label] - The label for the action button (optional).
 * @prop {function} [onPress] - The callback function for the action button (optional).
 * @prop {number} [duration] - The duration in milliseconds for which the snackbar should be visible (default: 2000).
 * @prop {string} [backgroundColor] - The background color of the snackbar (default: '#424940').
 * @prop {string} [color] - The text color of the snackbar (default: '#dee5d8').
 * @prop {string} id - The unique identifier for the snackbar.
 * @prop {function} hide - The function to hide the snackbar.
 */
/**
 * @file Snackbar.js
 * @brief This is a React Native component used for displaying snackbars.
 *
 * @param {SnackbarData} Props
 *
 * @returns {JSX.Element} The snackbar component.
 */
declare function Snackbar({ message, label, onPress, duration, backgroundColor, color, id, hide, ...props }: SnackbarData): JSX.Element;
