import { Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import { StyledButton } from "../styles/styles";

const ButtonsPage: NextPage = () => {
  return (
    <>
      <Typography variant="h1">Buttons</Typography>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <StyledButton variant="contained">default</StyledButton>
          <StyledButton variant="contained" color="primary">
            primary
          </StyledButton>
          <StyledButton variant="contained" color="secondary">
            secondary
          </StyledButton>
          <StyledButton variant="contained" disabled>
            disabled
          </StyledButton>
        </Grid>
        <Grid item xs={4}>
          <StyledButton variant="contained" palname="error">
            error
          </StyledButton>
          <StyledButton variant="contained" palname="success">
            success
          </StyledButton>
          <StyledButton variant="contained" palname="warning">
            warning
          </StyledButton>
          <StyledButton variant="contained" palname="warning" disabled>
            warning disabled
          </StyledButton>
        </Grid>
        <Grid item xs={4}>
          <StyledButton variant="contained" palname="lightGrey">
            lightGrey
          </StyledButton>
          <StyledButton variant="contained" palname="mediumGrey">
            mediumGrey
          </StyledButton>
          <StyledButton variant="contained" palname="darkGrey">
            darkGrey
          </StyledButton>
          <StyledButton variant="contained" palname="darkGrey" disabled>
            darkGrey disabled
          </StyledButton>
        </Grid>

        <Grid item xs={3}>
          <StyledButton variant="outlined">default</StyledButton>
        </Grid>
        <Grid item xs={3}>
          <StyledButton variant="outlined" color="primary">
            primary
          </StyledButton>
        </Grid>
        <Grid item xs={3}>
          <StyledButton variant="outlined" color="secondary">
            secondary
          </StyledButton>
        </Grid>
        <Grid item xs={3}>
          <StyledButton variant="outlined" disabled>
            disabled
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ButtonsPage;
