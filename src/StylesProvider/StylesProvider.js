import React, { createContext } from "react";

export const StylesContext = createContext({});

export const StylesProvider = ({ children }) => {
  const [GlobalStyles, setStyles] = React.useState({});

  const setGlobalStyles = (value) => {
    setStyles({ ...GlobalStyles, ...value });
  };

  return (
    <StylesContext.Provider value={{ GlobalStyles, setGlobalStyles }}>
      {children}
    </StylesContext.Provider>
  );
};
