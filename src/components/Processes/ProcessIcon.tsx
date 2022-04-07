import { PaletteColorOptions, Box, styled, Theme } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalContext";

export const ProcessSpinner = styled(Box)(({ theme }: { theme: Theme }) => ({
  width: 50,
  height: 56,
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  "&:hover,&.active": {
    background: theme.palette["mediumGrey" as keyof PaletteColorOptions]["main"],
  },
  "& > div": {
    boxSizing: "content-box",
    borderStyle: "solid",
    borderColor: theme.palette.secondary.main,
    borderTopColor: theme.palette.secondary.light,
    borderWidth: 3,
    borderRadius: "50%",
    animation: "spinEffect 1.5s linear infinite",
    width: 16,
    height: 16,
    lineHeight: 56,
    cursor: "pointer",
  },
  "@keyframes spinEffect": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

function ProcessIcon(props: { onClick: any; className: string }) {
  const [globalState] = useContext(GlobalContext);
  return (
    <>
      {globalState.progresses?.length! > 0 ? (
        <ProcessSpinner className={props.className} onClick={props.onClick}>
          <div />
        </ProcessSpinner>
      ) : null}
    </>
  );
}

export default ProcessIcon;
