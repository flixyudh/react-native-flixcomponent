import React from "react";
import PropTypes from "prop-types";
import { Text as RNText, TextProps } from "react-native";
import { StylesContext } from "../StylesProvider/StylesProvider";

const constan = {
  Text_XXL: 28,
  Text_XL: 22,
  Text_L: 18,
  Text_M: 14,
  Text_S: 12,
  Text_XS: 10,
  Text_XXS: 8,
  Text_Color: "#2A2A2A",
};

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

const Text = ({ fontSize, color, mb, style = {}, children, ...props }) => {
  let customStyle = {};
  const { GlobalStyles } = React.useContext(StylesContext);

  if (fontSize == "XXL") fontSize = constan.Text_XXL;
  else if (fontSize == "XL") fontSize = constan.Text_XL;
  else if (fontSize == "L") fontSize = constan.Text_L;
  else if (fontSize == "S") fontSize = constan.Text_S;
  else if (fontSize == "XS") fontSize = constan.Text_XS;
  else if (fontSize == "XXS") fontSize = constan.Text_XXS;
  //allow number in fontSize props
  else if (typeof fontSize == "number") fontSize = fontSize;
  //default value fontSize
  else fontSize = constan.Text_M;

  customStyle.color = color || constan.Text_Color;
  // customStyle.fontFamily = constan.Text_Font_Family;
  customStyle.fontSize = fontSize;
  customStyle.marginBottom = mb ? 14 : 0;

  return (
    <RNText
      {...props}
      selectable={true}
      style={[customStyle, GlobalStyles, style]}
    >
      {children}
    </RNText>
  );
};

const Text_Props = {
  /** set fontSize directly */
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["XXL", "XL", "L", "M", "S", "XS", "XXS"]),
  ]),
  /** set color of text */
  color: PropTypes.string,
  /** set space at bottom of text */
  mb: PropTypes.bool,
  /** set style of text */
  style: PropTypes.object,
  /** String or Text Element */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

const Text_Default_Props = {
  fontSize: constan.Text_M,
  color: constan.Text_Color,
};

Text.propTypes = Text_Props;
Text.defaultProps = Text_Default_Props;

export default Text;
