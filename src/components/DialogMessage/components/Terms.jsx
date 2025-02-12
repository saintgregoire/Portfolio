import { List, ListItem, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography component="h3">{t("Terms of Use")}</Typography>
      <List sx={{ "& span": { color: "rgba(0, 0, 0, 0.6)" } }}>
        <ListItem>
          <Typography
            dangerouslySetInnerHTML={{ __html: t("General Provisions") }}
          />
        </ListItem>
        <ListItem>
          <Typography
            dangerouslySetInnerHTML={{ __html: t("Use of Content") }}
          />
        </ListItem>
        <ListItem>
          <Typography dangerouslySetInnerHTML={{ __html: t("Liability") }} />
        </ListItem>
        <ListItem>
          <Typography
            dangerouslySetInnerHTML={{ __html: t("Changes to Terms") }}
          />
        </ListItem>
      </List>
      <Typography component="h3">{t("Privacy Policy")}</Typography>
      <List>
        <ListItem>
        <Typography
            dangerouslySetInnerHTML={{ __html: t("Data Collection") }}
          />
        </ListItem>
        <ListItem>
        <Typography
            dangerouslySetInnerHTML={{ __html: t("Data Usage") }}
          />
        </ListItem>
        <ListItem>
        <Typography
            dangerouslySetInnerHTML={{ __html: t("Data Storage") }}
          />
        </ListItem>
        <ListItem>
        <Typography
            dangerouslySetInnerHTML={{ __html: t("Data Security") }}
          />
        </ListItem>
      </List>
    </>
  );
};

export default Terms;
