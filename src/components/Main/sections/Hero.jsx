import { Box, Container, Typography } from "@mui/material";
import gif from "../../../assets/img/IMG_2614.gif";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Social from "../components/Social";
import { pulsation, rotate } from "../../../utils/keyframes";

const Hero = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "2rem",
      }}
    >
      <Box
        component="div"
        sx={{
          textAlign: "center",
          width: "90%",
          overflow: "hidden",
        }}
      >
        <img
          src={gif}
          alt="Voznichka Maksym Emoji"
          style={{ width: "100%", height: "100%", }}
        />
      </Box>

      <Box component="div" sx={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1">
          Hi, I&apos;m Maksym 
          <Typography component="span" sx={{ fontSize: "2rem",
          display: 'inline-block',
          animation: `${rotate} 3s infinite`,
          transformOrigin: 'bottom right',
          }}>
            👋
          </Typography>
        </Typography>
        <Typography component="p" sx={{ mt: "1rem" }}>
          I&apos;m a Web Developer with expertise in React.js, PHP, and MySQL,
          focused on creating efficient and visually engaging digital solutions.
          With a solid foundation in web development, I specialize in crafting
          user-centric, responsive, and functional applications. Passionate
          about continuous learning, I aim to enhance user experiences and bring
          ideas to life through clean and scalable code.
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LocationOnIcon sx={{ fontSize: "1.3rem" }} /> Rennes, France
        </Typography>
        <Typography
          component="p"
          sx={{
            mt: "1rem",
            display: "flex",
            justifyContent: "center",
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
              background: "green",
              position: "relative",
              "&::before, &::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                boxShadow: "0 0 3px green",
                animation: `${pulsation} .7s ease-out infinite`,
              },
            }}
          ></Typography>
          Available for new projects
        </Typography>
        <Social />
      </Box>
    </Container>
  );
};

export default Hero;
