import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Slide from "react-reveal/Slide";

import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Section = styled(Element)`
  margin: 200px 0;
  @media only screen and (min-width: 960px) {
    margin: 0;
    padding: 200px 0;
  }
`;
const SkillCard = styled.div`
  background: #fff;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 60px;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : "226px")};
  box-shadow: 2px 2px 6px 0px #ccc;
  padding: 18px 25px;
  border-radius: 10px;
  margin: 10px;
  grid-gap: 15px;

  .badge {
    color: #fff;
    background: #f50057;
    border-radius: 30px;
    padding: 3px;
    text-align: center;
  }

  @media only screen and (max-width: 599.8px) {
    font-size: 14px;
    padding: 10px 15px;
  }
`;
const AdaptGridContainer = styled(Grid)`
  @media only screen and (max-width: 1279.8px) {
    flex-direction: column-reverse;
  }
`;

const Skill = ({ width, id }) => {
  return (
    <Section name={id}>
      <AdaptGridContainer container spacing={3}>
        <Grid item xs sm={12} md={12} lg>
          <Box display="flex" flexWrap="wrap">
            {[
              {
                label: "React",
                percent: 90,
              },
              {
                label: "Typescript",
                percent: 80,
              },
              {
                label: "Javascript",
                percent: 80,
              },
              {
                label: "Material UI",
                percent: 90,
              },
              {
                label: "Node Js",
                percent: 80,
              },
              {
                label: "Gatsby",
                percent: 70,
              },
            ].map(({ label, percent }) => (
              <Slide bottom duration={3000} key={label}>
                <SkillCard
                  minWidth={
                    width === "xs"
                      ? Math.floor(Math.random() * 300)
                      : Math.floor(Math.random() * 400)
                  }
                >
                  <strong>{label}</strong>{" "}
                  <span className="badge">{percent}%</span>
                </SkillCard>
              </Slide>
            ))}
          </Box>
        </Grid>
        <Grid item xs="auto" sm={12} md={12} lg="auto">
          <div>
            <Typography variant="overline">Skills.</Typography>
            <Typography variant="h3">Creative Works</Typography>
          </div>
        </Grid>
      </AdaptGridContainer>
    </Section>
  );
};
export default withWidth()(Skill);
