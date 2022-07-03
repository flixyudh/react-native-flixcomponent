Basic usage :

```jsx
import React from "react";
import { Picker } from "FlixComponent";

<Picker
  data={Array.from({ length: 10 }, (_, i) => ({ lab: i + 1, bar: i + 1 }))}
  style={{ maxHeight: 300 }}
  labelKey="lab"
  highlightStyle={{ backgroundColor: "blue", borderRadius: 15 }}
  onChange={(val) => console.log("read", val)}
/>;
```
