import { Box, Container, List, Typography } from "@mui/material";
import EducationCard from "../components/EducationCard";

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
      <Box component="div">
        <List>
          <EducationCard title='3W Academy' coursName='Developement Web' desc='Lorem dhuash dshfudsiufh ds fadaiufhdsiu dshfui' />
        </List>
      </Box>
    </Container>
  );
};

export default Education;
