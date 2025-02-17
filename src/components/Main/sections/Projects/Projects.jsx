import { Container, Typography, Box } from "@mui/material";
import hlegalImg from "../../../../assets/img/webp/hlegal.webp";
import pizzaDayImg from "../../../../assets/img/webp/pizzaDay.webp";
import estateinImg from "../../../../assets/img/webp/estatein.webp";
import charismoImg from "../../../../assets/img/webp/charismo.webp";
import orkImg from "../../../../assets/img/webp/ork.webp";
import portfolioImg from "../../../../assets/img/webp/portfolio.webp";
import CardSlider from "../../components/CardSlider";
import ProjectCard from "./components/ProjectCard";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(); 
  
  const images = {
    hlegalImg: hlegalImg,
    pizzaDayImg: pizzaDayImg,
    estateinImg: estateinImg,
    charismoImg: charismoImg,
    orkImg: orkImg,
    portfolioImg: portfolioImg
  };

  const swiperSettings = {
    style: { paddingBottom: "3rem" },
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

  return (
    <Box
      component="section"
      id="projects"
      sx={{ background: "rgb(226, 226, 226, 30%)" }}
    >
      <Container
        component="div"
        maxWidth="xl"
        sx={{
          py: "4rem",
        }}
      >
        <Typography component="h2" variant="h2" sx={{ textAlign: "center" }}>
          {t("projects")}
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: ".5rem",
            textAlign: "center",
          }}
        >
          {t("projects desc")}
        </Typography>
        <CardSlider swiperSettings={swiperSettings} sx={swiperStyle}>
          {t("projects list", {returnObjects: true}).map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              img={images[item.img]}
              badges={item.badges}
              github={item.github}
              site={item.site}
            />
          ))}
        </CardSlider>
      </Container>
    </Box>
  );
};

export default Projects;
