import React from "react";

import { Box, Image, Stack, Text } from "@chakra-ui/react";

import Card from "../../components/shared/Card";
import ContentWrapper from "../../components/shared/ContentWrapper";
import Title from "../../components/shared/Title";
import images from "../../utils/images";

const Methodology = () => {
  return (
    <>
      <ContentWrapper justifyContent="center">
        <Image maxH={["760px"]} src={images.methodology} />
      </ContentWrapper>
      <Box
        px={["20px", "30px"]}
        marginBottom={["100px", "150px", "150px", "270px"]}
        paddingTop={10}
        mt={4}
        maxW="1600px"
        mx="auto"
      >
        <Stack justify="center" spacing={10} w="auto">
          <Title fontWeight="semibold" textAlign="center">
            What can I{" "}
            <Text as="span" fontWeight="bold">
              bring{" "}
            </Text>
            to the table?
          </Title>
          <Stack
            flexDirection={["column", "column", "column", "row"]}
            justify="space-between"
            align="center"
            mb={5}
            spacing={5}
          >
            <Card
              title="Focused Deep Work"
              body="In order to reach the most quality work I can offer, I get into laser focus for prolongued periods of time."
            />
            <Card
              title="High level social skills"
              body="Discipline builds your character. Character is not yelling at people when you’re angry, it’s doing what you got to do even when you don’t want to."
            />
            <Card
              title=" Discipline at its fullest"
              body="As a designer, communication skills are key. I can provide that with my outgoing and playful personality. I love being around people."
            />
          </Stack>
          <Box alignSelf="center">
            <Image
              boxSize={["100%", "400px", "400px", "400px"]}
              src={images.hands}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Methodology;
