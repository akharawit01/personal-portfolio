import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import RoomIcon from "@material-ui/icons/Room";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import processWork from "../assets/droplet.svg";

const Droplet = styled.div`
  background: url("${processWork}") no-repeat center center;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const AdaptTypography = styled(Typography)`
  && {
    @media only screen and (max-width: 400px) {
      font-size: 14px;
    }
  }
`;

const Contact = ({ id }) => {
  return (
    <Box component={Element} name={id}>
      <Box textAlign="center">
        <Typography variant="overline">Contact.</Typography>
        <Typography variant="h3">You know to find us</Typography>
      </Box>

      <Box py={8} mt={6}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={12} md>
            <Box display="flex">
              <Box px={2}>
                <Droplet>
                  <RoomIcon />
                </Droplet>
              </Box>
              <Box flexGrow={1}>
                <Typography variant="overline">Get me here</Typography>
                <AdaptTypography variant="h6">
                  90 Moo 2, San Pha Sak, T.Chor Lea <br />
                  A.Mae Taeng, Chiang Mai 50150
                </AdaptTypography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md>
            <Box display="flex">
              <Box px={2}>
                <Droplet>
                  <MailOutlineIcon />
                </Droplet>
              </Box>
              <Box flexGrow={1}>
                <Typography variant="overline">Get in touch</Typography>
                <AdaptTypography variant="h6">
                  akharawit.aryakom@gamil.com
                </AdaptTypography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md>
            <Box display="flex">
              <Box px={2}>
                <Droplet>
                  <CallOutlinedIcon />
                </Droplet>
              </Box>
              <Box flexGrow={1}>
                <Typography variant="overline">Call me now</Typography>
                <AdaptTypography variant="h6">+6684 407 7469</AdaptTypography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
