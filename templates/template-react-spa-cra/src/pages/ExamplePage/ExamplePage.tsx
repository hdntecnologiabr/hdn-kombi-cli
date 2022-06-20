import React from "react";
import { useTranslation } from "react-i18next";

import { useStore } from "effector-react";

import { Box, Grid, Typography } from "@mui/material";

import LoadExamplePageUseCase from "useCases/ExampleUseCase/LoadExamplePageUseCase";

import ExampleStore from "stores/ExampleStore/ExampleStore";

export default function ExamplePage(): JSX.Element {
  const { t } = useTranslation();

  const { isLoading, title, description } = useStore(ExampleStore);

  React.useEffect(() => {
    LoadExamplePageUseCase.execute();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Typography>{t("example.loading")}</Typography>
      ) : (
        <>
          <Typography variant="h2">{title}</Typography>
          <Grid>
            <Typography>{description}</Typography>
          </Grid>
        </>
      )}
    </Box>
  );
}
