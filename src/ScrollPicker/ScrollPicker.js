import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

import "dayjs/locale/id";
import { Picker } from "../index";
import PropTypes from "prop-types";

dayjs.extend(localeData);
dayjs().locale("id").format();

const range = (start, stop, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const generateDateStructure = (date = new Date()) => {
  const test = {
    day: range(1, dayjs(date).daysInMonth()),
    month: dayjs.months(),
    year: range(1930, dayjs().add(20, "year").get("year")),
  };
  return test;
};

const RenderBody = (props) => {
  const handleOnChange = (valueCategory, category) => {
    if (props.value === null) return;
    const res = { ...props.value };
    res[category] = valueCategory;
    if (props.onChange) props.onChange(res);
  };

  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      {Object.keys(props.data).map((category, index) => (
        <Picker
          key={category + index}
          data={props.data[category]}
          onChange={(valueCategory) => handleOnChange(valueCategory, category)}
          highlightStyle={{ backgroundColor: "#f50", borderRadius: 15 }}
        />
      ))}
    </View>
  );
};

/**
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {Object<string, Array<string|number>|Array<{label:string}>|Object[]>} props.data - Object of Array items to show as multiple label
 * @param {boolean} props.showDate - Object of Array contain day, month and year items
 * @param {import("react").ReactElement} [props.headerComponent] - React JSX to show on top of component
 * @param {import("react").ReactElement} [props.footerComponent] - React JSX to show on bottom of component
 * @param {function} [props.onChange] - callback when value changed
 * @param {import("react-native").ViewProps} [props.style] - Set custom style of root view ScrollPicker
 */

const ScrollPicker = (props) => {
  const data = props?.data || generateDateStructure();
  const [value, setValue] = useState(null);

  useEffect(() => {
    let res = {};
    Object.keys(data).forEach((x) => {
      res[x] = data[x][0];
    });
    setValue(res);
  }, []);

  const RenderHeader = () => {
    if (
      typeof props.headerComponent == "function" &&
      React.isValidElement(props.headerComponent())
    )
      return props.headerComponent();
    else if (React.isValidElement(props.headerComponent))
      return props.headerComponent;
    else return null;
  };

  const RenderFooter = () => {
    if (
      typeof props.footerComponent == "function" &&
      React.isValidElement(props.footerComponent())
    )
      return props.footerComponent();
    else if (React.isValidElement(props.footerComponent))
      return props.footerComponent;
    else return null;
  };

  useEffect(() => {
    if (props.onChange) props.onChange(value);
  }, [value]);

  return (
    <View style={{ flex: 1, ...props.style }}>
      <RenderHeader />
      <RenderBody onChange={(res) => setValue(res)} data={data} value={value} />
      <RenderFooter />
    </View>
  );
};

const ScrollPickerProps = {
  /** Object of Array items to show as multiple label */
  data: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
  /**
   * @param boolean
   *
   * <br>Object of Array contain <pre>{day:[currentDayOfMonth], month:[Jan-Dec], year:[1980-(current year+20)]}</pre>
   */
  showDate: function (props, propName, componentName) {
    if (!props["data"] && !props[propName]) {
      return new Error(`data OR ${propName} is required in ${componentName}.`);
    }
  },
  /** Callback when value changed */
  onChange: PropTypes.func,
  /** Set custom style of view ScrollPicker */
  style: PropTypes.object,
  /** Custom layout on top of component */
  headerComponent: PropTypes.element,
  /** Custom layout on bottom of component */
  footerComponent: PropTypes.element,
};

const ScrollPickerDefaultProps = {};

ScrollPicker.propTypes = ScrollPickerProps;
ScrollPicker.defaultProps = ScrollPickerDefaultProps;

export default ScrollPicker;
