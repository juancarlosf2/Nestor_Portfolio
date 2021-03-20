import * as React from "react";
import { LinkProps, Link as CustomLink } from "@chakra-ui/react";

type Props = LinkProps;

const Link: React.FC<Props> = ({ children, ...props }) => {
  return (
    <CustomLink
      fontFamily="heading"
      fontWeight="semibold"
      fontSize={["17px", "17px", "17px", "20px"]}
      lineHeight="shorter"
      _hover={{ color: "primary" }}
      {...props}
    >
      {children}
    </CustomLink>
  );
};

export default Link;
