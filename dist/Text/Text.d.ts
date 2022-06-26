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
declare function Text(props: AllProps): JSX.Element;
import { TextProps } from "react-native";
