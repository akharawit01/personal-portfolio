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
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
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
                Nov 2018 - Present
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
                      Develop Website with HTML5, CSS3, Javascript, jQuery, PHP,
                      MySQL and Yii2.
                    </li>
                    <li>
                      Convert concept design from Adobe Photoshop/Adobe
                      Illustrator to responsive website.
                    </li>
                    <li>
                      Analyze and Complete detailed programming and development
                      tasks for Front End as well as Back End coding.
                    </li>
                    <li>
                      Carry out quality assurance tests to discover errors and
                      optimize usability.
                    </li>
                  </Ul>
                </Paper>
              </Fade>
            </TimelineContent>
          </AdaptTimelineItem>
          <AdaptTimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Aug 2017 - Oct 2018
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
                      Develop Website with HTML5, CSS3, Javascript, jQuery and
                      Angular 4+.
                    </li>
                    <li>
                      Convert concept design from Adobe Photoshop/Adobe
                      Illustrator to responsive website.
                    </li>
                  </Ul>
                </Paper>
              </Fade>
            </TimelineContent>
          </AdaptTimelineItem>
          <AdaptTimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Dec 2016 - Aug 2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <AirplanemodeActiveIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Fade bottom>
                <Paper elevation={2} className={classes.paper}>
                  <TypoTitle variant="h6" component="h1">
                    Freelance
                  </TypoTitle>
                  <TypoSupTitle variant="button" display="block" gutterBottom>
                    Front End Developer
                  </TypoSupTitle>
                  <Ul>
                    <li>
                      Develop Website with HTML5, CSS3, Javascript, jQuery, PHP,
                      MySQL and Yii2.
                    </li>
                    <li>
                      Convert concept design from Adobe Photoshop/Adobe
                      Illustrator to responsive website.
                    </li>
                    <li>
                      Analyze and Complete detailed programming and development
                      tasks for Front End as well as Back End coding.
                    </li>
                    <li>
                      Carry out quality assurance tests to discover errors and
                      optimize usability.
                    </li>
                  </Ul>
                </Paper>
              </Fade>
            </TimelineContent>
          </AdaptTimelineItem>
          <AdaptTimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Aug 2015 - Nov 2016
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <PlayArrowIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Fade bottom>
                <Paper elevation={2} className={classes.paper}>
                  <TypoTitle variant="h6" component="h1">
                    Chiangmai Zone
                  </TypoTitle>
                  <TypoSupTitle variant="button" display="block" gutterBottom>
                    Front End & Back End Developer
                  </TypoSupTitle>
                  <Ul>
                    <li>
                      Joined client meeting to learn about development and
                      project scopes.
                    </li>
                    <li>
                      Develop Website with HTML5, CSS3, Bootstrap4, Javascript,
                      jQuery, PHP, MySQL, Laravel and Yii.
                    </li>
                    <li>
                      Convert concept design from Adobe Photoshop/Adobe
                      Illustrator to responsive website.
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
