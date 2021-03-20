import * as React from "react";
import { ChakraProvider, Box, CSSReset } from "@chakra-ui/react";
import Fonts from "./components/Fonts";
import theme from "./utils/theme";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./pages/Resume";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Fonts />
    <Router>
      <Box w="100%" as="main" bg="background">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/NestorCorderoResume.pdf">
            <Navbar />
            <Resume />
          </Route>
        </Switch>
      </Box>
    </Router>
  </ChakraProvider>
);
