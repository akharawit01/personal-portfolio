import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-scroll-parallax";
import withWidth from "@material-ui/core/withWidth";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import FavoriteIcon from "@material-ui/icons/Favorite";

import processWorkLazy from "../assets/crop-man-process-work-lazy.jpg";
import processWork from "../assets/crop-man-process-work.jpg";

const AdaptGridContainer = styled(Grid)`
  @media only screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;
const Section = styled(Element)`
  margin: 150px 0;
  @media only screen and (min-width: 960px) {
    margin: 0;
    padding: 150px 0;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 480px;
  max-width: 400px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);

  @media only screen and (max-width: 960px) {
    && {
      max-width: fit-content;
      box-shadow: none;
    }
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const AboutMe = ({ id, width }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Section name={id}>
      <AdaptGridContainer container justifyContent="center">
        <Grid items xs="auto" sm={12} md="auto" textAlign="center">
          <Parallax
            y={width === "xs" || width === "sm" ? [-10, 30] : [-20, 20]}
            tagOuter="figure"
          >
            <Img
              src={processWork}
              data-src={processWorkLazy}
              alt="process work"
            />
          </Parallax>
        </Grid>
        <Grid items xs sm={12} md>
          <Fade right>
            <Box
              px={{
                xs: 0,
                md: 5,
              }}
            >
              <Box
                mt={{
                  xs: 3,
                  md: 0,
                }}
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                <Typography variant="overline">A bit.</Typography>
                <Typography variant="h3">About me</Typography>
              </Box>
              <Box mt={2}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  indicatorColor="secondary"
                  textColor="secondary"
                  aria-label="icon label tabs example"
                >
                  <Tab
                    icon={<PersonPinIcon />}
                    label="Summary"
                    {...a11yProps(0)}
                  />
                  <Tab
                    icon={<FavoriteIcon />}
                    label="Education"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Typography variant="body1">
                  Innovative Front End Developer with 5 years experience
                  building with special care on the user experience. Passionate
                  for learning new technologies and methodologies. <br />
                  Proficient in HTML, CSS, JavaScript; plus modern libraries and
                  frameworks. Passionate about usability and possess working
                  knowledge of Figma.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box mb={2}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    <Typography gutterBottom>
                      <strong>Rajamangala University of Technology</strong>
                    </Typography>
                    <Typography variant="overline">Graduated 2016</Typography>
                  </Box>
                  <Typography>
                    Bachelor's Degree. <br /> Faculty: Business Administration
                    and Liberal Arts. <br /> Major: Computer Information System.
                  </Typography>
                </Box>
                <Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexWrap="wrap"
                  >
                    <Typography gutterBottom>
                      <strong>Payap Technology and Business Collage</strong>
                    </Typography>
                    <Typography variant="overline">Graduated 2014</Typography>
                  </Box>
                  <Typography>
                    Vocational Diploma & Vocational Certificate. <br /> Faculty:
                    Business Administration. <br /> Major: Business Computer.
                  </Typography>
                </Box>
              </TabPanel>
            </Box>
          </Fade>
        </Grid>
      </AdaptGridContainer>
    </Section>
  );
};
export default withWidth()(AboutMe);
