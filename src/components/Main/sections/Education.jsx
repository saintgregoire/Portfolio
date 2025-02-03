import { Box, Container, List, Typography } from "@mui/material";
import EducationCard from "../components/EducationCard";
import wa from "../../../assets/img/icons/3wa.png";
import hillel from "../../../assets/img/icons/hillel.png";
import basic from "../../../assets/img/education/basic.png";
import diploma from "../../../assets/img/education/diploma.png";
import jsDiploma from "../../../assets/img/education/js-free-code.png";
import php from "../../../assets/img/education/php.png";
import react from "../../../assets/img/education/react.png";
import respDiploma from "../../../assets/img/education/resp-free-code.png";
import CardSlider from "../components/CardSlider";
import { Autoplay } from "swiper/modules";
import FullScreenImage from "../components/FullScreenImage";
import { useRef } from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      school: "Hillel IT School",
      course: "Frontend Basic",
      period: "Nov. 2023 - Jan. 2024",
      description:
        "This training provided essential front-end skills, including HTML, CSS, SCSS, and Git/GitHub for version control and collaboration, laying a solid foundation for my web development journey.",
      img: hillel,
    },
    {
      id: 2,
      school: "3W Academy",
      course: "Web and Mobile Development (BAC+2)",
      period: "Feb. 2024 - Nov. 2024",
      description: (
        <>
          Front-end: Proficient in HTML5, CSS (Sass), Bootstrap and JavaScript
          for dynamic user interfaces.
          <br />
          Back-end: Experienced in PHP, MySQL and Twig for web app development
          and database optimization.
          <br />
          Project management: Knowledge of Agile methodologies and tools for
          team collaboration.
          <br />
          General skills: Full-stack development with best practices in both
          front-end and back-end.
        </>
      ),
      img: wa,
    },
    {
      id: 3,
      school: "Hillel IT School",
      course: "React",
      period: "Nov. 2024 - Jan. 2025",
      description:
        "During my React training, I learned to build dynamic, high-performance UIs by understanding components, props, and state, using hooks for lifecycle and state management, and implementing routing with React Router for SPAs. I gained experience in fetching real-time data with APIs (fetch, Axios), setting up projects with Vite, optimizing performance, and following best practices. I also worked with MUI (Material-UI) to design UIs and managed forms with React Hook Form for smooth validation.",
      img: hillel,
    },
  ];

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
      sx={{ py: "2rem" }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          textAlign: "center",
        }}
      >
        Education
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        Highlights of my educational background and key qualifications I&apos;ve
        gained:
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
          {education
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <EducationCard
                key={item.id}
                title={item.school}
                coursName={item.course}
                desc={item.description}
                img={item.img}
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
