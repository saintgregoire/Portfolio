import { Container, Typography } from "@mui/material";
import SkillsBox from "../components/SkillsBox";

const Skills = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="skills"
      sx={{
        py: "2rem",
        textAlign: "center",
      }}
    >
      <Typography component="h2" variant="h2">
        Skills
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
        }}
      >
        The skills, tools and technologies I am really good at:
      </Typography>
      <SkillsBox title="Frontend" type="frontend" />
      <SkillsBox title="Backend" type="backend" />
      <SkillsBox title="Tools" type="tools" />
      <SkillsBox title="CMS" type="cms" />
    </Container>
  );
};

export default Skills;
