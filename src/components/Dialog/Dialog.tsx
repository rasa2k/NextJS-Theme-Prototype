import { CloseS } from "@dhi/icons";
import { styled, Dialog, Typography, Button, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "40vw",
    maxWidth: "720px",
    maxHeight: "500px",
    padding: 0,
  },
});
const StyledDialogTitle = styled(DialogTitle)({
  minHeight: "64px",
  display: "flex",
  alignItems: "center",
  "& .MuiTypography-root": {
    padding: "0 32px",
  },
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.16)",
  zIndex: 1,
});
const StyledDialogCloseButton = styled(Button)({
  position: "absolute",
  top: 0,
  right: 0,
  padding: 0,
  margin: 0,
  minWidth: 40,
  minHeight: 40,
  height: 40,
  width: 40,
});
const StyledDialogContent = styled(DialogContent)({
  minHeight: "150px",
  padding: "16px 32px !important",
  border: 0,
  "&::before": {
    boxShadow: "none",
  },
  "&::after": {
    boxShadow: "none",
  },
});
const StyledDialogActions = styled(DialogActions)({
  minHeight: "72px",
  padding: "0 32px !important",
  margin: 0,
  boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.16)",
  zIndex: 1,
});

export interface DialogTitleProps {
  children: React.ReactNode;
  onClose: () => void;
}

const CustomDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose } = props;
  return (
    <StyledDialogTitle>
      <Typography variant="h3">{children}</Typography>
      {onClose ? (
        <StyledDialogCloseButton onClick={onClose}>
          <CloseS />
        </StyledDialogCloseButton>
      ) : null}
    </StyledDialogTitle>
  );
};

const CustomDialog = (props: {
  dialogTitle?: string;
  dialogContent: any;
  open: boolean;
  setOpen: Function;
  buttonText?: string;
}) => {
  const { open, setOpen, dialogTitle, dialogContent, buttonText } = props;

  return (
    <StyledDialog onClose={() => setOpen(!open)} open={open}>
      <CustomDialogTitle onClose={() => setOpen(!open)}>{dialogTitle ? dialogTitle : ""}</CustomDialogTitle>
      <StyledDialogContent dividers>{dialogContent}</StyledDialogContent>
      <StyledDialogActions>
        <Button autoFocus onClick={() => setOpen(!open)} variant="contained" color="primary">
          {buttonText ? buttonText : "OK"}
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};
export { CustomDialog };
