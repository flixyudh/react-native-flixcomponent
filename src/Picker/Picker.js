import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  ReactElement,
} from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import { Text } from "../index";

function areEqual(prevP, nextP) {
  const prevValue = prevP.labelKey
    ? prevP.item[prevP.labelKey]
    : prevP.item?.label || prevP.item;
  const nextValue = nextP.labelKey
    ? nextP.item[nextP.labelKey]
    : nextP.item?.label || nextP.item;
  return prevValue === nextValue && prevP.selectedIndex === nextP.selectedIndex;
}

const DefaultRenderItem = memo(
  ({ item, itemHeight, index, labelKey, selectedIndex, ...itemProps }) => {
    const label = labelKey ? item[labelKey] : item?.label || item;
    if (typeof label == "object") return null;
    const onPress = useCallback(() => {
      if (itemProps.onPress) itemProps.onPress(index);
    }, []);
    return (
      <TouchableOpacity
        style={[S.textContainer, { height: itemHeight }]}
        onPress={onPress}
      >
        <Text
          style={[
            S.textLabel,
            { color: selectedIndex === index ? "#222" : "#CCC" },
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  },
  areEqual
);

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

const Picker = (props) => {
  const {
    data,
    onChange,
    highlightStyle,
    style,
    itemHeight: heightContent,
    renderItem,
    labelKey,
    ...flatlistProps
  } = props;

  const [FullHeight, setFullHeight] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const canMomentum = useRef(false);
  const refFlatlist = useRef(null);
  const itemHeight = heightContent || 30;

  const onLayout = useCallback(
    (e) => {
      const layoutHeight = e.nativeEvent.layout.height;
      setFullHeight(layoutHeight);
    },
    [FullHeight]
  );

  const onItemPress = useCallback((index) => {
    refFlatlist.current?.scrollToOffset({
      offset: index * itemHeight + FullHeight / 2,
    });
    setSelectedIndex(index);
  }, []);

  const CustomRenderItem = (itemProps) =>
    renderItem ? (
      renderItem(itemProps)
    ) : (
      <DefaultRenderItem
        {...itemProps}
        labelKey={labelKey}
        itemHeight={itemHeight}
        selectedIndex={selectedIndex}
        onPress={onItemPress}
      />
    );

  const startMomentum = () => {
    canMomentum.current = true;
  };

  const endMomentum = useCallback(
    (e) => {
      if (canMomentum.current) {
        const contentOffset = e.nativeEvent.contentOffset.y;
        const currentIndex = Math.abs((contentOffset / itemHeight).toFixed());
        setSelectedIndex(currentIndex);
      }
      canMomentum.current = false;
    },
    [selectedIndex]
  );

  useEffect(() => {
    if (onChange) onChange(data[selectedIndex]);
  }, [selectedIndex]);

  return (
    <View style={[S.container, style]}>
      <View
        style={[
          S.highlightPosition,
          highlightStyle ? highlightStyle : S.defaultHightlight,
          { top: (FullHeight - itemHeight) / 2, height: itemHeight },
        ]}
      />
      <FlatList
        data={data}
        ref={refFlatlist}
        contentContainerStyle={[
          S.contentContainer,
          { paddingVertical: FullHeight ? (FullHeight - itemHeight) / 2 : 0 },
        ]}
        bounces={false}
        keyExtractor={(_, i) => "item" + i}
        renderItem={CustomRenderItem}
        decelerationRate="fast"
        snapToAlignment="start"
        onLayout={onLayout}
        snapToInterval={itemHeight}
        onMomentumScrollEnd={endMomentum}
        onMomentumScrollBegin={startMomentum}
        showsVerticalScrollIndicator={false}
        {...flatlistProps}
      />
    </View>
  );
};

const S = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flexGrow: 1 },
  textContainer: {
    justifyContent: "center",
  },
  textLabel: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  highlightPosition: {
    position: "absolute",
    left: "25%",
    right: "25%",
  },
  defaultHightlight: {
    borderTopWidth: 1,
    borderTopColor: "#A3A3A3",
    borderBottomWidth: 1,
    borderBottomColor: "#A3A3A3",
  },
});

const PickerProps = {
  /**
   * Array of items to show as label
   *
   * @argument {Array<string|number>|Array<{label:string}>|Object[]} data
   *
   * <br><pre>
   * <mark>Example:</mark>
   * <li><small>[1,2,3] or ['1', '2', '3']</small></li>
   * <li><small>[{label:'Burger'}, {label:'Chicken'}]</small></li>
   * </pre>
   *
   * <small>
   * <i>Note:</i>
   * </small>
   *
   * <sub><sup>
   * `labelKey` props is required if `data` with `Array Object` does not contain `label` property
   * </sup></sub>
   *
   */
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ),
  /** Callback when value changed */
  onChange: PropTypes.func,
  /** Set custom style of center view Picker */
  highlightStyle: PropTypes.object,
  /** Set custom style of root view Picker */
  style: PropTypes.object,
  /** Set height of item */
  itemHeight: PropTypes.number,
  /** Custom layout of each item */
  renderItem: PropTypes.element,
  /** keys of object to show as label */
  labelKey: function (props, propName, componentName) {
    const isArrayObject = props["data"].every((x) => {
      return typeof x == "object";
    });
    const ObjectHasLabel = props["data"].every((x) => {
      return x.hasOwnProperty("label");
    });
    if (isArrayObject && !ObjectHasLabel && !props[propName]) {
      return new Error(
        `'data' contain [Array of Object] but Object does not contain 'label' property, specify 'labelKey' in ${componentName} props`
      );
    }
  },
};

const PickerDefaultProps = {
  itemHeight: 30,
};

Picker.propTypes = PickerProps;
Picker.defaultProps = PickerDefaultProps;

export default Picker;
