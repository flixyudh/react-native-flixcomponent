import PropTypes from "prop-types";
import React from "react";
import { Text as RNText, TextProps } from "react-native";

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

const myCustomProps = {
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

/**
 * Flix Text Component
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {object | TextProps} props
 * @param {('XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number)} [props.fontSize=14]
 * @param {boolean} [props.color]
 * @param {boolean} [props.mb]
 * @param {object} [props.style]
 * @param {JSX.Element|string} props.children
 */

const Text = (props) => {
  let { fontSize, color, mb, children, style = {} } = props;
  let customStyle = {};

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
  customStyle.fontFamily = constan.Text_Font_Family;
  customStyle.fontSize = fontSize;
  customStyle.marginBottom = mb ? 14 : 0;

  return (
    <RNText {...props} selectable={true} style={[customStyle, style]}>
      {children}
    </RNText>
  );
};

Text.propTypes = myCustomProps;

Text.defaultProps = {
  fontSize: constan.Text_M,
  color: constan.Text_Color,
};

export default Text;
