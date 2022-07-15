export default Text;
/**
 * Flix Text Component
 */
export type FlixTextProps = {
    fontSize: ('XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS' | 'XXS' | number);
    color: boolean;
    mb: boolean;
    style: object;
    children: JSX.Element | string;
};
export type AllProps = TextProps & FlixTextProps;
/**
 * Flix Text Component
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @typedef FlixTextProps
 * @type {Object}
 * @prop {('XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number)} fontSize
 * @prop {boolean} color
 * @prop {boolean} mb
 * @prop {object} style
 * @prop {JSX.Element|string} children
 */
/**
 * @typedef {TextProps & FlixTextProps} AllProps
 */
/**
 *
 * @param {AllProps} props
 */
declare function Text({ fontSize, color, mb, style, children, ...props }: AllProps): JSX.Element;
declare namespace Text {
    export { Text_Props as propTypes };
    export { Text_Default_Props as defaultProps };
}
import { TextProps } from "react-native";
declare namespace Text_Props {
    const fontSize: any;
    const color: any;
    const mb: any;
    const style: any;
    const children: any;
}
declare namespace Text_Default_Props {
    import fontSize_1 = constan.Text_M;
    export { fontSize_1 as fontSize };
    import color_1 = constan.Text_Color;
    export { color_1 as color };
}
declare namespace constan {
    const Text_XXL: number;
    const Text_XL: number;
    const Text_L: number;
    const Text_M: number;
    const Text_S: number;
    const Text_XS: number;
    const Text_XXS: number;
    const Text_Color: string;
}
