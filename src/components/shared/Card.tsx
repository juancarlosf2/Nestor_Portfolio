import { BoxProps, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Paragraph from "./Paragraph";

type Props = { title: string; body: string } & BoxProps;

const Card: React.FC<Props> = ({ title, body, ...rest }) => {
  return (
    <Stack maxH="220px" w="100%" maxW="350px" direction="column" {...rest}>
      <Heading>{title}</Heading>
      <Paragraph textSize="normal" text={body} />
    </Stack>
  );
};

export default Card;
