export default Swiper;
export type Props = {
    contentStyle: import("react-native").ViewStyle;
    data: string[];
};
export type AllProps = FlatListProps<any> & Props;
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
    animatedValue: Animated.Value;
    pageIndex: number;
    onScrollEnd: (e: any) => void;
    getParallaxStyles(i: any): {
        transform: {
            translateX: Animated.AnimatedInterpolation;
        }[];
    };
    onLayoutSetWidth: (e: any) => void;
    /**
     * List function to render component
     */
    _renderItem: ({ item, index: i }: {
        item: any;
        index: any;
    }) => JSX.Element;
    _renderDot(): JSX.Element;
    render(): JSX.Element;
    refFlatlist: FlatList<unknown> | Animated.LegacyRef<FlatList<unknown>>;
}
declare namespace Swiper {
    export { SwiperProps as propTypes };
}
import { FlatListProps } from "react-native";
import { Animated } from "react-native";
import { FlatList } from "react-native";
declare namespace SwiperProps {
    const data: any;
    const contentStyle: any;
}
