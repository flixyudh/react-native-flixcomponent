import { Dimensions } from "react-native";
import { ModalProvider } from "./ModalProvider";
import { ThemeProvider } from "./ThemeProvider";
import SnackbarProvider from "./SnackbarProvider";

const { width, height } = Dimensions.get("window");

const FlixProdiver = ({ children, ...props }) => {
  return (
    <ThemeProvider {...props}>
      <SnackbarProvider {...props}>
        <ModalProvider {...props}>{children}</ModalProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

FlixProdiver.whyDidYouRender = true;

export default FlixProdiver;
