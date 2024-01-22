export default Accordion;
/**
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {ReactElement} [props.renderTitle] - Custom Layout of item in data
 * @param {Boolean} [props.expanded] - Whether to show the child components or not
 * @param {Number} [props.animatedDuration] - Duration of animated transition in milliseconds
 * @param {ViewProps} [props.style] - Set custom style of root view Picker
 * @param {ViewProps} [props.titleStyle] - Set custom style of Title Section
 * @param {any} [props.easing] - Function from [Easing](https://reactnative.dev/docs/easing)
 * @param {ReactElement} [props.renderIcon] - Render Icon next to Title Section
 */
declare function Accordion({ children, renderTitle, expanded, animatedDuration, style, titleStyle, easing, renderIcon, }: {
    renderTitle?: ReactElement;
    expanded?: boolean;
    animatedDuration?: number;
    style?: ViewProps;
    titleStyle?: ViewProps;
    easing?: any;
    renderIcon?: ReactElement;
}): any;
declare namespace Accordion {
    export { AccordionProps as propTypes };
    export { AccordionDefaultProps as defaultProps };
}
declare namespace AccordionProps {
    const renderTitle: any;
    const expanded: any;
    const animatedDuration: any;
    const style: any;
    const titleStyle: any;
    const easing: any;
    const renderIcon: any;
    const children: any;
}
declare namespace AccordionDefaultProps {
    const animatedDuration_1: number;
    export { animatedDuration_1 as animatedDuration };
}
