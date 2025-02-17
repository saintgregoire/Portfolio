import { Container, Typography } from "@mui/material";
import SkillsBox from "./components/SkillsBox";
import { useTranslation } from "react-i18next";

const Skills = () => {

  const {t} = useTranslation();

  return (
    <Container
      component="section"
      maxWidth="xl"
      id="skills"
      sx={{
        py: "4rem",
        textAlign: "center",
      }}
    >
      <Typography component="h2" variant="h2">
        {t("skills")}
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
        }}
      >
        {t("skills desc")}
      </Typography>
      <SkillsBox title="Frontend" type="frontend" />
      <SkillsBox title="Backend" type="backend" />
      <SkillsBox title={t("tools")} type="tools" />
      <SkillsBox title="CMS" type="cms" />
    </Container>
  );
};

export default Skills;
