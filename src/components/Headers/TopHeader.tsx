import { Typography, AppBar, Toolbar } from "@mui/material";
import TopNavigation from "../Navigation/TopNavigation";
import Image from "next/image";
import { AppBarWrapper } from "../../styles/styles";
import Processes from "../Processes/Processes";
import Notifications from "../Notifications/Notifications";

interface HeaderProps {
  appName: string;
}
function Header({ appName }: HeaderProps) {
  return (
    <AppBarWrapper>
      <AppBar elevation={0}>
        <Toolbar>
          <Image src="/logo.svg" alt="Logo" width={46} height={46} />
          <Typography variant="button" className="app-name">
            {appName}
          </Typography>
          <Processes />
          <Notifications />
          <TopNavigation />
        </Toolbar>
      </AppBar>
    </AppBarWrapper>
  );
}

export default Header;
