import { NotificationBell } from "@dhi/icons";
import { styled, Box, Theme, PaletteColorOptions } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";

const NotificationIconWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  position: "relative",
  width: 50,
  height: 56,
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  "&:hover,&.active": {
    background: theme.palette["mediumGrey" as keyof PaletteColorOptions]["main"],
  },
  "& .notificationsbell": {
    borderRadius: "50%",
    background: theme.palette["secondary" as keyof PaletteColorOptions]["main"],
    width: 8,
    height: 8,
    position: "absolute",
    top: 20,
    right: 18,
  },
}));

function NotificationIcon(props: { onClick: any; className: string }) {
  const [globalState] = useContext(GlobalContext);
  return (
    <NotificationIconWrapper className={props.className} onClick={props.onClick}>
      {globalState.notifications?.length! > 0 ? (
        <>
          <NotificationBell />
          <div className="notificationsbell"></div>
        </>
      ) : (
        <NotificationBell onClick={props.onClick} />
      )}
    </NotificationIconWrapper>
  );
}

export default NotificationIcon;
