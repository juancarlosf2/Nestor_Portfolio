import React from "react";
import CustomButton from "./shared/Button";
import Link from "./shared/Link";
import { Link as ScrollLink } from "react-scroll";
import "../styles/styles.css";
import { Link as ChakraLink } from "@chakra-ui/react";
import { BEHANCE_URL, LINKEDIN_URL } from "../utils/constants";

const NavLinks = () => {
  return (
    <>
      <Link as="li" listStyleType="none">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          offset={-86}
        >
          Home
        </ScrollLink>
      </Link>
      <Link as="li" listStyleType="none">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          offset={-86}
        >
          About
        </ScrollLink>
      </Link>
      <Link href={BEHANCE_URL} target="_blank">
        Projects
      </Link>
      <ChakraLink href={LINKEDIN_URL} target="_blank">
        <CustomButton
          variant="outline"
          borderColor="primary"
          borderWidth="3px"
          borderRadius="0px"
          fontSize="20px"
          h="44px"
          mt="auto"
          w="100%"
          text="Contact me"
        />
      </ChakraLink>
    </>
  );
};

export default NavLinks;
