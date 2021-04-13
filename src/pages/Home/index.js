import React from "react";
import Container from "@material-ui/core/Container";

import Hero from "../../contents/Hero";
import Experience from "../../contents/Experience";
import AboutMe from "../../contents/AboutMe";
import Skills from "../../contents/Skills";

const Home = () => {
  return (
    <>
      <Hero id="intro" />
      <Container maxWidth="lg">
        <AboutMe id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
      </Container>
    </>
  );
};

export default Home;
