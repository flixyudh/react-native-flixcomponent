export default Picker;
/**
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {Array<string|number>|Array<{label:string}>|Object[]} props.data - Array of items to show as label
 * @param {function} [props.onChange] - callback when value changed
 * @param {Object} [props.highlightStyle] - Optional highlight style
 * @param {Object} [props.style] - Set custom style of root view Picker
 * @param {number} [props.itemHeight] - Set height of item (default: 30)
 * @param {ReactElement} [props.renderItem] - Custom Layout of item in data
 * @param {string} [props.labelKey] - keys of Object to show as label
 */
declare function Picker(props: {
    data: Array<string | number> | Array<{
        label: string;
    }> | any[];
    onChange?: Function;
    highlightStyle?: any;
    style?: any;
    itemHeight?: number;
    renderItem?: ReactElement;
    labelKey?: string;
}): any;
declare namespace Picker {
    export { PickerProps as propTypes };
    export { PickerDefaultProps as defaultProps };
}
declare namespace PickerProps {
    const data: any;
    const onChange: any;
    const highlightStyle: any;
    const style: any;
    const itemHeight: any;
    const renderItem: any;
    function labelKey(props: any, propName: any, componentName: any): Error;
}
declare namespace PickerDefaultProps {
    const itemHeight_1: number;
    export { itemHeight_1 as itemHeight };
}
