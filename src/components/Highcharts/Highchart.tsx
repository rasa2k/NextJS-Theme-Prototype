import * as React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AppColumnsTwoWrapper, StyledDrawer } from "../../styles/styles";
import LeftSidePanel from "../../components/SidePanels/LeftSidePanel";
import { Box, Button, ButtonGroup, styled, Alert } from "@mui/material";

if (typeof Highcharts === "object") {
  require("highcharts/modules/exporting")(Highcharts);
}

export const HighchartGrid = styled(Box)(() => ({
  height: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  "& .MuiButtonGroup-root": {
    justifyContent: "center",
  },
  "& .MuiButtonBase-root": {
    height: "1.5rem",
    margin: "10px 0",
    fontSize: 11,
    borderWidth: 1,
  },
  "& .MuiButtonBase-root:not(:last-child):hover": {
    borderRightColor: "transparent",
  },
}));

const options: Highcharts.Options = {
  title: {
    text: "",
  },
  series: [
    {
      type: "line",
      data: [],
    },
  ],
  exporting: {
    buttons: {
      contextButton: {
        menuItems: ["printChart", "separator", "downloadPNG", "downloadPDF"],
      },
    },
  },
  chart: {
    zoomType: "x",
    resetZoomButton: {
      position: {
        x: -25,
        y: 0,
      },
    },
    events: {
      load() {
        const chart = this;
        chart.showLoading("Loading data...");
        setTimeout(function () {
          chart.hideLoading();
          chart.series[0].setData([1, 2, 3, 4, 5, 6]);
        }, 3000);
        setTimeout(this.reflow.bind(this), 0);
      },
    },
  },
};

const Highchart = (props: HighchartsReact.Props) => {
  const [openPanel, setOpenPanel] = React.useState(true);
  const chartComponentRef1 = React.useRef<HighchartsReact.RefObject>(null);
  const chartComponentRef2 = React.useRef<HighchartsReact.RefObject>(null);
  const chartComponentRef3 = React.useRef<HighchartsReact.RefObject>(null);
  const chartComponentRef4 = React.useRef<HighchartsReact.RefObject>(null);

  return (
    <AppColumnsTwoWrapper>
      <StyledDrawer variant="persistent" anchor="left" open={openPanel} onClose={() => setOpenPanel(!openPanel)}>
        <LeftSidePanel handlepanels={setOpenPanel} />
      </StyledDrawer>

      <HighchartGrid>
        <Alert severity="info">This is an info alert — check it out!</Alert>

        <ButtonGroup variant="outlined" color="primary" size="small">
          <Button variant="contained">Sync graphs</Button>
          <Button>1 WEEK</Button>
          <Button>1 MONTH</Button>
          <Button>1 YEAR</Button>
        </ButtonGroup>

        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef1}
          containerProps={{ style: { height: "100%" } }}
          {...props}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef2}
          containerProps={{ style: { height: "100%" } }}
          {...props}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef3}
          containerProps={{ style: { height: "100%" } }}
          {...props}
        />
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef4}
          containerProps={{ style: { height: "100%" } }}
          {...props}
        />
      </HighchartGrid>
    </AppColumnsTwoWrapper>
  );
};

export default Highchart;
