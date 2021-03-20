import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

type Props = {} & BoxProps;

const Container: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Box position="relative" {...props}>
      {children}
    </Box>
  );
};

export default Container;
