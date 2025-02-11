import { Container, Typography, Box } from "@mui/material";
import RecommendationCard from "../components/RecommendationCard";
import CardSlider from "../components/CardSlider";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Recommendations = () => {
  const {t} = useTranslation();

  const cards = t("recommendations list", {returnObjects: true}).map((item) => (
    <RecommendationCard
      key={item.id}
      name={item.name}
      post={item.post}
      relation={item.relation}
      text={item.text}
    />
  ));

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
    px: { md: 6 },
    mt: "2rem",
    position: "relative",
    "& .swiper-pagination": {
      bottom: "0",
    },
    "& .swiper-pagination-bullet-active": {
      background: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Box component="section"
    id="recommendations"
    sx={{background: "rgb(226, 226, 226, 30%)",}}>
    <Container
      component="div"
      maxWidth="xl"
      sx={{
        py: "4rem",
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
        }}
      >
        {t("recommendations")}
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        {t("recommendations desc")}
      </Typography>

      <CardSlider swiperSettings={swiperSettings} sx={swiperStyle}>
        {cards}
      </CardSlider>
    </Container>
    </Box>
  );
};

export default Recommendations;
