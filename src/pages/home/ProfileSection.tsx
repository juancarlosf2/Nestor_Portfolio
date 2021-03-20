import React, { ReactElement } from "react";

import { Box, Link, Stack, Text } from "@chakra-ui/react";

import CustomButton from "../../components/shared/Button";
import Container from "../../components/shared/Container";
import ContentWrapper from "../../components/shared/ContentWrapper";
import Image from "../../components/shared/Image";
import Paragraph from "../../components/shared/Paragraph";
import TextWrapper from "../../components/shared/TextWrapper";
import Title from "../../components/shared/Title";
import images from "../../utils/images";
import { LINKEDIN_URL } from "../../utils/constants";

function ProfileSection(): ReactElement {
  return (
    <Container backgroundColor="secondary">
      <ContentWrapper
        py={["100px", "150px"]}
        px="20px"
        justifyContent={["center", "center", "center", "space-between"]}
        flexDirection={["column", "column", "column", "row"]}
        // align="center"
      >
        <Box maxW="400px" mx="auto">
          <Image src={images.aboutProfile} />
        </Box>
        <TextWrapper justifyContent="center" maxW="1000px">
          <Title
            textAlign={["center", "center", "center", "center", "left"]}
            alignSelf={["center", "center", "center", "center", "inherit"]}
            titleSize="big"
          >
            Hey there, <br />{" "}
            <Text as="span" color="primary">
              fellow visitor.
            </Text>
          </Title>
          <Paragraph text="In case you’re wondering, yes, what you see on the left is a mere representation of me, I can totally pull off those glasses, don’t I? Jokes aside, I’m Néstor, currently 22 years old and since I was a little kid I’ve been obsessed with creative endeavors, whether it is music, drawing or just staring at the dark sky at night." />
          <Paragraph
            text="
          I made up my mind on studying Graphic Design in college when I was around 10 years old, and since then, I haven’t looked back. Between all that fiery passion there was something that caught my eye: interface design."
          />
          <Paragraph text="That was the start of a quite journey filled with ups and downs, but here we are. Without a doubt I believe that creating beautiful compelling web spaces and mobile experiences is the way for people’s heart and loyalty for a business, or maybe for a regular guy like me. Don’t you agree? If you do... we must join forces!" />
          <Stack w={["100%", "55%", "45%", "45%"]}>
            <Link href={LINKEDIN_URL} target="_blank">
              <CustomButton
                w="100%"
                variant="primary"
                text="Let's work together!"
              />
            </Link>
          </Stack>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
}

export default ProfileSection;
