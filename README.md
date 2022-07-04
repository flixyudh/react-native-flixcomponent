# React Native Flix Component

## Getting Started

- [Installation](#installation)
- [Documentation](#https://zxccvvv.github.io/react-native-flixcomponent/) : Detail props, preview and example also you can **_try it_** at `View Code`
- [Components](#components)

  | Component                     | Detail                                                                 |
  | ----------------------------- | ---------------------------------------------------------------------- |
  | [Images](#images)             | [• Preview](#images-preview) <br> [• Usage](#images-usage)             |
  | [Picker](#picker)             | [• Preview](#picker-preview) <br> [• Usage](#picker-usage)             |
  | [ScrollPicker](#scrollpicker) | [• Preview](#scrollpicker-preview) <br> [• Usage](#scrollpicker-usage) |
  | [Swiper](#swiper)             | [• Preview](#swiper-preview) <br> [• Usage](#swiper-usage)             |
  | [Text](#text)                 | [• Preview](#text-preview) <br> [• Usage](#text-usage)                 |
  | [WaterDrop](#waterdrop)       | [• Preview](#waterdrop-preview) <br> [• Usage](#waterdrop-usage)       |

### Installation

```
npm install react-native-flixcomponent --save

// or using yarn

yarn add react-native-flixcomponent
```

### Components

#### Images

> Pure JS Images with auto height (or width) based on ratio of an image

##### Images Usage

```js
import React from "react";
import { Images } from "FlixComponent";

export default () => {
  return (
    <Images
      source={"https://picsum.photos/400/200"}
      width={400}
      loadingWaterDrop
    />
  );
};
```

##### Images Preview

![Images Preview](https://picsum.photos/400/200 "Images")

#### Picker

> Pure JS Picker with scrolling animation and customizable content

##### Picker Usage

```js
import React from "react";
import { Picker } from "FlixComponent";

export default () => {
  return (
    <Picker
      data={Array.from({ length: 10 }, (_, i) => i + 1)}
      style={{ maxHeight: 300 }}
      highlightStyle={{ backgroundColor: "blue", borderRadius: 15 }}
      onChange={(val) => console.log("read", val)}
    />
  );
};
```

##### Picker Preview

![Picker Preview](./assets/docsPreview/pickerPreview.png "Images")

#### ScrollPicker

> Enhance Picker Component with scrolling animation and customizable content

##### ScrollPicker Usage

```js
import React from "react";
import { ScrollPicker } from "FlixComponent";

export default () => {
  return <ScrollPicker showDate style={{ maxHeight: 300 }} />;
};
```

##### ScrollPicker Preview [_on development_]

![Picker Preview](./assets/docsPreview/scrollpickerPreview.png "Images")

#### Swiper

> Pure JS list images with horizontal scrolling

##### Swiper Usage

```js
import React from "react";
import { Swiper } from "FlixComponent";

export default () => {
  return (
    <Swiper
      data={[
        "https://picsum.photos/500/200",
        "https://picsum.photos/500/200",
        "https://picsum.photos/500/200",
      ]}
    />
  );
};
```

##### Swiper Preview

![Picker Preview](./assets/docsPreview/swiperPreview.png "Images")

#### Text

> Text Wrapper

##### Text Usage

```js
import React from "react";
import { Text } from "FlixComponent";

export default () => {
  return <Text fontSize={"XXL"}>Awesome Text</Text>;
};
```

##### Text Preview

![Picker Preview](./assets/docsPreview/textPreview.png "Images")

#### WaterDrop

> Pure JS animated loading like water drop

##### WaterDrop Usage

```js
import React from "react";
import { WaterDrop } from "FlixComponent";

export default () => {
  return <WaterDrop size={15} />;
};
```

##### WaterDrop Preview

![Picker Preview](./assets/docsPreview/waterdropPreview.gif "Images")
