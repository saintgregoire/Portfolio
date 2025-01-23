import { Box, Typography } from "@mui/material";
import bootstrapLogo from "../../../assets/img/bootstrap.png";
import cssLogo from "../../../assets/img/css-512.webp";
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
import mySqlLogo from "../../../assets/img/mysql.webp";

const Badge = ({name}) => {

  const images = {
    bootstrap: bootstrapLogo,
    css: cssLogo,
    gulp: gulpLogo,
    html: htmlLogo,
    javascript: jsLogo,
    mui: muiLogo,
    php: phpLogo,
    react: reactLogo,
    "rest api": restApiLogo,
    sass: sassLogo,
    tailwind: tailwindLogo,
    twig: twigLogo,
    vite: viteLogo,
    mysql: mySqlLogo,
  };

  const img = images[name.toLowerCase()];

  return (
    <Box
      component="div"
      sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: ".5rem", border: '1px solid lightgrey', borderRadius: '25px', py: '.2rem', px: '1rem', flexGrow: 0, flexShrink: 0 }}
    >
      <Box
        component="div"
        sx={{ width: "20px", height: "auto", overflow: "hidden", display: "flex", alignItems: "center", }}
      >
        <img
          src={img}
          alt="css"
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography component="p"  sx={{fontSize: '.8rem'}}>
        {name}
      </Typography>
    </Box>
  );
};

export default Badge;
