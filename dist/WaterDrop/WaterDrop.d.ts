export default WaterDrop;
/**
 * Water drop effect animation
 *
 * @author [Yudi Iswandi (Flix)](https://github.com/zxccvvv)
 *
 * @param {Object} props
 * @param {number} [props.delay=850] - delay of animation component
 * @param {number} [props.size=20] - size of Loader
 * @param {string} [props.color='#5F952F'] - color of Loader
 */
declare function WaterDrop({ delay, size, color }: {
    delay?: number;
    size?: number;
    color?: string;
}): any;
declare namespace WaterDrop {
    export { WaterDropPropsType as propTypes };
    export { WaterDropPropsDefault as defaultProps };
}
declare namespace WaterDropPropsType {
    const delay: any;
    const size: any;
    const color: any;
}
declare namespace WaterDropPropsDefault {
    const delay_1: number;
    export { delay_1 as delay };
    const size_1: number;
    export { size_1 as size };
    const color_1: string;
    export { color_1 as color };
}
