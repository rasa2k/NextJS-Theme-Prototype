import { Box, Divider, PaletteColorOptions, styled, Theme, Typography } from "@mui/material";
import { ArrowLeft } from "@dhi/icons";

interface HeaderProps {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  handlepanels?: Function;
}

const StyledSideHeader = styled(Typography)(({ close }: { close?: number }) => ({
  padding: close === 0 ? "8px 5px" : "16px",
  lineHeight: close === 0 ? "39px" : "auto",
}));

const StyledSideHeaderWrapper = styled(Box)(({ close }: { close?: number }) => ({
  padding: close === 0 ? "12px 5px" : "12px 16px",
}));

const StyledSideHeaderSubTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
  color: theme.palette["darkGrey" as keyof PaletteColorOptions]["main"],
  display: "block",
  lineHeight: "16px",
}));

const ArrowLeftIcon = styled(ArrowLeft)(() => ({
  float: "left",
  cursor: "pointer",
  height: "100%",
}));

function SideHeader({ title, subtitle1, subtitle2, handlepanels }: HeaderProps) {
  return (
    <>
      {subtitle1 ? (
        <StyledSideHeaderWrapper close={handlepanels ? 0 : 1}>
          {handlepanels ? <ArrowLeftIcon onClick={() => handlepanels(false)} /> : null}
          <Typography variant="h3">{title}</Typography>
          <StyledSideHeaderSubTitle variant="caption">{subtitle1}</StyledSideHeaderSubTitle>
          {subtitle2 && <StyledSideHeaderSubTitle variant="caption">{subtitle2}</StyledSideHeaderSubTitle>}
        </StyledSideHeaderWrapper>
      ) : (
        <StyledSideHeader close={handlepanels ? 0 : 1} variant="h3">
          {handlepanels ? <ArrowLeftIcon onClick={() => handlepanels(false)} /> : null}
          {title}
        </StyledSideHeader>
      )}

      <Divider />
    </>
  );
}

export default SideHeader;
