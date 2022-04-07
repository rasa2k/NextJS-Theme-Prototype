import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";

const TypographyPage: NextPage = () => {
  return (
    <>
      <Typography variant="h1">Paragraph H1</Typography>
      <Typography variant="h2">Paragraph H2</Typography>
      <Typography variant="h3">Paragraph H3</Typography>
      <Typography variant="h4">Paragraph H4</Typography>
      <Typography variant="subtitle1">Paragraph subtitle1</Typography>
      <Typography variant="subtitle2">Paragraph subtitle2</Typography>
      <Typography variant="body1">
        Paragraph body1: Lorem ipsum dolor sit amet, labitur interesset ne sea, putant iuvaret ceteros sit cu.
      </Typography>
      <Typography variant="body2">
        Paragraph body2: Lorem ipsum dolor sit amet, labitur interesset ne sea, putant iuvaret ceteros sit cu.
      </Typography>
      <Typography variant="button">
        Paragraph button: Lorem ipsum dolor sit amet, labitur interesset ne sea, putant iuvaret ceteros sit cu.
      </Typography>
      <Box>
        <Typography variant="caption">
          Paragraph caption: Lorem ipsum dolor sit amet, labitur interesset ne sea, putant iuvaret ceteros sit cu.
        </Typography>
      </Box>
      <Box>
        <Typography variant="overline">
          Paragraph overline: Lorem ipsum dolor sit amet, labitur interesset ne sea, putant iuvaret ceteros sit cu.
        </Typography>
      </Box>
    </>
  );
};

export default TypographyPage;
