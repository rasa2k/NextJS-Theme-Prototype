import {
  Box,
  Button,
  PaletteColorOptions,
  styled,
  Theme,
  ButtonProps,
  BoxProps,
  SimplePaletteColorOptions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Tabs,
  Tab,
  AccordionDetailsProps,
  List,
  ListItemButton,
  Drawer,
} from "@mui/material";

interface IButton extends Omit<ButtonProps, "palname"> {
  palname?: "error" | "success" | "warning" | "lightGrey" | "mediumGrey" | "darkGrey";
  theme?: Theme;
}

interface IAccordionDetails extends Omit<AccordionDetailsProps, "detailsbackgroud"> {
  detailsbackgroud?: 0 | 1;
  theme?: Theme;
}

interface IBox extends Omit<BoxProps, "palname"> {
  palname?:
    | "primary"
    | "secondary"
    | "darkGrey"
    | "mediumGrey"
    | "lightGrey"
    | "ultimate"
    | "warning"
    | "error"
    | "info"
    | "success";
  palette?: "main" | "dark" | "light";
  theme?: Theme;
}

function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return r + "," + g + "," + b;
  }
  return null;
}

export const AppBarWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
  "& .MuiToolbar-root": {
    minHeight: 56,
  },
  "& .app-name": {
    fontSize: 14,
    fontWeight: 700,
    color: theme.palette.primary.dark,
    margin: "0 15px",
    display: "flex",
    flexGrow: 1,
  },
}));

export const AppBodyWrapper = styled(Box)(() => ({
  position: "relative",
  top: "60px",
  height: "calc(100vh - 60px)",
  overflowX: "hidden",
}));

export const StyledDrawer = styled(Drawer)(({ anchor }: { anchor?: string }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
    width: "360px",
    boxShadow: anchor === "left" ? "4px 0 8px 0 rgba(0, 0, 0, 0.15)" : "-4px 0 8px 0 rgba(0, 0, 0, 0.15)",
  },
}));

export const AppColumnsWrapper = styled(Box)(({ openpanels }: { openpanels?: number }) => ({
  display: "grid",
  height: "calc(100vh - 60px)",
  gridTemplateColumns: openpanels === 1 ? "0 100vw 0" : "360px calc(100vw - 720px) 360px",
}));
export const AppColumnsTwoWrapper = styled(Box)(() => ({
  display: "grid",
  height: "calc(100vh - 60px)",
  gridTemplateColumns: "360px calc(100vw - 360px)",
}));

export const StyledButton = styled(Button)<IButton>(({ palname, theme }: { palname?: string; theme: Theme }) => ({
  width: "100%",
  textTransform: "uppercase",
  backgroundColor: palname ? theme.palette[palname as keyof PaletteColorOptions]["main"] : "inherite",
  color: palname ? theme.palette[palname as keyof PaletteColorOptions]["contrastText"] : "inherite",
  "&:hover": {
    backgroundColor: palname ? theme.palette[palname as keyof PaletteColorOptions]["dark"] : "inherite",
  },
  "&:disabled": {
    backgroundColor: palname ? theme.palette[palname as keyof PaletteColorOptions]["light"] : "inherite",
  },
}));

export const StyledBox = styled(Box)<IBox>(
  ({ palname, palette, theme }: { palname?: string; palette?: string; theme: Theme }) => ({
    width: "100%",
    height: "45px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    lineHeight: theme.typography.body2.lineHeight,
    textAlign: "center",
    color: palette
      ? theme.palette[palname as keyof PaletteColorOptions]["contrastText" as keyof SimplePaletteColorOptions]
      : theme.palette.primary.contrastText,
    backgroundColor: palette
      ? theme.palette[palname as keyof PaletteColorOptions][palette as keyof SimplePaletteColorOptions]
      : theme.palette.primary.main,
    "&::after": {
      content: `': ${
        palette
          ? theme.palette[palname as keyof PaletteColorOptions][palette as keyof SimplePaletteColorOptions]
          : theme.palette.primary.main
      } RGB(${hexToRgb(
        palette
          ? theme.palette[palname as keyof PaletteColorOptions][palette as keyof SimplePaletteColorOptions]
          : theme.palette.primary.main
      )})'`,
    },
  })
);

