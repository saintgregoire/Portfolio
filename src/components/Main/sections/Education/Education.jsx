import { Box, Container, List, Typography } from "@mui/material";
import EducationCard from "./components/EducationCard";
import wa from "../../../../assets/img/icons/3wa.png";
import hillel from "../../../../assets/img/icons/hillel.png";
import basic from "../../../../assets/img/education/basic.png";
import diploma from "../../../../assets/img/education/diploma.png";
import jsDiploma from "../../../../assets/img/education/js-free-code.png";
import php from "../../../../assets/img/education/php.png";
import react from "../../../../assets/img/education/react.png";
import respDiploma from "../../../../assets/img/education/resp-free-code.png";
import CardSlider from "../../components/CardSlider";
import { Autoplay } from "swiper/modules";
import FullScreenImage from "./components/FullScreenImage";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const {t} = useTranslation();

  const schoolImg = {
    hillel: hillel,
    wa: wa
  };

  const data = t("education list", { returnObjects: true });
  const dataArray = Object.values(data);

  const diplomasImg = [
    {
      id: 1,
      src: diploma,
      alt: "3W Academy BAC+2",
    },
    {
      id: 2,
      src: react,
      alt: "React Hillel IT school",
    },
    {
      id: 3,
      src: php,
      alt: "Tosa PHP",
    },
    {
      id: 4,
      src: jsDiploma,
      alt: "JavaScript FreeCodeCamp",
    },
    {
      id: 5,
      src: respDiploma,
      alt: "Responsive web design FreeCodeCamp",
    },
    {
      id: 6,
      src: basic,
      alt: "Frontend Basic Hillel IT School",
    },
  ];

  const swiperRef = useRef(null);

  const swiperSettings = {
    modules: [Autoplay],
    spaceBetween: 16,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
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
    pt: {xs: '1.5rem', sm: '2rem'}
  };

  return (
    <Container
      component="section"
      maxWidth="xl"
      id="education"
      sx={{ py: "4rem" }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
        }}
      >
        {t("education")}
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        {t("education desc")}
      </Typography>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "1rem",
        }}
      >
        <List
          sx={{
            maxWidth: {
              xs: "600px",
              md: '650px',
              lg: "900px",
            },
            width: "100%",
          }}
        >
          {dataArray
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <EducationCard
                key={item.id}
                title={item.school}
                coursName={item.course}
                desc={<span dangerouslySetInnerHTML={{ __html: item.description }} />}
                img={schoolImg[item.img]}
                date={item.period}
              />
            ))}
        </List>
      </Box>
      <CardSlider
        swiperSettings={swiperSettings}
        sx={swiperStyle}
        isNavigate={false}
        swiperRef={swiperRef}
      >
        {diplomasImg.map((item) => (
          <FullScreenImage key={item.id} src={item.src} alt={item.alt} swiperRef={swiperRef} />
        ))}
      </CardSlider>
    </Container>
  );
};

export default Education;
