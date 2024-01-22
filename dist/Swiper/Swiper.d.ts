export default Swiper;
export type Props = {
    contentStyle: any;
    data: string[];
};
export type AllProps = FlatListProps & Props;
/**
 * @typedef Props
 * @type {object}
 * @prop {import("react-native").ViewStyle } contentStyle
 * @prop {string[]} data
 */
/**
 * @typedef {FlatListProps & Props} AllProps
 * @extends {React.PureComponent<AllProps, {}>}}
 */
declare class Swiper {
    state: {
        sizeWidth: any;
        sizeHeight: any;
        pages: any;
    };
    animatedValue: any;
    pageIndex: number;
    onScrollEnd: (e: any) => void;
    getParallaxStyles(i: any): {
        transform: {
            translateX: any;
        }[];
    };
    onLayoutSetWidth: (e: any) => void;
    /**
     * List function to render component
     */
    _renderItem: ({ item, index: i }: {
        item: any;
        index: any;
    }) => any;
    _renderDot(): any;
    render(): any;
    refFlatlist: any;
}
declare namespace Swiper {
    export { SwiperProps as propTypes };
}
declare namespace SwiperProps {
    const data: any;
    const contentStyle: any;
}
