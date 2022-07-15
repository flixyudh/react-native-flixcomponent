/**
 * @deprecated - *** •On Development***
 */
export default class Toast {
    /**
     * @argument {string} message - Message to show in Toast
     * @argument {Object} [options]
     * @argument {('danger'|'warning'|'success'|'info')}  [options.status=''] - Status for different color of Toast
     * @argument {('toast'|'snackbar')} [options.type="toast"] - show Toast or SnackBar
     * @argument {number} options.duration - show Toast or SnackBar
     * @argument {string} options.label - show Toast or SnackBar
     * @argument {function} options.onPress - show Toast or SnackBar
     *
     * @example
     *
     * ```js
     * Toast.show('I'm Toast')
     * ```
     */
    static show(message: string, options?: {
        status?: ('danger' | 'warning' | 'success' | 'info');
        type?: ('toast' | 'snackbar');
        duration: number;
        label: string;
        onPress: Function;
    }): void;
    animation: Animated.Value;
    state: {
        toastList: any[];
    };
    show(message: any, options: any): void;
    hide(id: any): void;
    render(): JSX.Element;
}
import { Animated } from "react-native";
