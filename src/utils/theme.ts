import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Poppins",
  body: "Karla",
};

const fontWeights = {
  semibold: "600",
};

const colors = {
  background: "#Fafafa",
  primary: "#FF5793",
  secondary: "#FFBFD6",
};

const overriding = {
  fonts,
  colors,
  fontWeights,
};

const theme = extendTheme(overriding);

export default theme;
