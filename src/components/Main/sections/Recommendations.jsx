import { Box, Container, Typography } from "@mui/material";
import RecommendationCard from "../components/RecommendationCard";

const Recommendations = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="recommendations"
      sx={{
        py: "2rem",
        background: "rgb(226, 226, 226, 30%)",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
        }}
      >
        Recommendations
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        What people are saying about my work and dedication.
      </Typography>
      <Box component='div' sx={{mt: '1.5rem'}}>
        <RecommendationCard />
      </Box>
    </Container>
  );
};

export default Recommendations;
