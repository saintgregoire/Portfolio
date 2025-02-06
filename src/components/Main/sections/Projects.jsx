import { Container, Typography } from "@mui/material";
import hlegalImg from "../../../assets/img/projects/hlegal.png";
import pizzaDayImg from "../../../assets/img/projects/pizzaDay.png";
import estateinImg from "../../../assets/img/projects/estatein.png";
import charismoImg from "../../../assets/img/projects/charismo.png";
import orkImg from "../../../assets/img/projects/ork.png";
import portfolioImg from "../../../assets/img/projects/portfolio.png";
import CardSlider from "../components/CardSlider";
import ProjectCard from "../components/ProjectCard";
import { Pagination, Navigation } from "swiper/modules";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pizza Day",
      description: "Pizza Delivery",
      img: pizzaDayImg,
      badges: [
        "React",
        "CSS",
        "Vite",
        "React Hook Form",
        "Zod",
        "React Router",
        "Rest Api",
      ],
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
        "SwiperJs",
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
      description: "Portfolio website",
      img: portfolioImg,
      badges: ["React", "MUI", "React Router", "React Hook Form", "Zod", "EmailJS", "SwiperJs", "i18next", "Vite"],
      github: "https://github.com/saintgregoire/Portfolio",
      site: null,
    },
    {
      id: 4,
      title: "Charismo",
      description: "E-commerce",
      img: charismoImg,
      badges: ["React", "Sass", "SwiperJs", "React Router", "Vite"],
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

  const swiperSettings = {
    style: { paddingBottom: "4rem" },
    modules: [Pagination, Navigation],
    spaceBetween: 16,
    slidesPerView: 1,
    pagination: { clickable: true },
    navigation: {
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    },
    loop: true,
    breakpoints: {
      900: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };

  const swiperStyle = {
    width: "100%",
    padding: 2,
    px: { md: 6 },
    position: "relative",
    "& .swiper-pagination": {
      bottom: "0",
    },
    "& .swiper-pagination-bullet-active": {
      background: "rgba(0, 0, 0, 0.5)",
    },
  };

  const cards = projects.map((item) => (
    <ProjectCard
      key={item.id}
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
      <CardSlider swiperSettings={swiperSettings} sx={swiperStyle}>
        {cards}
      </CardSlider>
    </Container>
  );
};

export default Projects;
