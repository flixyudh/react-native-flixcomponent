Basic Usage :

```jsx
import React from "react";
import { Text } from "react-native";
import { ScrollPicker } from "FlixComponent";

const [birthday, setBirthday] = React.useState(null);

const Footer = () => {
  return (
    <Text style={{ textAlign: "center" }}>
      My Birthday is: {JSON.stringify(birthday)}
    </Text>
  );
};

<ScrollPicker
  showDate
  style={{ maxHeight: 300 }}
  onChange={setBirthday}
  headerComponent={
    <Text style={{ textAlign: "center" }}>What is your birthday?</Text>
  }
  footerComponent={<Footer />}
/>;
```