export const StyledSearchContainer = styled(Box)({
  height: "32px",
  padding: "0 0 18px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fff",
  "& .MuiTextField-root": {
    margin: "13px 0 10px 0",
    background: "#f5f8f9",
    width: "100%",
  },
});
export const IconGrid = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  "& span": {
    width: 70,
    margin: "0 4px",
    display: "inline-block",
    overflow: "hidden",
    fontSize: 12,
    textAlign: "center",
    textOverflow: "ellipsis",
  },
  "& svg": {
    margin: "4px 0px",
    padding: 4,
    fontSize: 40,
    boxSizing: "content-box",
    cursor: "pointer",
  },
  "& p": {
    margin: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    fontSize: 10,
  },
}));

export const StyledAccordion = styled(Accordion)(({ theme }: { theme: Theme }) => ({
  margin: "0 !important",
  boxShadow: "none",
  borderBottom: "1px solid" + theme.palette["darkGrey" as keyof PaletteColorOptions]["light"],
  "&::before": {
    opacity: "0 !important",
  },
}));
export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  margin: "0 !important",
  boxShadow: "none",
  height: 64,
  "& .MuiFormControlLabel-root ": {
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "space-between",
    width: "100%",
    padding: "20px 0",
  },
  "& .MuiButtonBase-root.MuiIconButton-root": {
    paddingLeft: 5,
    paddingRight: 5,
  },
  "& .MuiFormControlLabel-root .MuiButtonBase-root": {
    padding: 0,
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)<IAccordionDetails>(
  ({ theme, detailsbackgroud }: { theme: Theme; detailsbackgroud?: number }) => ({
    borderTop: "1px solid" + theme.palette["darkGrey" as keyof PaletteColorOptions]["light"],
    margin: "0 !important",
    padding: "16px",
    boxShadow: "none",
    display: "block",
    backgroundColor:
      detailsbackgroud === 0 ? theme.palette["mediumGrey" as keyof PaletteColorOptions]["light"] : "inherite",
  })
);

export const StyledTabsWrapper = styled(AppBar)(() => ({
  height: "auto",
  backgroundColor: "white",
  border: 0,
  padding: 0,
}));
export const StyledTabs = styled(Tabs)(() => ({
  width: "100%",
}));
export const StyledTab = styled(Tab)(() => ({
  height: "40px",
  width: "72px",
  "&.MuiTab-labelIcon": {
    padding: 0,
    margin: 0,
    minHeight: "64px",
    lineHeight: "14px",
  },
  "&.MuiTab-labelIcon .MuiTab-wrapper svg": {
    marginBottom: 0,
    background: "",
  },
}));

export const Circle = styled(Box)(() => ({
  width: 12,
  height: 12,
  marginRight: 8,
  borderRadius: "50%",
  backgroundColor: "#" + (Math.random().toString(16) + "00000").slice(2, 8),
}));

export const StyledList = styled(List)(() => ({
  padding: 0,
  "& .MuiButtonBase-root": {
    padding: 0,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 30,
  },
}));
export const StyledListItem = styled(ListItemButton)(() => ({
  padding: 0,
}));

export const StyledSmallAccordion = styled(Accordion)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette["mediumGrey" as keyof PaletteColorOptions]["light"],
  margin: "0 !important",
  width: "100%",
  borderBottom: "2px solid white",
  "&::before": {
    opacity: "0 !important",
  },
}));
export const StyledSmallAccordionSummary = styled(AccordionSummary)(({ theme }: { theme: Theme }) => ({
  height: 26,
  minHeight: "auto",
  padding: "0 0 0 11px",
  "&.Mui-expanded": {
    height: 26,
    minHeight: "auto",
  },
  "& .MuiFormControlLabel-label": {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: 700,
  },
  "& .MuiButtonBase-root": {
    padding: 0,
    margin: 0,
  },
}));
export const StyledSmallAccordionDetails = styled(AccordionDetails)(({ theme }: { theme: Theme }) => ({
  padding: 0,
  display: "block",
  "& .MuiTypography-root": {
    fontSize: 13,
  },
  "& li.MuiListItem-gutters": {
    display: "none",
  },
}));
