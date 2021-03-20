import React, { ReactElement } from "react";
import { Slide, useDisclosure } from "@chakra-ui/react";
// import { useScrollTrigger } from "./useScrollTrigger";

interface Props {
  window: () => Window;
}
const HideOnScroll: React.FC<Props> = ({ children, window }) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  // { target: window ? window() : undefined }
  //   const { direction, curScroll } = useScrollTrigger();
  //   const { isOpen, onToggle } = useDisclosure();
  //   if (direction === 2 && curScroll === 99) {
  //     onToggle();
  //     //   prevScroll = cursorScroll
  //   }
  //   const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
  //     e.preventDefault();
  //   };
  return (
    //     <Slide onScroll={() => handleScroll} direction="top" in={isOpen}>
    //       {children}
    //     </Slide>
    <div></div>
  );
};

export default HideOnScroll;
