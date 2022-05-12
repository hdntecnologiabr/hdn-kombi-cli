import React from "react";
import { useTranslation } from "react-i18next";

import { Box, Grid, Typography } from "@mui/material";

export default function ExamplePage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h2">{t("example.title")}</Typography>
      <Grid>
        <Typography>{t("example.title")}</Typography>
      </Grid>
    </Box>
  );
}
