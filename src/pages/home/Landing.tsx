import React, { ReactElement } from "react";

import { Image, Link, Stack } from "@chakra-ui/react";

import CustomButton from "../../components/shared/Button";
import ContentWrapper from "../../components/shared/ContentWrapper";
import Paragraph from "../../components/shared/Paragraph";
import TextWrapper from "../../components/shared/TextWrapper";
import Title from "../../components/shared/Title";
import { BEHANCE_URL } from "../../utils/constants";
import images from "../../utils/images";

function Landing(): ReactElement {
  const { profile } = images;
  const imageValues = `
    ${profile.smSize} 450w,
    ${profile.mdSize} 600w,
    ${profile.lgSize} 1000w,
    ${profile.lgSize} 1200w,
    ${profile.xlSize} 1920w,
    `;

  return (
    <ContentWrapper py={4}>
      <TextWrapper>
        <Title color="primary" titleSize="big">
          Something greater than just design
        </Title>
        <Paragraph text="I’m Nestor, UI/UX Designer based in Dominican Republic open to work full-time in a remote environment. For me, greater than just design, it’s the purpose behind it. Let’s find purpose together." />
        <Stack
          direction={["column", "row"]}
          justify={["center", "center", "center", "center", "flex-start"]}
          spacing={[4, 8, 12, 16]}
          w="100%"
        >
          <Link
            _hover={{ textDecor: "none" }}
            href="https://www.linkedin.com/in/nestor-m-cordero/"
            target="_blank"
          >
            <CustomButton
              w="100%"
              // as="link"
              text="contact me"
              variant="primary"
            />
          </Link>
          <Link
            _hover={{ textDecor: "none" }}
            href={BEHANCE_URL}
            target="_blank"
          >
            <CustomButton
              w="100%"
              text="see my projects"
              variant="outline"
            ></CustomButton>
          </Link>
        </Stack>
      </TextWrapper>
      <Image
        srcSet={imageValues}
        src={profile.xlSize}
        alt="profile img"
        maxW={["100%", "380px", "400px", "420px", "90%"]}
        height="auto"
        width="100%"
        layout="intrinsic"
        fit="cover"
        mx="auto"
      />
    </ContentWrapper>
  );
}

export default Landing;
