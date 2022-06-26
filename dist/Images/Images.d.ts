export default Images;
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
declare function Images(props: {
    width: number;
    height: number;
    loadingWaterDrop: boolean;
}): JSX.Element;
