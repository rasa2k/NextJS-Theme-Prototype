import React from "react";
import ProcessIcon from "./ProcessIcon";
import { Menu, MenuItem, LinearProgress, styled, Typography } from "@mui/material";

import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import { ActionType } from "../../store/ActionTypes";
import { NotificationType } from "../../store/Reducers/notification";
import { MessageType } from "../../store/Reducers/message";

const StyledMenu = styled(Menu)(() => ({
  "& .MuiButtonBase-root": {
    display: "block",
  },
}));

function Processes() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      globalState.progresses?.map((item) => {
        const diff = Math.random() * 50;
        const oldProgress = item.progressValue;
        const newProgress = Math.min(item.progressValue + diff, 100);
        const notificationType = Object.values(NotificationType);

        if (oldProgress === 100) {
          globalDispatch({
            type: ActionType.REMOVE_PROGRESS_ITEM,
            data: { ...item },
          });

          const randomNotificationType = Math.floor(Math.random() * notificationType.length);

          globalDispatch({
            type: ActionType.SET_MESSAGE,
            data: {
              message:
                notificationType[randomNotificationType] === NotificationType.ERROR
                  ? `${item.title} has finished with ${MessageType.ERROR}`
                  : `${item.title} has finished with ${MessageType.SUCCES}`,
              messageshow: true,
              messagetype:
                notificationType[randomNotificationType] === NotificationType.ERROR
                  ? MessageType.ERROR
                  : MessageType.SUCCES,
            },
          });

          globalDispatch({
            type: ActionType.ADD_NOFITICATION_ITEM,
            data: {
              time: Date.now(),
              title: item.title,
              id: item.id,
              message:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque dignissim tristique eu nunc, sit nullam nunc.",
              type: notificationType[randomNotificationType],
              link: "https://deeplinkintoresult.com",
              linkLabel: "Open result",
            },
          });
        }

        globalDispatch({
          type: ActionType.UPDATE_PROGRESS_ITEM,
          data: { ...item, progressValue: newProgress },
        });
        return null;
      });
    }, 2000);

    if (globalState.progresses?.length! === 0) {
      setAnchorEl(null);
    }
    return () => {
      clearInterval(timer);
    };
  }, [globalState.progresses, globalDispatch]);

  return (
    <>
      <ProcessIcon className={anchorEl ? "active" : ""} onClick={handleClick}></ProcessIcon>
      <StyledMenu
        autoFocus={false}
        PaperProps={{
          style: {
            transform: "translateX(-125px) translateY(45px)",
            width: 300,
            borderRadius: 0,
            backgroundColor: "#DBE4E9",
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={anchorEl}
        keepMounted={false}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {globalState.progresses?.length! > 0
          ? globalState.progresses?.map((item) => (
              <div key={item.id}>
                <MenuItem>
                  <Typography variant="caption">{item.title}</Typography>
                  <LinearProgress
                    color="secondary"
                    style={{ width: "100%", borderRadius: 4, height: 8 }}
                    variant="determinate"
                    value={item.progressValue}
                  />
                </MenuItem>
              </div>
            ))
          : null}
      </StyledMenu>
    </>
  );
}

export default Processes;
