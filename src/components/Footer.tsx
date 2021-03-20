import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { IoLogoLinkedin } from "react-icons/io";

import { Box, HStack, Icon, Link, VStack } from "@chakra-ui/react";

import mail from "../assets/images/mail-bulk.svg";
import { LINKEDIN_URL } from "../utils/constants";
import Image from "./shared/Image";
import Title from "./shared/Title";

interface Props {}

function Footer(_: Props): ReactElement {
  return (
    <Box p={8}>
      <VStack
        mx="auto"
        alignItems="center"
        justify="center"
        maxW="1600px"
        textAlign="center"
        spacing={2}
      >
        <Title fontSize={["22px", "28px", "36px", "42px"]} color="primary">
          Hey, lets stay in touch!
        </Title>
        <HStack spacing={2}>
          <Link
            as={motion.a}
            whileTap={{ scale: 0.9 }}
            _hover={{
              cursor: "pointer",
            }}
            target="_blank"
            href={LINKEDIN_URL}
          >
            <Icon as={IoLogoLinkedin} boxSize="40px" color="primary" />
          </Link>
          <Link
            as={motion.a}
            whileTap={{ scale: 0.9 }}
            _hover={{
              cursor: "pointer",
            }}
            target="_blank"
            href="mailto:nm.cordero11@gmail.com?subject=job+for+you"
          >
            <Image src={mail} boxSize="40px" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Footer;
