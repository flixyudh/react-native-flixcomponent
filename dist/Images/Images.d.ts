export default Images;
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
declare function Images(props: {
    source: string | number;
    width: number;
    height: number;
    style: ViewProps;
    loadingWaterDrop: boolean;
    loadingWidth: boolean;
    loadingHeight: boolean;
}): any;
declare namespace Images {
    export { ImageProps as propTypes };
    export { ImageDefaultProps as defaultProps };
    export function setErrorImage(image: any): void;
}
declare namespace ImageProps {
    const source: any;
    const width: any;
    const height: any;
    const loadingWaterDrop: any;
}
declare namespace ImageDefaultProps {
    const loadingWaterDrop_1: boolean;
    export { loadingWaterDrop_1 as loadingWaterDrop };
}
