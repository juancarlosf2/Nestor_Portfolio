import React, { ReactElement } from "react";
import {
  Button,
  ButtonProps,
  LinkProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { textVariants } from "../../utils/variants";
type Props = {
  variant: "outline" | "primary";
  text: string;
  icon?: IconType;
} & ButtonProps &
  LinkProps;

const CustomButton: React.FC<Props> = ({
  children,
  variant = "primary",
  text,
  icon,
  ...rest
}): ReactElement => {
  const useHeightVariant = useBreakpointValue({
    base: "56px",
    md: "56px",
    lg: "87px",
  });
  const useWidhtVariant = useBreakpointValue({
    base: "100%",
    sm: "100%",
  });
  const useTextVariant = useBreakpointValue(textVariants);
  let button;
  if (variant === "primary") {
    button = (
      <Button
        // py="30px"
        h={useHeightVariant}
        px="50px"
        maxW={useWidhtVariant}
        {...(icon ? `rightIcon= ${icon}` : "")}
        color="primary"
        bg="#111"
        borderRadius="none"
        fontFamily="heading"
        fontWeight="semibold"
        fontSize={useTextVariant}
        lineHeight="114.5%"
        letterSpacing="3.5%"
        textTransform="capitalize"
        _hover={{
          color: "#111",
          bg: "primary",
        }}
        {...rest}
      >
        {text}
      </Button>
    );
  } else {
    button = (
      <Button
        // py="25px"
        px="20px"
        h={useHeightVariant}
        maxH="100%"
        {...(icon ? `rightIcon= ${icon}` : "")}
        variant="outline"
        borderColor="primary"
        color="black"
        borderRadius="none"
        fontFamily="heading"
        borderWidth="4px"
        fontSize={useTextVariant}
        lineHeight="114.5%"
        letterSpacing="3.5%"
        textTransform="capitalize"
        _hover={{
          borderColor: "#111",
          color: "primary",
        }}
        {...rest}
      >
        {text}
      </Button>
    );
  }
  return <>{button}</>;
};

export default CustomButton;
