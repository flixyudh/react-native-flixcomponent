import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import useTheme from "../Hook/useTheme";

const { width, height } = Dimensions.get("window");

const PressableAnimation = Animated.createAnimatedComponent(Pressable);

const Modal = ({
  hide,
  renderItem,
  disabledBackdrop = false,
  onPressBackdrop,
  duration = 300,
  animationType = false,
  styleContainer,
}) => {
  const animation = React.useRef(new Animated.Value(0)).current;
  const { colors } = useTheme();

  const interpolateAnimation = (inputRange, outputRange) => {
    return animation.interpolate({
      inputRange,
      outputRange,
    });
  };

  const runAnimated = (toValue) => {
    return Animated.timing(animation, {
      toValue,
      duration,
      easing: Easing.elastic(0.8),
      useNativeDriver: true,
    });
  };

  React.useEffect(() => {
    if (animationType) runAnimated(1).start();
  }, [animationType]);

  const onHide = (cb) => {
    if (!animationType) {
      onPressBackdrop?.();
      hide();
      return;
    }
    runAnimated(0).start(() => {
      onPressBackdrop?.();
      hide();
    });
  };

  const fadeStyle = {
    opacity: animation,
    transform: [{ scale: animation }],
  };

  const slideStyle = {
    transform: [{ translateY: interpolateAnimation([0, 1], [height / 2, 0]) }],
  };

  const animationStyle = () => {
    switch (animationType) {
      case "fade":
        return fadeStyle;
      case "slide":
        return slideStyle;
      default:
        return {};
    }
  };

  const RenderComponent = () => React.createElement(renderItem);

  return (
    <PressableAnimation
      onPress={onHide}
      activeOpacity={1}
      disabled={disabledBackdrop}
      style={[
        styles.container,
        {
          backgroundColor: colors.backdrop,
          opacity: animationType ? animation : 1,
        },
        styleContainer,
      ]}
    >
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            animationStyle(),
            { backgroundColor: colors.surface },
            styles.content,
          ]}
        >
          <RenderComponent />
        </Animated.View>
      </TouchableWithoutFeedback>
    </PressableAnimation>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    justifyContent: "center",
  },
  content: {
    padding: 14,
    margin: 14,
    borderRadius: 5,
  },
});

export default Modal;
