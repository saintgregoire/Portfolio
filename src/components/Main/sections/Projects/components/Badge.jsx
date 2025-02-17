import { Box, Typography } from "@mui/material";
import bootstrapLogo from "../../../../../assets/img/icons/bootstrap.png";
import cssLogo from "../../../../../assets/img/icons/css-512.webp";
import gulpLogo from "../../../../../assets/img/icons/gulp.webp";
import htmlLogo from "../../../../../assets/img/icons/html.webp";
import jsLogo from "../../../../../assets/img/icons/js.png";
import muiLogo from "../../../../../assets/img/icons/mui.png";
import phpLogo from "../../../../../assets/img/icons/php.png";
import reactLogo from "../../../../../assets/img/icons/react.png";
import restApiLogo from "../../../../../assets/img/icons/rest_api.png";
import sassLogo from "../../../../../assets/img/icons/sass.png";
import tailwindLogo from "../../../../../assets/img/icons/tailwind.png";
import twigLogo from "../../../../../assets/img/icons/twig.png";
import viteLogo from "../../../../../assets/img/icons/vite.png";
import mySqlLogo from "../../../../../assets/img/icons/mysql.webp";
import reactHookFormLogo from "../../../../../assets/img/icons/react-hook-form.png";
import zodLogo from "../../../../../assets/img/icons/zod.png";
import emailJsLogo from "../../../../../assets/img/icons/emailjs.png";
import routerLogo from "../../../../../assets/img/icons/router.png";
import swiperLogo from "../../../../../assets/img/icons/swiper.png";
import i18nLogo from "../../../../../assets/img/icons/i18n.png";


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
    "react hook form": reactHookFormLogo,
    zod: zodLogo,
    emailjs: emailJsLogo,
    "react router": routerLogo,
    swiperjs: swiperLogo,
    i18next: i18nLogo
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
