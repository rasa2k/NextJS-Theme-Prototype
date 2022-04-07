import type { NextPage } from "next";
import { useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";
import { ActionType } from "../store/ActionTypes";
import { MessageType } from "../store/Reducers/message";
import { Box, Grid, Typography } from "@mui/material";
import { StyledButton, StyledDrawer, AppColumnsWrapper } from "../styles/styles";
import { CustomDialog } from "../components/Dialog/Dialog";
import BasicTable from "../components/BasicTable/BasicTable";
import LeftSidePanel from "../components/SidePanels/LeftSidePanel";
import RightSidePanel from "../components/SidePanels/RightSidePanel";

const PanelsPage: NextPage = () => {
  const [, globalDispatch] = useContext(GlobalContext);
  const [openPanel, setOpenPanel] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <AppColumnsWrapper openpanels={openPanel ? 0 : 1}>
        <StyledDrawer variant="persistent" anchor="left" open={openPanel} onClose={() => setOpenPanel(!openPanel)}>
          <LeftSidePanel handlepanels={setOpenPanel} />
        </StyledDrawer>
        <Box>
          <Typography variant="h1">Panels</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledButton onClick={() => setOpenPanel(!openPanel)} variant="contained" color="primary">
                Open panels
              </StyledButton>
              <StyledButton onClick={() => setOpenDialog(!openDialog)} variant="contained" color="secondary">
                Open dialog
              </StyledButton>
            </Grid>
            <Grid item xs={12}>
              <StyledButton
                onClick={() => {
                  globalDispatch({
                    type: ActionType.SET_MESSAGE,
                    data: {
                      message: `This is a ${MessageType.SUCCES} message!!`,
                      messageshow: true,
                      messagetype: MessageType.SUCCES,
                    },
                  });
                }}
              >
                Open snackbar success
              </StyledButton>
              <StyledButton
                onClick={() => {
                  globalDispatch({
                    type: ActionType.SET_MESSAGE,
                    data: {
                      message: `This is a ${MessageType.WARNING} message!!`,
                      messageshow: true,
                      messagetype: MessageType.WARNING,
                    },
                  });
                }}
              >
                Open snackbar warning
              </StyledButton>
              <StyledButton
                onClick={() => {
                  globalDispatch({
                    type: ActionType.SET_MESSAGE,
                    data: {
                      message: `This is a ${MessageType.ERROR} message!!`,
                      messageshow: true,
                      messagetype: MessageType.ERROR,
                    },
                  });
                }}
              >
                Open snackbar error
              </StyledButton>
              <StyledButton
                onClick={() => {
                  globalDispatch({
                    type: ActionType.SET_MESSAGE,
                    data: {
                      message: `This is a ${MessageType.INFO} message!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                      messageshow: true,
                      messagetype: MessageType.INFO,
                    },
                  });
                }}
              >
                Open snackbar info
              </StyledButton>
              {/* <pre>{JSON.stringify(globalState)}</pre> */}
            </Grid>
          </Grid>
        </Box>
        <StyledDrawer variant="persistent" anchor="right" open={openPanel} onClose={() => setOpenPanel(!openPanel)}>
          <RightSidePanel handlepanels={setOpenPanel} />
        </StyledDrawer>
      </AppColumnsWrapper>
      <CustomDialog dialogTitle="Dialog" dialogContent={<BasicTable />} open={openDialog} setOpen={setOpenDialog} />
    </>
  );
};

export default PanelsPage;
