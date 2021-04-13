import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import me from "../assets/me.jpg";
import meLazy from "../assets/me-lazy.jpg";
import whiteBg from "../assets/white-bg.svg";
import heroBg from "../assets/bg-hero.svg";
import hero1Bg from "../assets/bg-hero-1.svg";

const Section = styled(Element)`
  background: url("${whiteBg}") no-repeat center center,
    url("${heroBg}") no-repeat top right,
    url("${hero1Bg}") no-repeat bottom left;
  padding: 30px 0;

  @media only screen and (max-width: 1150px) {
    text-align: center;
  }
`;
const Img = styled.img`
  width: 420px;
  height: 420px;
  object-fit: cover;
  border-radius: 50%;

  @media only screen and (min-width: 1150px) {
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }

  @media only screen and (max-width: 420px) {
    width: 320px;
    height: 320px;
  }

  @media only screen and (max-width: 320px) {
    width: 280px;
    height: 280px;
  }
`;
const HeroHeadlineWrapper = styled.div`
  padding: 260px 0;

  @media only screen and (max-width: 1150px) {
    padding: 30px 0;
  }
`;
const Headline = styled(Typography)`
  && {
    @media only screen and (max-width: 420px) {
      font-size: 70px;
    }

    @media only screen and (max-width: 320px) {
      font-size: 60px;
    }
  }
`;
const SubHeadline = styled(Typography)`
  margin-bottom: 10px;
  && {
    @media only screen and (max-width: 400px) {
      font-size: 24px;
    }
  }
`;

const Hero = ({ id }) => {
  return (
    <Section name={id}>
      <Container
        maxWidth="lg"
        style={{
          position: "relative",
        }}
      >
        <Fade left delay={500}>
          <HeroHeadlineWrapper>
            <Typography variant="h5">Hello,</Typography>
            <Headline variant="h1">
              <strong>I'm Akharawit</strong>
            </Headline>
            <SubHeadline variant="h4">
              A Front End developer & <br /> Love to travel
            </SubHeadline>
            <Button variant="outlined" size="large" color="secondary">
              <strong>Download CV.</strong>
            </Button>
          </HeroHeadlineWrapper>
        </Fade>

        <Img src={me} data-src={meLazy} alt="akharawit" />
      </Container>
    </Section>
  );
};
export default Hero;
