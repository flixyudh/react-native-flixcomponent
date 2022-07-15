Basic usage :

```jsx
import React from "react";
import { Button, View } from "react-native";
import { Toast } from "FlixComponent";

<View style={{ height: 200, justifyContent: "space-between" }}>
  {["Success", "Info", "Danger", "Warning"].map((x) => (
    <Button
      title={x}
      key={x}
      onPress={() =>
        Toast.show(x + " doing something!", {
          status: x.toLowerCase(),
          duration: 1000,
        })
      }
    />
  ))}
  <Toast />
</View>;
```
