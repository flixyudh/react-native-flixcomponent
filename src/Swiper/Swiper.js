import React from "react";
import PropTypes from "prop-types";
import {
  Animated,
  Dimensions,
  FlatList,
  View,
  FlatListProps,
} from "react-native";
import Images from "../Images/Images";

const { width, height } = Dimensions.get("window");

const WrappedFlatlist = Animated.createAnimatedComponent(FlatList);

/**
 * @typedef Props
 * @type {object}
 * @prop {import("react-native").ViewStyle } contentStyle
 * @prop {string[]} data
 */

/**
 * @typedef {FlatListProps & Props} AllProps
 * @extends {React.PureComponent<AllProps, {}>}}
 */
class Swiper extends React.PureComponent {
  state = {
    sizeWidth: null,
    sizeHeight: null,
    pages: this.props.data,
  };

  animatedValue = new Animated.Value(0);
  pageIndex = 0;

  onScrollEnd = (e) => {
    const currentIndex = this.pageIndex;
    const contentOffset = e.nativeEvent.contentOffset.x;
    this.pageIndex = Math.abs((contentOffset / this.state.sizeWidth).toFixed());
  };

  getParallaxStyles(i) {
    const horizontalSpeed = Math.abs(
      this.state.sizeWidth * 0.25 - this.state.sizeWidth
    );
    return {
      transform: [
        {
          translateX: this.animatedValue.interpolate({
            inputRange: [
              (i - 1) * this.state.sizeWidth,
              i * this.state.sizeWidth,
              (i + 1) * this.state.sizeWidth,
            ],
            outputRange: [-horizontalSpeed, 0, horizontalSpeed],
            extrapolate: "clamp",
          }),
        },
      ],
    };
  }

  onLayoutSetWidth = (e) => {
    const { width: sizeWidth, height: sizeHeight } = e.nativeEvent.layout;
    this.setState({ sizeWidth, sizeHeight });
  };

  /**
   * List function to render component
   */

  _renderItem = ({ item, index: i }) => {
    return (
      <View
        style={[
          { overflow: "hidden", width: this.state.sizeWidth || width },
          this.props.contentStyle,
        ]}
      >
        <Animated.View style={this.getParallaxStyles(i)}>
          <Images source={item} width={this.state.sizeWidth} i={i} />
        </Animated.View>
      </View>
    );
  };

  _renderDot() {
    const showPeople = this.props.data.map((el, index) => {
      const inputRange = [
        (index - 1) * this.state.sizeWidth,
        index * this.state.sizeWidth,
        (index + 1) * this.state.sizeWidth,
      ];
      const interpolateFunct = (outputRange) =>
        this.animatedValue.interpolate({
          inputRange,
          outputRange,
          extrapolate: "clamp",
        });
      const expand = interpolateFunct([1, 2, 1]);
      return (
        <Animated.View
          key={"dot" + el + index.toString()}
          style={{
            width: 6,
            backgroundColor: "#D3D3D3",
            height: 6,
            borderRadius: 6 / 2,
            marginHorizontal: 5,
            transform: [{ scale: expand }],
          }}
        />
      );
    });
    return (
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          position: "absolute",
          bottom: 6,
        }}
      >
        {showPeople}
      </View>
    );
  }

  render() {
    return (
      <View>
        <WrappedFlatlist
          ref={(i) => (this.refFlatlist = i)}
          data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={(_, ind) => ind.toString()}
          horizontal={true}
          pagingEnabled
          legacyImplementation={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onLayout={this.onLayoutSetWidth}
          scrollToOverflowEnabled={false}
          scrollEventThrottle={2}
          initialNumToRender={1}
          initialScrollIndex={0}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: this.animatedValue } } }],
            { useNativeDriver: true }
          )}
          onScrollEndDrag={(x) => this.onScrollEnd(x)}
          {...this.props}
        />
        {this._renderDot()}
      </View>
    );
  }
}

const SwiperProps = {
  /** collection of Images */
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** set style applying every item */
  contentStyle: PropTypes.object,
};

Swiper.propTypes = SwiperProps;

export default Swiper;
