import { Container, Typography } from "@mui/material";
import ContactForm from "./components/ContactForm";
import Social from "../../components/Social";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="contacts"
      sx={{
        py: "4rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h2" variant="h2">
        {t("contacts")}
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
        }}
        dangerouslySetInnerHTML={{ __html: t("contacts desc") }}
      />
      <Social />
      <ContactForm />
    </Container>
  );
};

export default Contact;
