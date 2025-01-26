import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const CardSlider = (props) => {
  const { swiperSettings, children, sx, isNavigate, swiperRef} = props;

  return (
    <Box sx={sx}>
      <Swiper
        {...swiperSettings}
        {...(swiperRef ? { onSwiper: (swiper) => (swiperRef.current = swiper) } : {})}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      {isNavigate !== false && (
        <>
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
        </>
      )}
    </Box>
  );
};

export default CardSlider;
