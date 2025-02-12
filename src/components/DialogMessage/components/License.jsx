import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const License = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography>{t("Copyright")} © 2025 Voznichka Maksym</Typography>
      {t("Permission is hereby granted")}
      <Typography>{t("The above copyright")}</Typography>
      <Typography>{t("THE SOFTWARE IS")}</Typography>
    </>
  );
};

export default License;
