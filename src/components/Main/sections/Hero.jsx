import { Box, Container, Typography } from "@mui/material";
import gif from "../../../assets/img/IMG_2614.gif";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Social from "../components/Social";
import { pulsation, rotate } from "../../../utils/keyframes";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Container
      component="section"
      id="back-to-top-anchor"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        alignItems: "center",
        mt: { xs: "7rem", lg: "9rem" },
        mb: { xs: "4rem" },
      }}
    >
      <Box
        component="div"
        sx={{
          textAlign: "center",
          background:
            "radial-gradient(circle, yellow 0%, rgba(255, 255, 0, 70%) 30%, transparent 50%)",
          width: {
            xs: "310px",
            sm: "350px",
          },
          overflow: "hidden",
          order: {
            lg: 1,
          },
          flex: {
            lg: "1 1 30%",
          },
        }}
      >
        <img
          src={gif}
          alt="Voznichka Maksym Emoji"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <Box
        component="div"
        sx={{
          textAlign: {
            xs: "center",
            lg: "start",
          },
          flex: {
            lg: "1 1 60%",
          },
        }}
      >
        <Typography variant="h1" component="h1">
          {t("h1")}
          <Typography
            component="span"
            sx={{
              fontSize: "2rem",
              display: "inline-block",
              willChange: 'transform',
              animation: `${rotate} 3s infinite`,
              transformOrigin: "bottom right",
            }}
          >
            👋
          </Typography>
        </Typography>
        <Typography component="p" sx={{ mt: "1rem" }}>
          {t("bio")}
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              lg: "start",
            },
          }}
        >
          <LocationOnIcon sx={{ fontSize: "1.3rem" }} /> Rennes, France
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "1rem",
            display: "flex",
            justifyContent: {
              xs: "center",
              lg: "start",
            },
            alignItems: "center",
            gap: ".4rem",
          }}
        >
          <Typography
            component="span"
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00ff11",
              position: "relative",
              ml: {
                lg: "5px",
              },
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                boxShadow: "0 0 3px #00ff11",
                willChange: 'transform, opacity',
                animation: `${pulsation} .7s ease-out infinite`,
              },
            }}
          ></Typography>
          {t("availability")}
        </Typography>
        <Social />
      </Box>
    </Container>
  );
};

export default Hero;
