// import PropTypes from "prop-types";
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  View,
  ViewProps,
} from 'react-native';
import {WaterDrop} from '../index';

const window = Dimensions.get('window');

var defaultErrorImage;

const RenderWithLoading = ({
  children,
  isLoading,
  width,
  height,
  renderLoading,
  loadingWaterDrop,
  style,
}) => {
  const LoadingIndicator = () => {
    if (renderLoading) return renderLoading;
    if (loadingWaterDrop) return <WaterDrop size={width / 4} />;
    else return <ActivityIndicator size={'large'} color="orangered" />;
  };

  if (isLoading) {
    return (
      <View
        style={[
          {
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ccc',
          },
          style,
        ]}
      >
        <LoadingIndicator />
      </View>
    );
  } else return children;
};

/**
 * @author [Flix](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {string|number} props.source - source of the Image
 * @param {number} props.width - set `Width` of image
 * @param {number} props.height - set `Height` of image
 * @param {ViewProps} props.style - set `Height` of image
 * @param {boolean} props.loadingWaterDrop - replace `ActivityIndicator` with `WaterDrop` when loading image
 * @param {boolean} props.loadingWidth - set width of loading component
 * @param {boolean} props.loadingHeight - set height of loading component
 */
const Images = props => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [source, setSource] = useState(props.source);

  const tempPropsWidth = useRef(props.width).current;
  const tempPropsHeight = useRef(props.height).current;

  const SetSize = size => {
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
    let isSourceURL = typeof source === 'string';
    if (isSourceURL) {
      Image.getSize(
        source,
        (width, height) => SetSize({width, height}),
        err => {
          console.error(err);
          setIsError(true);
          setIsLoading(false);
        },
      );
    } else {
      const detailSource = Image.resolveAssetSource(
        source || defaultErrorImage,
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
        'Cannot set width and height, you can only use one of them, and put the rest inside style',
      );
    }
  });

  useEffect(() => {
    if (isError) {
      setSource(defaultErrorImage);
    }
  }, [isError]);

  useEffect(() => {
    if (tempPropsWidth !== props.width || tempPropsHeight !== height)
      InitImage();
  }, [props.width, props.height]);

  if (props.children)
    return (
      <RenderWithLoading
        isLoading={isLoading}
        width={props.loadingWidth || width}
        height={props.loadingHeight || height}
        {...props}
      >
        <Image
          source={typeof source === 'string' ? {uri: source} : source}
          style={[{width, height}, props.style]}
          imageStyle={[{width, height}, props.imageStyle]}
        >
          {props.children}
        </Image>
      </RenderWithLoading>
    );
  else {
    return (
      <RenderWithLoading
        isLoading={isLoading}
        width={props.loadingWidth || width}
        height={props.loadingHeight || height}
        {...props}
      >
        <Image
          source={typeof source === 'string' ? {uri: source} : source}
          style={[{width, height}, props.style]}
        />
      </RenderWithLoading>
    );
  }
};

const ImageProps = {
  /** set `Width` of image */
  source: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** set `Width` of image */
  width: PropTypes.number,
  /** set `Height` of image */
  height: PropTypes.number,
  /** replace `ActivityIndicator` with `WaterDrop` when loading image */
  loadingWaterDrop: PropTypes.bool,
};

const ImageDefaultProps = {
  loadingWaterDrop: false,
};

Images.propTypes = ImageProps;
Images.defaultProps = ImageDefaultProps;

Images.setErrorImage = image => {
  defaultErrorImage = image || require('./errorImage.png');
};

export default Images;
