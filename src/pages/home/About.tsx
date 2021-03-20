import React, { ReactElement } from "react";

import { Text } from "@chakra-ui/react";

import ContentWrapper from "../../components/shared/ContentWrapper";
import Image from "../../components/shared/Image";
import Paragraph from "../../components/shared/Paragraph";
import TextWrapper from "../../components/shared/TextWrapper";
import Title from "../../components/shared/Title";
import images from "../../utils/images";

interface Props {}

export default function About(_: Props): ReactElement {
  return (
    <>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <Text as="span" color="primary">
              UI/UX{" "}
            </Text>
            Designer with something under my sleeve
          </Title>
          <Paragraph text="Yeah, I’m UI/UX Designer, but when its required I can absolutely embrace the work as a multidisplinary designer. Branding, logo, adversiting, you name it." />
        </TextWrapper>
        <Image mx="auto" src={images.amazingMan} />
      </ContentWrapper>
      <ContentWrapper
        display="flex"
        flexDirection={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
        ]}
      >
        <Image src={images.growthGoal} />
        <TextWrapper>
          <Title>
            The end goal:
            <Text as="span" color="primary">
              {" "}
              Growth
            </Text>
          </Title>
          <Paragraph text="If you’re not growing, you’re dying. If you’re not learning, you’re not growing. For me, these two are always above anything when it comes to my work." />
        </TextWrapper>
      </ContentWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            A good idea is not
            <Text as="span" color="primary">
              {" "}
              enough
            </Text>
          </Title>
          <Paragraph text="Ideas are not good enough. I don’t fall in love with ideas. I fall in love delivering to the market. That’s the real decider." />
        </TextWrapper>
        <Image mx="auto" src={images.idea} />
      </ContentWrapper>
    </>
  );
}
