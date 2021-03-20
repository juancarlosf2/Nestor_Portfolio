import React from "react";
import { ImageProps, Image as CustomImage } from "@chakra-ui/react";

type Props = ImageProps;

const Image = ({ ...props }: Props) => {
  return <CustomImage maxH={["450px", "75%", "65%", "100%"]} {...props} />;
};

export default Image;
