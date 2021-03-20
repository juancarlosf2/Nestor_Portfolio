import React from "react";
import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";
import { normalTextVariants, textVariants } from "../../utils/variants";

type Props = TextProps & { text: string; textSize?: "normal" | "big" };

const Paragraph: React.FC<Props> = ({
  children,
  text,
  textSize = "big",
  ...props
}) => {
  const useTextVariant = useBreakpointValue(
    textSize === "big" ? textVariants : normalTextVariants
  );
  return (
    <Text
      // maxW={["500px", "500px", "830px", "830px"]}
      w="100%"
      fontSize={useTextVariant}
      letterSpacing="0.5%"
      lineHeight="shorter"
      {...props}
    >
      {text}
    </Text>
  );
};

export default Paragraph;
