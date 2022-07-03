import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";

import "dayjs/locale/id";
import { Picker } from "../index";

dayjs.extend(localeData);
dayjs().locale("id").format();

const range = (start, stop, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const generateDateStructure = (date = new Date()) => {
  const test = {
    days: range(1, dayjs(date).daysInMonth()),
    months: dayjs.months(),
    years: range(1930, dayjs().add(20, "year").get("year")),
  };
  return test;
};

const RenderBody = () => {};

/**
 * @deprecated Do not use!!
 */
const ScrollPicker = (props) => {
  const data = props?.data || generateDateStructure();
  const [value, setValue] = useState("asd");

  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + 1;
  console.log(
    "[ScrollPicker] renderCounter",
    renderCounter.current,
    "with data:",
    data
  );

  const onChange = (indexPicker, category) => {
    if (category) {
      //data props is object
      console.log("[ScrollPicker] value", value);
      //   const tempValue = { ...value };
      //   console.log("[ScrollPicker] tempValue", tempValue);
      //   data[category].map((x, i) => {
      //     if (i === indexPicker) tempValue[category] = x;
      //   });
      //   setValue(tempValue);
      // } else {
      //   setValue(data[indexPicker]);
    }
  };

  useEffect(() => {
    if (!props?.data && !props?.showDate)
      throw new TypeError(
        `react-native-flixcomponent [ScrollPicker] => "showDate" or "data" props is required!`
      );
    //set default value on initial render
    if (Array.isArray(data)) {
      setValue(data[0]);
    } else {
      const tempValue = {};
      Object.keys(data).map((x) => (tempValue[x] = data[x][0]));
      setValue(tempValue);
    }
  }, []);

  useEffect(() => {
    console.log("[ScrollPicker] usf", value);
    if (value !== null) {
      if (props.onChange) props.onChange(value);
    }
  }, [value]);

  const RenderHeader = () => {
    if (React.isValidElement(props.headerComponent))
      return props.headerComponent;
    else return null;
  };

  const RenderBody = () => {
    const ShowBody = Array.isArray(data) ? (
      <Picker
        data={data}
        onChange={(indexPicker) => {
          onChange(indexPicker);
        }}
        highlightStyle={{ backgroundColor: "#f9976c" }}
      />
    ) : (
      Object.keys(data).map((category, indexCategory) => {
        let highlightStyle = {};
        if (indexCategory === 0) {
          if (props.firstCategoryStyle)
            highlightStyle = props.firstCategoryStyle;
          else
            highlightStyle = {
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              backgroundColor: "#f9976c",
            };
        } else if (indexCategory === Object.keys(data).length - 1) {
          if (props.lastCategoryStyle) highlightStyle = props.lastCategoryStyle;
          else
            highlightStyle = {
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              backgroundColor: "#f9976c",
            };
        } else {
          if (props.highlightStyle) highlightStyle = props.highlightStyle;
          else highlightStyle = { backgroundColor: "#f9976c" };
        }
        return (
          <Picker
            key={category + indexCategory}
            data={data[category]}
            onChange={(indexPicker) => {
              onChange(indexPicker, category);
            }}
            highlightStyle={highlightStyle}
          />
        );
      })
    );
    return <View style={{ flex: 1, flexDirection: "row" }}>{ShowBody}</View>;
  };

  const RenderFooter = () => {
    if (React.isValidElement(props.footerComponent))
      return props.footerComponent;
    else return null;
  };

  const RenderMemoBody = useMemo(() => <RenderBody />, []);

  return (
    <View style={{ flex: 1, ...props.style }}>
      <RenderHeader />
      {RenderMemoBody}
      <RenderFooter />
    </View>
  );
};

export default ScrollPicker;
