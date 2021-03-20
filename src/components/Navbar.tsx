import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  useBreakpointValue,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";

import images from "../utils/images";
import { paddingXVariants } from "../utils/variants";
import NavLinks from "./NavLinks";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const usePaddingXVariant = useBreakpointValue(paddingXVariants);
  const [isMobile] = useMediaQuery("(max-width: 820px)");
  let content;
  if (!isMobile) {
    content = (
      <HStack
        color="black  "
        spacing={[8, 10, 8, 10, 20]}
        fontFamily="heading"
        fontWeight="semibold"
        fontSize="20px"
        lineHeight="shorter"
      >
        <NavLinks />
      </HStack>
    );
  } else {
    content = (
      <>
        <IconButton
          aria-label="toggle menu"
          icon={<FaAlignLeft />}
          variant="ghost"
          color="gray.800"
          colorScheme="none"
          onClick={onOpen}
          ref={() => btnRef}
          ml="auto"
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="gray.200">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Stack spacing={4} direction="column">
                  <NavLinks />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }

  return (
    <Box position="sticky" zIndex={1} top={0} bg="background">
      <Flex
        mx="auto"
        alignItems="center"
        justify="center"
        maxW="1600px"
        px={usePaddingXVariant}
        py={4}
      >
        <VStack spacing={1} align="flex-start">
          <Box
            as={motion.div}
            whileTap={{ scale: 0.9 }}
            onClick={() => scroll.scrollToTop()}
            _hover={{
              cursor: "pointer",
            }}
          >
            <Image
              src={images.logo}
              w={["200px", "200px", "200px", "240px"]}
              h="60px"
            />
          </Box>
          {/* <Heading
            as="h3"
            lineHeight="114.5%"
            fontSize="32px"
            fontWeight="regular"
          >
            Néstor{" "}
            <Heading as="span" color="primary" fontWeight="semibold">
              Cordero
            </Heading>
          </Heading>
          <Heading as="h3" fontSize="17px" fontWeight="regular">
            Junior{" "}
            <Heading
              as="span"
              color="primary"
              fontSize="17px"
              fontWeight="semibold"
            >
              UI/UX
            </Heading>{" "}
            Designer
          </Heading> */}
        </VStack>
        <Spacer />
        {content}
      </Flex>
    </Box>
  );
}

export default Navbar;
