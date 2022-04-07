import React from "react";
import NotificationIcon from "./NotificationIcon";
import {
  Box,
  Button,
  Grid,
  Link,
  PaletteColorOptions,
  styled,
  Theme,
  Typography,
  Menu,
  MenuItem,
  BoxProps,
} from "@mui/material";
import { NotificationType, ENotificationTypes } from "../../store/Reducers/notification";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import { ActionType } from "../../store/ActionTypes";

interface INotificationType extends Omit<BoxProps, "notificationtype"> {
  notificationtype?: ENotificationTypes;
  theme?: Theme;
}

const getTypeBGColor = (notificationtype: string, theme: Theme) => {
  switch (notificationtype) {
    case NotificationType.NEWS:
      return theme.palette["success" as keyof PaletteColorOptions]["light"];
    case NotificationType.WARNING:
      return theme.palette["warning" as keyof PaletteColorOptions]["main"];
    case NotificationType.ERROR:
      return theme.palette["error" as keyof PaletteColorOptions]["main"];
    case NotificationType.MAINTENANCE:
      return theme.palette["info" as keyof PaletteColorOptions]["light"];
    default:
      throw new Error(`Invalid "props.snackbarType": ${notificationtype}`);
  }
};
const getTypeFontColor = (notificationtype: string, theme: Theme) => {
  switch (notificationtype) {
    case NotificationType.NEWS:
      return theme.palette["primary" as keyof PaletteColorOptions]["main"];
    case NotificationType.WARNING:
      return theme.palette["lightGrey" as keyof PaletteColorOptions]["main"];
    case NotificationType.ERROR:
      return theme.palette["lightGrey" as keyof PaletteColorOptions]["main"];
    case NotificationType.MAINTENANCE:
      return theme.palette["primary" as keyof PaletteColorOptions]["main"];
    default:
      throw new Error(`Invalid "props.snackbarType": ${notificationtype}`);
  }
};
const StyledMenu = styled(Menu)(() => ({
  "& .MuiButtonBase-root": {
    display: "block",
  },
}));
const NotificationsWrapper = styled(Box)(() => ({
  maxHeight: 500,
  "& .MuiTypography-h4": {
    padding: "14px 0",
  },
}));
const NotificationItem = styled(Box)(() => ({
  fontSize: 13,
}));
const NotificationHeader = styled(Box)(() => ({
  maxHeight: 500,
}));
const NotificationBody = styled(Box)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette["lightGrey" as keyof PaletteColorOptions]["main"],
  padding: 8,
  position: "relative",
}));
const NotificationBodyText = styled(Box)(() => ({
  whiteSpace: "normal",
  padding: "10px 0",
}));
const NotificationBodyLink = styled(Link)(() => ({
  padding: "10px 0",
  fontSize: 12,
}));
const NotificationBodyTitle = styled(Box)(() => ({
  width: 155,
  fontWeight: 700,
}));
const NotificationBodyType = styled(Box)<INotificationType>(
  ({ theme, notificationtype }: { theme: Theme; notificationtype?: string }) => ({
    position: "absolute",
    top: 6,
    right: 4,
    padding: "2px 4px",
    borderRadius: 6,
    fontWeight: 400,
    backgroundColor: notificationtype && getTypeBGColor(notificationtype, theme),
    color: notificationtype && getTypeFontColor(notificationtype, theme),
  })
);

function Notifications() {
  const [globalState, globalDispatch] = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <NotificationIcon className={anchorEl ? "active" : ""} onClick={handleClick}></NotificationIcon>
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
        <NotificationsWrapper>
          <Grid container spacing={3} style={{ padding: "0 16px" }}>
            <Grid item xs={6}>
              <Typography variant="h4">Notifications</Typography>
            </Grid>
            <Grid item xs={6} style={{ display: "flex", justifyContent: "right" }}>
              {globalState.notifications?.length! > 0 ? (
                <Button
                  variant="text"
                  onClick={() => {
                    globalDispatch({
                      type: ActionType.REMOVEALL_NOFITICATION_ITEM,
                    });
                  }}
                >
                  Clear All
                </Button>
              ) : null}
            </Grid>
          </Grid>

          {globalState.notifications?.length! > 0 ? (
            globalState.notifications?.map((item, i) => (
              <div key={i}>
                <MenuItem>
                  <NotificationItem>
                    <NotificationHeader>{new Date(item.time).toLocaleString("da-DK")}</NotificationHeader>
                    <NotificationBody>
                      <NotificationBodyTitle>{item.title}</NotificationBodyTitle>
                      <NotificationBodyType notificationtype={item.type}>{item.type}</NotificationBodyType>
                      <NotificationBodyText>{item.message}</NotificationBodyText>
                      {item.link && item.type !== NotificationType.ERROR && (
                        <NotificationBodyLink href={item.link}>{item.linkLabel}</NotificationBodyLink>
                      )}
                    </NotificationBody>
                  </NotificationItem>
                </MenuItem>
              </div>
            ))
          ) : (
            <MenuItem>
              <NotificationItem>
                <NotificationBody>No notifications</NotificationBody>
              </NotificationItem>
            </MenuItem>
          )}
        </NotificationsWrapper>
      </StyledMenu>
    </>
  );
}

export default Notifications;
