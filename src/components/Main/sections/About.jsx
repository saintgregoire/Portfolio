import { Box, Container, Typography } from "@mui/material";
import myPhoto from "../../../assets/img/me.jpg";
import { frame } from "../../../utils/keyframes";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <Box component="section"
    id="about"
    sx={{background: "rgb(226, 226, 226, 30%)",}}>
      <Container
        component="div"
        maxWidth="xl"
        sx={{
          py: "4rem",
          display: "grid",
          gridTemplateColumns: {
            lg: "400px auto",
          },
          gap: { xs: 3, lg: "30px" },
          rowGap: { lg: 0 },
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            textAlign: { xs: "center", lg: "left" },
            order: { lg: 1 },
            borderBottom: {
              lg: "1px solid lightgrey",
            },
            width: { lg: "40%" },
            pb: {
              lg: "1rem",
            },
            alignSelf: "end",
          }}
        >
          {t("about me")}
        </Typography>
        <Box
          sx={{
            mt: {
              xs: ".5rem",
            },
            overflow: "hidden",
            textAlign: "center",
            borderRadius: "69% 31% 68% 32% / 44% 64% 36% 56% ",
            willChange: "border-radius",
            animation: `${frame} 7s infinite ease-in-out`,
            boxShadow: "0 4px 10px rgba(255, 255, 0, 0.5)",
            width: {
              xs: "241px",
              lg: "300px",
            },
            height: {
              xs: "300px",
              lg: "400px",
            },
            justifySelf: "center",
            alignSelf: "center",
            gridRow: {
              lg: "span 2",
            },
          }}
        >
          <img
            src={myPhoto}
            alt="Voznichka Maksym"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "left bottom",
            }}
          />
        </Box>
        <Box
          sx={{
            textAlign: { xs: "center", lg: "left" },
            mt: {
              xs: "1rem",
            },
            "& > :not(:last-child)": {
              paddingBottom: "1rem",
            },
            order: { lg: 2 },
            alignSelf: "end",
          }}
        >
          {t("my info", {returnObjects: true}).map((item) => (
            <Typography component="p" key={item.id}>
              <b>{item.title}</b>
              {item.text}
            </Typography>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
