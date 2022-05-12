import React from "react";
import { useIntl } from "react-intl";

import { Box, Grid, Typography } from "@mui/material";

export default function ExamplePage(): JSX.Element {
  const { formatMessage } = useIntl();

  return (
    <Box>
      <Typography variant="h2">{formatMessage({ id: "TEST.TRANSLATE" })}</Typography>
      <Grid>
        <Typography>{formatMessage({ id: "TEST.MISSING" })}</Typography>
      </Grid>
    </Box>
  );
}
