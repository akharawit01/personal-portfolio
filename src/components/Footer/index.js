import React from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";

import footerBg from "../../assets/footer-bg.svg";

const Wrapper = styled(Box)`
  background: url("${footerBg}") no-repeat center center;
`;

const Footer = ({ children }) => {
  return (
    <Wrapper py={15}>
      <Container>{children}</Container>
    </Wrapper>
  );
};
export default Footer;
