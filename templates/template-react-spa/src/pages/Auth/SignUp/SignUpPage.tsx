import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

function SignUpPage() {
  const { t } = useTranslation();

  return <Box>{t("t")}</Box>;
}

export default SignUpPage;
