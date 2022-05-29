import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, Image, View } from "react-native";

const window = Dimensions.get("window");

/**
 * @author [Flix](https://github.com/zxccvvv)
 *
 * @components
 * @param {Object} props
 * @param {number} props.width - set width of image
 * @param {number} props.height - set height of image
 * @param {boolean} props.loadingWaterDrop - replace ActivityIndicator with WaterDrop when loading image
 * @public
 */

const ImageProps = {
  /** set Width of Image */
  width: PropTypes.number,
  /** set Height of Image */
  height: PropTypes.number,
  /** replace `<ActivityIndicator/>` with `<WaterDrop/>` when loading image */
  loadingWaterDrop: PropTypes.bool,
};

const ImageDefaultProps = {
  loadingWaterDrop: false,
};

const Images = (props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [source, setSource] = useState(props.source);

  const tempPropsWidth = useRef(props.width).current;
  const tempPropsHeight = useRef(props.height).current;

  const SetSize = (size) => {
    if (props.width && !props.height)
      setHeight(size.height * (props.width / size.width));
    else if (!props.width && props.height)
      setWidth(size.width * (props.height / size.height));
    else {
      setWidth(window.width);
      setHeight(size.height * (window.width / size.width));
    }
    setIsLoading(false);
  };

  const InitImage = () => {
    let isSourceURL = typeof source === "string";
    if (isSourceURL) {
      Image.getSize(
        source,
        (width, height) => SetSize({ width, height }),
        (err) => {
          console.error(err);
          setIsError(true);
          setIsLoading(false);
        }
      );
    } else {
      const detailSource = Image.resolveAssetSource(
        source || require("./errorImage.png")
      );
      SetSize(detailSource);
    }
  };

  useEffect(() => {
    InitImage();
  }, [source]);

  useEffect(() => {
    if (props.width && width !== props.width) {
      setWidth(props.width);
      InitImage();
    } else if (props.height && height !== props.height) {
      setHeight(props.height);
      InitImage();
    } else if (props.width && props.height) {
      throw new Error(
        "Cannot set width and height, you can only use one of them, and put the rest inside style"
      );
    }
  });

  useEffect(() => {
    if (isError) {
      setSource(require("./errorImage.png"));
    }
  }, [isError]);

  useEffect(() => {
    if (tempPropsWidth !== props.width || tempPropsHeight !== height)
      InitImage();
  }, [props.width, props.height]);

  const RenderWithLoading = ({ children }) => {
    if (isLoading) {
      return (
        <View
          style={[
            {
              width,
              height,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ccc",
            },
            props.style,
          ]}
        >
          {/* {props?.loadingWaterDrop ? (
            <WaterDrop />
          ) : (
            <ActivityIndicator size={"large"} color="orangered" />
          )} */}
          <ActivityIndicator size={"large"} color="orangered" />
        </View>
      );
    } else {
      return children;
    }
  };

  if (props.children)
    return (
      <RenderWithLoading>
        <Image
          source={typeof source === "string" ? { uri: source } : source}
          {...props}
          style={[{ width, height }, props.style]}
          imageStyle={[{ width, height }, props.imageStyle]}
        >
          {props.children}
        </Image>
      </RenderWithLoading>
    );
  else {
    return (
      <RenderWithLoading>
        <Image
          source={typeof source === "string" ? { uri: source } : source}
          style={[{ width, height }, props.style]}
          {...props}
        />
      </RenderWithLoading>
    );
  }
};

Images.propTypes = ImageProps;
Images.defaultProps = ImageDefaultProps;

export default Images;
