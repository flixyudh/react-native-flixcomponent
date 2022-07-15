export default Images;
/**
 * @author [Flix](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {number} props.width - set `Width` of image
 * @param {number} props.height - set `Height` of image
 * @param {boolean} props.loadingWaterDrop - replace `ActivityIndicator` with `WaterDrop` when loading image
 */
declare function Images(props: {
    width: number;
    height: number;
    loadingWaterDrop: boolean;
}): JSX.Element;
declare namespace Images {
    export { ImageProps as propTypes };
    export { ImageDefaultProps as defaultProps };
}
declare namespace ImageProps {
    const width: any;
    const height: any;
    const loadingWaterDrop: any;
}
declare namespace ImageDefaultProps {
    const loadingWaterDrop_1: boolean;
    export { loadingWaterDrop_1 as loadingWaterDrop };
}
