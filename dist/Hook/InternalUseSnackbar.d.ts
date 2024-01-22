export default InternalUseSnackbar;
/**
 * @file InternalUseSnackbar.js
 * This is a React component used for managing and displaying snackbars.
 */
declare function InternalUseSnackbar(): {
    /** @type {import("./Snackbar").SnackbarData} */
    SnackbarData: any;
    /**
     * A function to display a snackbar.
     *
     * @param {String} message
     * @param {OptionsType} options
     */
    show: any;
    /**
     * A function to hide a snackbar.
     *
     * @returns {void}
     */
    hide: any;
};
