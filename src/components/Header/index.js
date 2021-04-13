import React, { useState } from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { scroller } from "react-scroll";

import MenuIcon from "@material-ui/icons/Menu";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";

const Logo = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 36px;
  cursor: pointer;
`;

const AdaptLink = styled(Button)`
  margin: 0 10px;
  padding: 15px;
  font-weight: bold;
`;

function ListItemLink(props) {
  return <ListItem button component="span" {...props} />;
}

const Header = () => {
  const [show, setShow] = useState(false);

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setShow(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShow(open);
  };

  const MenuItems = () => {
    return (
      <Box display="flex" alignItems="center" py={2}>
        <AdaptLink onClick={() => scrollTo("about")}>About Me</AdaptLink>
        <AdaptLink onClick={() => scrollTo("experience")}>Experience</AdaptLink>
        <AdaptLink onClick={() => scrollTo("skills")}>Skills</AdaptLink>
        <AdaptLink onClick={() => scrollTo("contact")}>Contact Me</AdaptLink>
      </Box>
    );
  };

  return (
    <>
      <Hidden lgUp>
        <Box position="fixed" top={25} left={25} zIndex={999}>
          <Fab onClick={toggleDrawer(true)} color="secondary" aria-label="menu">
            <MenuIcon />
          </Fab>
        </Box>
      </Hidden>

      <Hidden mdDown>
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Logo>akharawit.</Logo>
            </Grid>

            <Grid item xs>
              <Box display="flex" px={2}>
                <Box display="flex" alignItems="center" pr={3}>
                  <CallOutlinedIcon /> <span>+6684 406 7469</span>
                </Box>
                <Box display="flex" alignItems="center" pr={3}>
                  <MailOutlineIcon /> <span>akharawit.aryakom@gmail.com</span>
                </Box>
                <FacebookIcon fontSize="large" />
              </Box>
            </Grid>

            <Grid item>{MenuItems()}</Grid>
          </Grid>
        </Container>
      </Hidden>
      <SwipeableDrawer
        anchor="left"
        open={show}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box width={320}>
          <Box p={2}>
            <Logo onClick={() => scrollTo("intro")}>akharawit.</Logo>
          </Box>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button onClick={() => scrollTo("about")}>
              <ListItemText primary="About Me" />
            </ListItem>
            <ListItemLink button onClick={() => scrollTo("experience")}>
              <ListItemText primary="Experience" />
            </ListItemLink>
            <ListItemLink button onClick={() => scrollTo("skills")}>
              <ListItemText primary="Skills" />
            </ListItemLink>
            <ListItemLink button onClick={() => scrollTo("contact")}>
              <ListItemText primary="Contact Me" />
            </ListItemLink>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};
export default Header;
