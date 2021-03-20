import React from "react";
import { Heading, TextProps, useBreakpointValue } from "@chakra-ui/react";
import {
  biggestTitleVariants,
  bigTitleVariants,
  titleVariants,
} from "../../utils/variants";

type Props = TextProps & { titleSize?: "normal" | "big" | "biggest" };

const Title: React.FC<Props> = ({
  children,
  titleSize = "normal",
  ...props
}) => {
  const useTitleVariant = useBreakpointValue(
    titleSize === "normal"
      ? titleVariants
      : titleSize === "big"
      ? bigTitleVariants
      : biggestTitleVariants
  );
  return (
    <Heading
      // maxW="850px"
      w="auto"
      fontWeight="semibold"
      fontSize={useTitleVariant}
      letterSpacing="1.5%"
      lineHeight="112%"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
