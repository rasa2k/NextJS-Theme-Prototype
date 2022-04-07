import { Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { StyledBox } from "../styles/styles";

const ColorsPage: NextPage = () => {
  return (
    <>
      <Typography variant="h1">Theme-Colors</Typography>
      <Grid container spacing={5} style={{ backgroundColor: "white" }}>
        <Grid item xs={4}>
          <StyledBox palname="primary" palette="main">
            primary.main
          </StyledBox>
          <StyledBox palname="primary" palette="dark">
            primary.dark
          </StyledBox>
          <StyledBox palname="primary" palette="light">
            primary.light
          </StyledBox>
        </Grid>
        <Grid item xs={4}>
          <StyledBox palname="secondary" palette="main">
            secondary.main
          </StyledBox>
          <StyledBox palname="secondary" palette="dark">
            secondary.dark
          </StyledBox>
          <StyledBox palname="secondary" palette="light">
            secondary.light
          </StyledBox>
        </Grid>
        <Grid item xs={4}>
          <StyledBox palname="darkGrey" palette="main">
            darkGrey.main
          </StyledBox>
          <StyledBox palname="darkGrey" palette="dark">
            darkGrey.dark
          </StyledBox>
          <StyledBox palname="darkGrey" palette="light">
            darkGrey.light
          </StyledBox>
        </Grid>

        <Grid item xs={6}>
          <StyledBox palname="mediumGrey" palette="main">
            mediumGrey.main
          </StyledBox>
          <StyledBox palname="mediumGrey" palette="dark">
            mediumGrey.dark
          </StyledBox>
          <StyledBox palname="mediumGrey" palette="light">
            mediumGrey.light
          </StyledBox>
        </Grid>
        <Grid item xs={6}>
          <StyledBox palname="lightGrey" palette="main">
            lightGrey.main
          </StyledBox>
          <StyledBox palname="lightGrey" palette="dark">
            lightGrey.dark
          </StyledBox>
          <StyledBox palname="lightGrey" palette="light">
            lightGrey.light
          </StyledBox>
        </Grid>

        {/*<Grid item xs={4}>
          <StyledBox palname="ultimate" palette="main">
            ultimate.main
          </StyledBox>
          <StyledBox palname="ultimate" palette="dark">
            ultimate.dark
          </StyledBox>
          <StyledBox palname="ultimate" palette="light">
            ultimate.light
          </StyledBox>
        </Grid>
        */}

        <Grid item xs={4}>
          <StyledBox palname="warning" palette="main">
            warning.main
          </StyledBox>
          <StyledBox palname="warning" palette="dark">
            warning.dark
          </StyledBox>
          <StyledBox palname="warning" palette="light">
            warning.light
          </StyledBox>
        </Grid>

        <Grid item xs={4}>
          <StyledBox palname="error" palette="main">
            error.main
          </StyledBox>
          <StyledBox palname="error" palette="dark">
            error.dark
          </StyledBox>
          <StyledBox palname="error" palette="light">
            error.light
          </StyledBox>
        </Grid>

        <Grid item xs={6}>
          <StyledBox palname="info" palette="main">
            info.main
          </StyledBox>
          <StyledBox palname="info" palette="dark">
            info.dark
          </StyledBox>
          <StyledBox palname="info" palette="light">
            info.light
          </StyledBox>
        </Grid>
        <Grid item xs={6}>
          <StyledBox palname="success" palette="main">
            success.main
          </StyledBox>
          <StyledBox palname="success" palette="dark">
            success.dark
          </StyledBox>
          <StyledBox palname="success" palette="light">
            success.light
          </StyledBox>
        </Grid>
      </Grid>
    </>
  );
};

export default ColorsPage;
