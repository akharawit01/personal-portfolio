import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Section = styled(Element)``;
const Ul = styled.ul`
  li {
    text-align: left;
    padding: 7px 0;
  }
`;
const TypoTitle = styled(Typography)`
  && {
    font-weight: bold;
    color: #f50057;
  }
`;
const TypoSupTitle = styled(Typography)`
  && {
    font-weight: bold;
  }
`;
const AdaptTimelineItem = styled(TimelineItem)`
  && {
    position: relative;

    @media only screen and (max-width: 960px) {
      flex-direction: row;
      .MuiTimelineOppositeContent-root {
        position: absolute;
        left: 40px;
        top: 8px;
      }

      .MuiTimelineContent-root {
        margin-top: 50px;
        text-align: left;
      }
    }
  }
`;

export default function Experience({ id }) {
  const classes = useStyles();

  return (
    <Section name={id}>
      <Box textAlign="center" py={4}>
        <Typography variant="overline">Working with.</Typography>
        <Typography variant="h3" gutterBottom>
          Experience
        </Typography>
        <Typography variant="body1" gutterBottom>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem, It doesn’t
          matter how great your product or service is if your copy does not
          captivate your audience.
        </Typography>
      </Box>

      <div>
        <Timeline align="alternate">
          <AdaptTimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Nov 2018 - Present, Chiang Mai
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Fade bottom>
                <Paper elevation={2} className={classes.paper}>
                  <TypoTitle variant="h6" component="h1">
                    20Scoops CNX
                  </TypoTitle>
                  <TypoSupTitle variant="button" display="block" gutterBottom>
                    Front End Developer
                  </TypoSupTitle>
                  <Ul>
                    <li>
                      Building stable and maintainable codebases using
                      React/Gatsby and performance testing with Jest and React
                      Testing Library, convert concept design from Figma.
                    </li>
                    <li>
                      Optimizing web pages for maximum speed and scalability
                      with Lighthouse.
                    </li>
                    <li>
                      Setting up a CI/CD pipeline for project, push the code to
                      Github, Github workflow CI/CD tool, AWS S3 for storing the
                      project and Cloudflare CDN.
                    </li>
                    <li>
                      Directly collaborated with Product Owner to work on the
                      website redesign, actively giving suggestions for an
                      improvement of UI and UX experience
                    </li>
                  </Ul>
                </Paper>
              </Fade>
            </TimelineContent>
          </AdaptTimelineItem>
          <AdaptTimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Aug 2017 - Oct 2018, Chiang Mai
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <Brightness7Icon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Fade bottom>
                <Paper elevation={2} className={classes.paper}>
                  <TypoTitle variant="h6" component="h1">
                    Lannasoftworks.
                  </TypoTitle>
                  <TypoSupTitle variant="button" display="block" gutterBottom>
                    Front End Developer
                  </TypoSupTitle>
                  <Ul>
                    <li>
                      Building stable and maintainable codebases using
                      Angular/Gulpjs, Bootstrap4, convert concept design from
                      Adobe Photoshop/Adobe Illustrator to responsive website.
                    </li>
                  </Ul>
                </Paper>
              </Fade>
            </TimelineContent>
          </AdaptTimelineItem>
          <AdaptTimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Aug 2015 - Oct 2017, Chiang Mai
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <AirplanemodeActiveIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Fade bottom>
                <Paper elevation={2} className={classes.paper}>
                  <TypoTitle variant="h6" component="h1">
                    Chiangmai Zone & Freelance
                  </TypoTitle>
                  <TypoSupTitle variant="button" display="block" gutterBottom>
                    Front End Developer
                  </TypoSupTitle>
                  <Ul>
                    <li>
                      Worked together with the CRO and marketing team in order
                      to develop, convert concept design from Adobe
                      Photoshop/Adobe Illustrator to responsive website, HTML5,
                      CSS3, Bootstrap4, Javascript, jQuery, PHP, MySQL, Laravel
                      and Yii.
                    </li>
                    <li>
                      Joined client meeting to learn about development and
                      project scopes.
                    </li>
                  </Ul>
                </Paper>
              </Fade>
            </TimelineContent>
          </AdaptTimelineItem>
        </Timeline>
      </div>
    </Section>
  );
}
