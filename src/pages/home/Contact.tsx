import React, { ReactElement } from "react";

import { Box, Image, Link, Stack, Text } from "@chakra-ui/react";

import CustomButton from "../../components/shared/Button";
import ContentWrapper from "../../components/shared/ContentWrapper";
import Title from "../../components/shared/Title";
import images from "../../utils/images";
import { LINKEDIN_URL } from "../../utils/constants";

interface Props {}

function Contact(_: Props): ReactElement {
  return (
    <ContentWrapper>
      <Box>
        <Title titleSize="big" mb={8}>
          Do you think <br /> I can be{" "}
          <Text as="span" color="primary" fontWeight="bold">
            useful
          </Text>
          <br />
          for your company?
        </Title>
        <Stack maxW={["450px", "300px"]}>
          <Link href={LINKEDIN_URL} target="_blank">
            <CustomButton w="100%" text="Hire Me!" variant="primary" />
          </Link>
        </Stack>
      </Box>
      <Box>
        <Image src={images.hireMe} alt="hire me!" fit="cover" />
      </Box>
    </ContentWrapper>
  );
}

export default Contact;
