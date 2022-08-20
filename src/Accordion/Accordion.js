import React, { useRef, useState } from "react";
import { Animated, Easing, View, ViewProps } from "react-native";
import PropTypes from "prop-types";

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
const Accordion = ({
  children,
  renderTitle,
  expanded,
  animatedDuration = 300,
  style,
  titleStyle,
  easing,
  renderIcon,
}) => {
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(200);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0rad", `-${Math.PI}rad`],
  });

  const startAnimation = React.useCallback(() => {
    Animated.timing(animatedController, {
      duration: animatedDuration,
      useNativeDriver: false,
      toValue: !expanded ? 0 : 1,
      easing: easing || Easing.bezier(0.4, 0.0, 0.2, 1),
    }).start();
  }, [expanded]);

  React.useEffect(() => {
    startAnimation();
  }, [expanded, startAnimation]);

  const RenderTitle = () => {
    if (renderIcon && renderTitle)
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, ...titleStyle }}>{renderTitle}</View>
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            {renderIcon}
          </Animated.View>
        </View>
      );
    else if (renderTitle)
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, ...titleStyle }}>{renderTitle}</View>
        </View>
      );
    else null;
  };

  return (
    <View style={style}>
      <RenderTitle />
      <Animated.View style={{ overflow: "hidden", height: bodyHeight }}>
        <View
          style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          onLayout={(event) =>
            setBodySectionHeight(event.nativeEvent.layout.height)
          }
        >
          {children}
        </View>
      </Animated.View>
    </View>
  );
};

const AccordionProps = {
  /** Render Title of Accordion */
  renderTitle: PropTypes.element.isRequired,
  /** Whether to show the child components or not */
  expanded: PropTypes.bool,
  /** Duration of animated transition in milliseconds */
  animatedDuration: PropTypes.number,
  /** Set custom style of root view Picker */
  style: PropTypes.object,
  /** Set custom style of Title Section */
  titleStyle: PropTypes.object,
  /** Function from [Easing](https://reactnative.dev/docs/easing) */
  easing: PropTypes.instanceOf(Easing),
  /** Render Icon next to Title Section */
  renderIcon: PropTypes.element,
  /** Render children in collapsible */
  children: PropTypes.node.isRequired,
};

const AccordionDefaultProps = {
  animatedDuration: 300,
};

Accordion.propTypes = AccordionProps;
Accordion.defaultProps = AccordionDefaultProps;

export default Accordion;
