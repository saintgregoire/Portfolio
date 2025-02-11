import { Container, Typography, Box } from "@mui/material";
import RecommendationCard from "../components/RecommendationCard";
import CardSlider from "../components/CardSlider";
import { Pagination, Navigation } from "swiper/modules";

const Recommendations = () => {
  const recs = [
    {
      id: 1,
      name: "Mari Doucet",
      post: "Co-founder Kornog",
      relation: "Mari was Maksym's teacher",
      text: "Maksym is a brilliant, curious, and determined student. He has a strong commitment to quality work and best practices. His learning abilities are impressive. He is also a driving force within a team, always ready to share his knowledge and challenge his own understanding.",
    },
    {
      id: 2,
      name: "Fabrice Vallee",
      post: "Career coach",
      relation: "Fabrice was Maksym's teacher",
      text: "It was a pleasure to support Maxime in developing his web development skills. I particularly appreciated his great autonomy, fast learning ability, and resilience in the face of complexity and the unknown. And finally, his passion for tech! I highly recommend his profile to any organization that needs to innovate and create new technical solutions in a rapidly changing world.",
    },
    {
      id: 3,
      name: "Hugues Froger",
      post: "Co-founder & developer in Kornog",
      relation: "Hugues was Maksym's teacher",
      text: "Maksym has been a diligent learner throughout his training at 3W Academy, whether in individual or team projects. His motivation to deeply understand the mechanics and logic of web programming, as well as his constant commitment to achieving an optimized outcome, demonstrate his dedication and involvement. I wish him all the best for the future!",
    },
    {
      id: 4,
      name: "Maxim Hrichina",
      post: "Frontend developer",
      relation: "Maxim was Maksym's teacher",
      text: "I had the pleasure of observing Maxim's impressive progress as he completed the Frontend Basic course with excellence. From start to finish, Maxim demonstrated not only a solid understanding of the material but also a proactive and detail-oriented approach to every task. Maksym consistently delivered high-quality work, meeting and often exceeding expectations. He showcased a strong ability to grasp core frontend concepts and applied them effectively in practical assignments. What stood out the most was his meticulous attention to detail, problem-solving mindset, and unwavering commitment to producing clean and efficient code. In addition to his technical skills, Maksym's professionalism and dedication were evident throughout the course. He approached challenges with enthusiasm and maintained a collaborative attitude, making him a pleasure to work with. I am confident that Maxim will continue to excel as he advances in his frontend development journey. He has the potential to bring significant value to any team or project he joins. I highly recommend him to anyone looking for a skilled and reliable junior frontend developer.",
    },
    {
      id: 5,
      name: "Benjamin Haverbeke",
      post: "Fullstack developer",
      relation: "Benjamin worked with Maksym on the same team",
      text: "At the start of the training, Maksym was already capable of creating a professional-level dynamic website—I learned a lot alongside him!",
    },
  ];

  const cards = recs.map((item) => (
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
        Recommendations
      </Typography>
      <Typography
        component="p"
        sx={{
          mt: ".5rem",
          textAlign: "center",
        }}
      >
        What people are saying about my work and dedication.
      </Typography>

      <CardSlider swiperSettings={swiperSettings} sx={swiperStyle}>
        {cards}
      </CardSlider>
    </Container>
    </Box>
  );
};

export default Recommendations;
