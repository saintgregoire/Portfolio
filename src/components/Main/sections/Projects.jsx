import { Container, Typography } from "@mui/material";
import hlegalImg from "../../../assets/img/hlegal.png";
import pizzaDayImg from "../../../assets/img/pizzaDay.png";
import estateinImg from "../../../assets/img/estatein.png";
import charismoImg from "../../../assets/img/charismo.png";
import orkImg from "../../../assets/img/ork.png";
import portfolioImg from "../../../assets/img/portfolio.png";
import CardSlider from "../components/CardSlider";
import ProjectCard from "../components/ProjectCard";
import { useRef } from "react";

const Projects = () => {
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Pizza Day",
      description: "Pizza Delivery",
      img: pizzaDayImg,
      badges: ["React", "CSS", "Vite", "Rest Api"],
      github: "https://github.com/saintgregoire/ReactHillel",
      site: "https://resplendent-hotteok-54ec2d.netlify.app/",
    },
    {
      id: 2,
      title: "Estatein",
      description: "Real Estate Agency",
      img: estateinImg,
      badges: [
        "HTML",
        "Sass",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "Twig",
        "MySql",
      ],
      github: "https://github.com/saintgregoire/RealEstateAgency",
      site: "https://estatein.alwaysdata.net/",
    },
    {
      id: 3,
      title: "My Portfolio",
      description: 'Portfolio website',
      img: portfolioImg,
      badges: ["React", "MUI", "Vite"],
      github: "https://github.com/saintgregoire/Portfolio",
      site: null,
    },
    {
      id: 4,
      title: "Charismo",
      description: "E-commerce",
      img: charismoImg,
      badges: ["React", "Sass", "Vite"],
      github: "https://github.com/saintgregoire/Charismo-React",
      site: "https://66dc7af221f96afe439da0bd--snazzy-zabaione-19c86e.netlify.app/",
    },
    {
      id: 5,
      title: "Rock-paper-scissors with Orс",
      description: "Desktop game",
      img: orkImg,
      badges: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/saintgregoire/Game",
      site: "https://663243a3a64595e259d38551--zippy-nasturtium-34ac5e.netlify.app/",
    },
    {
      id: 6,
      title: "Hlegal",
      description: "Law company",
      img: hlegalImg,
      badges: ["HTML", "Sass", "JavaScript", "Gulp"],
      github: "https://github.com/saintgregoire/final",
      site: "https://663e6d3bf60fc1363789b4ad--stupendous-cuchufli-b2b986.netlify.app/",
    },
  ];

  const cards = projects.map((item) => (
    <ProjectCard
      key={item.id}
      swiperRef={swiperRef}
      title={item.title}
      description={item.description}
      img={item.img}
      badges={item.badges}
      github={item.github}
      site={item.site}
    />
  ));

  return (
    <Container
      component="section"
      maxWidth="xl"
      id="projects"
      sx={{
        py: "2rem",
        background: "rgb(226, 226, 226, 30%)",
      }}
    >
      <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
        Projects
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        Some of the noteworthy projects I have built:
      </Typography>
      <CardSlider swiperRef={swiperRef}>{cards}</CardSlider>
    </Container>
  );
};

export default Projects;
