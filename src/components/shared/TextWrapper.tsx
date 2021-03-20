import React from "react";
import {
  Stack,
  StackProps,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { elementSpacingVariants, maxWVariants } from "../../utils/variants";

type Props = StackProps & {
  elementSpacing?: "large" | "short";
};

const TextWrapper: React.FC<Props> = ({
  children,
  elementSpacing = "large",
  ...props
}) => {
  const useElementSpacing = useBreakpointValue(elementSpacingVariants.large);
  const useMaxWidthVariant = useBreakpointValue(maxWVariants);
  return (
    <Stack
      spacing={elementSpacing === "large" ? useElementSpacing : 2}
      justify="flex-start"
      alignItems="flex-start"
      maxW={useMaxWidthVariant}
      {...props}
    >
      {children}
    </Stack>
  );
};

export default TextWrapper;
