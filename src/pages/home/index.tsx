import React from "react";
import Container from "../../components/shared/Container";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Methodology from "./Methodology";
import ProfileSection from "./ProfileSection";

interface Props {}

const Home = (_: Props) => {
  return (
    <>
      <Container id="home">
        <Landing />
        <About />
        <Methodology />
        <Contact />
      </Container>
      <Container id="about">
        <ProfileSection />
      </Container>
    </>
  );
};

export default Home;
