import { Checkbox, FormControlLabel, Grid, Switch, TextField, Typography } from "@mui/material";
import SideHeader from "../Headers/SideHeader";
import * as Icons from "@dhi/icons";
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from "../../styles/styles";
import { useState } from "react";
import StartProcess from "../Processes/StartProcess";

interface RightSidePanelProps {
  handlepanels?: Function;
}

function RightSidePanel({ handlepanels }: RightSidePanelProps) {
  const [accordion1, setAccordion1] = useState(false);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(true);

  return (
    <>
      <SideHeader title="Data extraction" handlepanels={handlepanels} />

      <StyledAccordion defaultExpanded={true} expanded={accordion1}>
        <StyledAccordionSummary>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            labelPlacement="start"
            control={
              <Switch
                checked={accordion1}
                onChange={() => setAccordion1(!accordion1)}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label={<Typography variant="h3">Accordion 1</Typography>}
          />
        </StyledAccordionSummary>
        <StyledAccordionDetails detailsbackgroud={0}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion defaultExpanded={true} expanded={accordion2}>
        <StyledAccordionSummary>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            labelPlacement="end"
            control={
              <Switch
                checked={accordion2}
                color="primary"
                size="small"
                onChange={() => setAccordion2(!accordion2)}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label={<Typography variant="h3">Accordion 2</Typography>}
          />
        </StyledAccordionSummary>
        <StyledAccordionDetails detailsbackgroud={0}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion defaultExpanded={true} expanded={accordion3}>
        <StyledAccordionSummary>
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            labelPlacement="start"
            control={
              <Checkbox
                checked={accordion3}
                onClick={() => setAccordion3(!accordion3)}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label={<Typography variant="h3">Accordion 3</Typography>}
          />
        </StyledAccordionSummary>
        <StyledAccordionDetails detailsbackgroud={0}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>

      <StyledAccordion defaultExpanded={accordion4} expanded={accordion4} onChange={() => setAccordion4(!accordion4)}>
        <StyledAccordionSummary expandIcon={<Icons.Down />}>
          <Typography variant="h3">Accordion 4</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails detailsbackgroud={0}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Number"
                type="number"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Number"
                type="number"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Text"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Text"
                type="text"
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <StartProcess />
            </Grid>
          </Grid>
        </StyledAccordionDetails>
      </StyledAccordion>
    </>
  );
}

export default RightSidePanel;
