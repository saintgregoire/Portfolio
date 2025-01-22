import { Box, Typography } from "@mui/material";
import bootstrapLogo from "../../../assets/img/bootstrap.png";
import cssLogo from "../../../assets/img/css-512.webp";
import gitLogo from "../../../assets/img/git.png";
import gitHubLogo from "../../../assets/img/github.png";
import gulpLogo from "../../../assets/img/gulp.webp";
import htmlLogo from "../../../assets/img/html.webp";
import jsLogo from "../../../assets/img/js.png";
import muiLogo from "../../../assets/img/mui.png";
import phpLogo from "../../../assets/img/php.png";
import reactLogo from "../../../assets/img/react.png";
import restApiLogo from "../../../assets/img/rest_api.png";
import sassLogo from "../../../assets/img/sass.png";
import tailwindLogo from "../../../assets/img/tailwind.png";
import twigLogo from "../../../assets/img/twig.png";
import viteLogo from "../../../assets/img/vite.png";
import wordpressLogo from "../../../assets/img/wordpress.webp";
import mySqlLogo from "../../../assets/img/mysql.webp";

const SkillsBox = (props) => {
  const skills = [
    {
      id: 1,
      type: "frontend",
      name: "HTML",
      img: htmlLogo,
    },
    {
      id: 2,
      type: "frontend",
      name: "CSS",
      img: cssLogo,
    },
    {
      id: 3,
      type: "frontend",
      name: "JavaScript",
      img: jsLogo,
    },
    {
      id: 4,
      type: "frontend",
      name: "React.js",
      img: reactLogo,
    },
    {
      id: 5,
      type: "frontend",
      name: "Sass/SCSS",
      img: sassLogo,
    },
    {
      id: 6,
      type: "frontend",
      name: "Bootstrap",
      img: bootstrapLogo,
    },
    {
      id: 7,
      type: "frontend",
      name: "Tailwind",
      img: tailwindLogo,
    },
    {
      id: 8,
      type: "frontend",
      name: "MUI",
      img: muiLogo,
    },
    {
      id: 9,
      type: "backend",
      name: "PHP",
      img: phpLogo,
    },
    {
      id: 10,
      type: "backend",
      name: "Twig",
      img: twigLogo,
    },
    {
      id: 11,
      type: "backend",
      name: "SQL(MySql)",
      img: mySqlLogo,
    },
    {
      id: 12,
      type: "backend",
      name: "REST API",
      img: restApiLogo,
    },
    {
      id: 13,
      type: "tools",
      name: "Git",
      img: gitLogo,
    },
    {
      id: 14,
      type: "tools",
      name: "GitHub",
      img: gitHubLogo,
    },
    {
      id: 15,
      type: "tools",
      name: "Vite",
      img: viteLogo,
    },
    {
      id: 16,
      type: "tools",
      name: "Gulp",
      img: gulpLogo,
    },
    {
      id: 17,
      type: "cms",
      name: "WordPress",
      img: wordpressLogo,
    },
  ];

  const { title, type } = props;

  const filtredItems = skills.filter((item) => item.type === type);

  return (
    <Box component="div" sx={{ mt: "2rem" }}>
      <Typography
        component="h3"
        variant="h3"
        sx={{
          background: "rgb(226, 226, 226, 30%)",
          py: ".5rem",
        }}
      >
        {title}
      </Typography>
      <Box
        component="div"
        sx={{
          mt: "1.5rem",
          display: "flex",
          rowGap: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {filtredItems.map((item) => (
          <Box
            key={item.id}
            component="div"
            sx={{
              flex: "0 1 30%",
              flexBasis: { sm: "25%", md: "20%", lg: "12%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: ".3rem",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography component="p">{item.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkillsBox;
