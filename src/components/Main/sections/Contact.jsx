import { Container, Typography } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="contacts"
      sx={{
        py: "2rem",
        textAlign: "center",
      }}
    >
      <Typography component="h2" variant="h2">
        Contacts
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
        }}
      >
        Open to new challenges and exciting projects!
        <br />
        Let&apos;s connect and create something great together.
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default Contact;
