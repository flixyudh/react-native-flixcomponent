export default WaterDrop;
/**
 * Water drop effect animation
 *
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {number} [props.delay=750] - delay of animation component
 * @param {number} [props.size=20] - size of Loader
 * @param {string} [props.color='#5F952F'] - color of Loader
 */
declare function WaterDrop({ delay, size, color }: {
    delay?: number;
    size?: number;
    color?: string;
}): JSX.Element;
