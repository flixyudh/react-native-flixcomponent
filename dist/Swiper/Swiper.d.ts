export default Swiper;
export type Props = {
    contentStyle: import("react-native").ViewStyle;
    data: string[];
};
/**
 * @typedef Props
 * @type {object}
 * @prop {import("react-native").ViewStyle } contentStyle
 * @prop {string[]} data
 */
/**
 * @extends {React.PureComponent<Props, {}>}}
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
    /**
     * End list function to render component
     */
    render(): JSX.Element;
    refFlatlist: FlatList<unknown> | Animated.LegacyRef<FlatList<unknown>>;
}
import { Animated } from "react-native";
import { FlatList } from "react-native";
