import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";

import Hidden from "@material-ui/core/Hidden";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const Up = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 100px;
  bottom: 50px;
  z-index: 10;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 64%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollToTop = () => {
  const scrollUp = () => {
    scroller.scrollTo("intro", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Hidden mdDown>
      <Up onClick={scrollUp}>
        <KeyboardArrowUpIcon fontSize="large" />
      </Up>
    </Hidden>
  );
};

export default ScrollToTop;
