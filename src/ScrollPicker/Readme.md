<!-- Basic usage Multiple `ScrollPicker` :

```jsx
import React from "react";
import { ScrollPicker } from "FlixComponent";

const data = {
  picker1: [1, 2, 3, "string"],
  picker2: ["foo", "bar", "baz"],
};

<ScrollPicker
  data={data}
  style={{ maxHeight: 300 }}
  onChange={(val) => console.log("read", val)}
/>;
```

You can also pass **Array** to show only one **ScrollPicker** :

```jsx
import React from "react";
import { ScrollPicker } from "FlixComponent";

const dataArray = ["Chicken", "Burger", "Salad"];

<ScrollPicker
  data={dataArray}
  style={{ maxHeight: 300 }}
  onChange={(val) => console.log("read", val)}
/>;
``` -->

You can also pass **showDate** to **ScrollPicker** props without specify **data** props to show **_current date, month, years (1930 - (current year + 20))_** :

```jsx
import React from "react";
import { ScrollPicker } from "FlixComponent";

<ScrollPicker
  showDate
  style={{ maxHeight: 300 }}
  onChange={(val) => console.log("read", val)}
/>;
```
