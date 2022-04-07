import { PaletteColor, Paper, PaperProps, Slide, SlideProps, styled, Theme, Snackbar } from "@mui/material";
import { Close, Warning, Alert, Info, Checkmark } from "@dhi/icons";
import { GlobalContext } from "../../store/GlobalContext";
import { ActionType } from "../../store/ActionTypes";
import { useContext } from "react";
import { MessageType, EMessageType } from "../../store/Reducers/message";

interface IPaper extends Omit<PaperProps, "snackbartype"> {
  snackbartype?: EMessageType;
  theme?: Theme;
}

type TransitionProps = Omit<SlideProps, "direction">;

const getTypeColor = (snackbartype: string, theme: Theme) => {
  switch (snackbartype) {
    case MessageType.SUCCES:
      return theme.palette.success as PaletteColor;
    case MessageType.WARNING:
      return theme.palette.warning as PaletteColor;
    case MessageType.ERROR:
      return theme.palette.error as PaletteColor;
    case MessageType.INFO:
      return theme.palette.info as PaletteColor;
    default:
      throw new Error(`Invalid "props.snackbarType": ${snackbartype}`);
  }
};

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction="up" />;
};

const StyledPaper = styled(Paper)<IPaper>(({ theme, snackbartype }: { theme: Theme; snackbartype?: string }) => ({
  backgroundColor: snackbartype && getTypeColor(snackbartype, theme).main,
  width: 368,
  display: "flex",
  justifyContent: "space-between",
  padding: "9px 6px",
  color: "white",
  "& .snackIcon": {
    display: "flex",
    padding: "0",
    marginRight: 4,
  },
  "& .snackIcon svg path": {
    fill: "white",
  },
  "& .snackIcon svg path:last-child": {
    fill:
      snackbartype === MessageType.WARNING || snackbartype === MessageType.ERROR
        ? getTypeColor(snackbartype, theme).main
        : "white",
  },
  "& .snackMessage": {
    padding: "10px 0",
    marginRight: 10,
    lineHeight: "1.43",
    flexGrow: 1,
  },
  "& .snackClose": {
    display: "flex",
    cursor: "pointer",
  },
  "& .snackClose svg path": {
    fill: "white",
  },
}));

const CustomSnackbar = () => {
  const [globalState, globalDispatch] = useContext(GlobalContext);

  const closeHandler = (e: Event | React.SyntheticEvent<any, Event>) => {
    if (globalState.message?.messagetype === MessageType.ERROR || e !== null) {
      return;
    }
    globalDispatch({
      type: ActionType.SET_MESSAGE_SHOW,
      data: { messageshow: false },
    });
  };

  return (
    <Snackbar
      TransitionComponent={TransitionUp}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={globalState.message?.messageshow}
      autoHideDuration={2000}
      onClose={closeHandler}
      key={globalState.message?.messagetype}
    >
      <StyledPaper snackbartype={globalState.message?.messagetype}>
        <>
          <div className="snackIcon">
            {globalState.message?.messagetype === MessageType.SUCCES ? <Checkmark /> : null}
            {globalState.message?.messagetype === MessageType.WARNING ? <Warning /> : null}
            {globalState.message?.messagetype === MessageType.ERROR ? <Alert /> : null}
            {globalState.message?.messagetype === MessageType.INFO ? <Info /> : null}
          </div>
          <div className="snackMessage">{globalState.message?.message}</div>
          <div className="snackClose">
            {globalState.message?.messagetype === MessageType.ERROR ? (
              <Close
                onClick={() =>
                  globalDispatch({
                    type: ActionType.SET_MESSAGE_SHOW,
                    data: { messageshow: false },
                  })
                }
              />
            ) : null}
          </div>
        </>
      </StyledPaper>
    </Snackbar>
  );
};
export default CustomSnackbar;
