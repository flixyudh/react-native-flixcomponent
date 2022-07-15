export default ScrollPicker;
/**
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {Object<string, Array<string|number>|Array<{label:string}>|Object[]>} props.data - Object of Array items to show as multiple label
 * @param {boolean} props.showDate - Object of Array contain day, month and year items
 * @param {import("react").ReactElement} [props.headerComponent] - React JSX to show on top of component
 * @param {import("react").ReactElement} [props.footerComponent] - React JSX to show on bottom of component
 * @param {function} [props.onChange] - callback when value changed
 * @param {import("react-native").ViewProps} [props.style] - Set custom style of root view ScrollPicker
 */
declare function ScrollPicker(props: {
    data: {
        [x: string]: Array<string | number> | Array<{
            label: string;
        }> | any[];
    };
    showDate: boolean;
    headerComponent?: import("react").ReactElement;
    footerComponent?: import("react").ReactElement;
    onChange?: Function;
    style?: import("react-native").ViewProps;
}): JSX.Element;
declare namespace ScrollPicker {
    export { ScrollPickerProps as propTypes };
    export { ScrollPickerDefaultProps as defaultProps };
}
declare namespace ScrollPickerProps {
    const data: any;
    function showDate(props: any, propName: any, componentName: any): Error;
    const onChange: any;
    const style: any;
    const headerComponent: any;
    const footerComponent: any;
}
declare const ScrollPickerDefaultProps: {};
