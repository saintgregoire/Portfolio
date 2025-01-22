import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ProjectCard from "./ProjectCard";

const CardSlider = (props) => {

  const {object} = props;

  const swiperRef = useRef(null);

  return (
    <Box
      sx={{
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
      }}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ paddingBottom: "2rem" }}
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {object.map((item) => (
          <SwiperSlide key={item.id}>
            {/* ДОБАВИТЬ КАРТУ */}
          </SwiperSlide>
        ))}
      </Swiper>
      <IconButton
        className="custom-prev"
        sx={{
          display: { xs: "none", sm: "flex" },
          position: "absolute",
          top: "50%",
          left: 0,
          zIndex: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ArrowBack />
      </IconButton>

      <IconButton
        className="custom-next"
        sx={{
          display: { xs: "none", sm: "flex" },
          position: "absolute",
          top: "50%",
          right: 0,
          zIndex: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default CardSlider;
