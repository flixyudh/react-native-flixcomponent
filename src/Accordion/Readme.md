Basic usage:

```jsx
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Accordion } from "FlixComponent";

const [IsExpand, setIsExpand] = React.useState(false);

<Accordion
  expanded={IsExpand}
  renderTitle={
    <TouchableOpacity onPress={() => setIsExpand(!IsExpand)}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {IsExpand ? "Click Me to hide" : "Click Me to expand"}
      </Text>
    </TouchableOpacity>
  }
  titleStyle={{ backgroundColor: "skyblue" }}
>
  <View style={{ backgroundColor: "tomato" }}>
    <Text>detail</Text>
    <Text>detail</Text>
    <Text>detail</Text>
    <Text>detail</Text>
  </View>
</Accordion>;
```
