import { Box, Container, Typography } from "@mui/material";
import myPhoto from "../../../assets/img/me.jpg";
import { frame } from "../../../utils/keyframes";

const info = [
  {
    id: 1,
    title: "I'm",
    text: " a passionate and dedicated web developer specializing in Full Stack and Frontend development using React.js, PHP and MySQL. I'm enthusiastic about crafting seamless user experiences and building robust, visually appealing web applications. Clean, efficient code and user-centered design are at the heart of my work.",
  },
  {
    id: 2,
    title: "My journey",
    text: " as a developer began in 2023, and since then, I've embraced every opportunity to grow and challenge myself. With a strong focus on learning and adapting, I continually explore new technologies and approaches to stay ahead in the ever-evolving world of web development.",
  },
  {
    id: 3,
    title: "I have",
    text: " a keen interest in understanding user behavior and psychology, which helps me create intuitive and engaging digital experiences for all types of users. Whether it's collaborating on ideas, prototyping, or coding the final product, I enjoy being involved in every stage of the development process.",
  },
  {
    id: 4,
    title: "A few quick things",
    text: " about me: I'm a progressive thinker, a problem-solver, and always open to new challenges. Oh, and I'm available for new projects — so feel free to reach out! Let's build something amazing together. 😊",
  },
];

const About = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      id="about"
      sx={{
        background: "rgb(226, 226, 226, 30%)",
        py: { xs: "2rem" },
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
          my: 0,
          textAlign: { xs: "center", lg: "left" },
          order: { lg: 1 },
          alignSelf: "end",
        }}
      >
        About me
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
          "& > p": {
            paddingBottom: "1rem",
          },
          order: { lg: 2 },
          alignSelf: "end",
        }}
      >
        {info.map((item) => (
          <Typography component="p" key={item.id}>
            <b>{item.title}</b>
            {item.text}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default About;
