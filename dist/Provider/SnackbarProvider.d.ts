/**
 * @typedef {object} OptionsType
 * @prop {string} label - button text of snackbar
 * @prop {function} onPress - function to pass when snackbar button pressed
 * @prop {number} [duration=2000] - duration of showing snackbar before hide
 * @prop {string} backgroundColor - Snackbar background color container view
 * @prop {string} color - Snackbar color text
 */
/**
 * @callback show
 * @param {String} message
 * @param {OptionsType} options
 */
export const SnackbarContext: any;
declare function _default({ children, style }: SnackbarProviderProps): JSX.Element;
export default _default;
export type OptionsType = {
    /**
     * - button text of snackbar
     */
    label: string;
    /**
     * - function to pass when snackbar button pressed
     */
    onPress: Function;
    /**
     * - duration of showing snackbar before hide
     */
    duration?: number;
    /**
     * - Snackbar background color container view
     */
    backgroundColor: string;
    /**
     * - Snackbar color text
     */
    color: string;
};
export type show = (message: string, options: OptionsType) => any;
export type SnackbarProviderProps = {
    /**
     * - The children components.
     */
    children: React.FC;
    /**
     * - The style object for the component.
     */
    style: any;
};
