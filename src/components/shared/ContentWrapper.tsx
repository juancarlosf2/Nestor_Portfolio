import React from "react";

import { Grid, GridProps, useBreakpointValue } from "@chakra-ui/react";

import { paddingXVariants } from "../../utils/variants";

type Props = {} & GridProps;

const ContentWrapper: React.FC<Props> = ({ children, ...props }) => {
  const usePaddingXVariant = useBreakpointValue(paddingXVariants);
  return (
    <Grid
      px={usePaddingXVariant}
      py={["100px", "150px", "200px", "200px", "250px"]}
      mx="auto"
      gap={[8, 10]}
      templateColumns={["auto", "auto", "auto", "auto", "auto auto"]}
      justifyContent={["center", "center", "center", "center", "space-between"]}
      alignItems="center"
      maxW="1600px"
      {...props}
    >
      {children}
    </Grid>
  );
};

export default ContentWrapper;
