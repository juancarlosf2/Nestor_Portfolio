import * as React from "react";
import { ChakraProvider, Box, CSSReset } from "@chakra-ui/react";
import Fonts from "./components/Fonts";
import theme from "./utils/theme";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Fonts />
      <Box w="100%" as="main" bg="background">
            <Navbar />
            <Home />
            <Footer />
      </Box>
  </ChakraProvider>
);
