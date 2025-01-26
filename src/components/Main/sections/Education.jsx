import { Container, Typography } from "@mui/material";

const Education = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="education"
      sx={{ py: "2rem" }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
        }}
      >
        Education
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        Highlights of my educational background and key qualifications I&apos;ve
        gained:
      </Typography>
    </Container>
  );
};

export default Education;
