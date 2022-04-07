import { Divider, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import SideHeader from "../Headers/SideHeader";
import * as Icons from "@dhi/icons";
import { useState } from "react";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledButton,
  StyledSearchContainer,
  StyledTab,
  StyledTabs,
  StyledTabsWrapper,
} from "../../styles/styles";
import TransferList from "../Signals/Signals";

interface LeftSidePanelProps {
  handlepanels?: Function;
}

function LeftSidePanel({ handlepanels }: LeftSidePanelProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [accordion1, setAccordion1] = useState(true);
  const [openSignals, setOpenSignals] = useState(true);

  return (
    <>
      <SideHeader title="Data extraction" />
      <StyledTabsWrapper position="static">
        <StyledTabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event: React.ChangeEvent<{}>, newValue: number) => {
            setActiveTab(newValue);
          }}
        >
          <StyledTab icon={<Icons.BackgroundMap />} label="Maps" />
          <StyledTab icon={<Icons.AreaChart />} label="Area" />
          <StyledTab icon={<Icons.LineChart />} label="Chart" />
          <StyledTab icon={<Icons.Analysis />} label="Analytic" />
          <StyledTab icon={<Icons.Analyze />} label="Statistic" />
        </StyledTabs>
        <Divider />
      </StyledTabsWrapper>
      <StyledAccordion expanded={openSignals} onChange={() => setOpenSignals(!openSignals)}>
        <StyledAccordionSummary expandIcon={<Icons.Down />}>
          <Typography variant="h3">Signals</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledSearchContainer>
            <TextField
              label=""
              placeholder="Filter signals"
              size="small"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Icons.Search />
                  </InputAdornment>
                ),
              }}
            />
          </StyledSearchContainer>
          <TransferList title="Flow" />
          <TransferList title="Overflow" />
          <TransferList title="Water depth" />
          <TransferList title="Area velocity" />
          <TransferList title="Magnetic flow" />
          <TransferList title="Rain gauge" />
          <TransferList title="Water level" />
        </StyledAccordionDetails>
      </StyledAccordion>
      <SideHeader title="Data extraction" />
      <SideHeader title="Data extraction" handlepanels={handlepanels} />
      <SideHeader title="Data extraction" subtitle1="Model type: Flow" handlepanels={handlepanels} />
      <SideHeader
        title="Data extraction"
        subtitle1="Name: DHI-abc"
        subtitle2="Model type: DHI-abc"
        handlepanels={handlepanels}
      />
      <SideHeader title="Data extraction" subtitle1="Model type: DHI-abc" />
      <SideHeader title="Data extraction" subtitle1="Name: DHI-abc" subtitle2="Model type: DHI-abc" />
      <StyledAccordion expanded={accordion1} onChange={() => setAccordion1(!accordion1)}>
        <StyledAccordionSummary expandIcon={<Icons.Down />}>
          <Typography variant="h3">Accordion 1</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<Icons.Down />}>
          <Typography variant="h3">Accordion 2</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </Typography>
        </StyledAccordionDetails>
      </StyledAccordion>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<Icons.Down />}>
          <Typography variant="h3">Accordion 3</Typography>
        </StyledAccordionSummary>
        <StyledAccordionDetails detailsbackgroud={0}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Text"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Text"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledButton variant="contained" color="primary">
                Submit
              </StyledButton>
            </Grid>
          </Grid>
        </StyledAccordionDetails>
      </StyledAccordion>
    </>
  );
}

export default LeftSidePanel;
