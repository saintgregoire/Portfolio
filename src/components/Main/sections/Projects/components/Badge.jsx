import { Box, Typography } from "@mui/material";
import bootstrapLogo from "../../../../../assets/img/webp/bootstrap.webp";
import cssLogo from "../../../../../assets/img/icons/css-512.webp";
import gulpLogo from "../../../../../assets/img/icons/gulp.webp";
import htmlLogo from "../../../../../assets/img/icons/html.webp";
import jsLogo from "../../../../../assets/img/webp/js.webp";
import muiLogo from "../../../../../assets/img/webp/mui.webp";
import phpLogo from "../../../../../assets/img/webp/php.webp";
import reactLogo from "../../../../../assets/img/webp/react.webp";
import restApiLogo from "../../../../../assets/img/webp/rest_api.webp";
import sassLogo from "../../../../../assets/img/webp/sass.webp";
import tailwindLogo from "../../../../../assets/img/webp/tailwind.webp";
import twigLogo from "../../../../../assets/img/webp/twig.webp";
import viteLogo from "../../../../../assets/img/webp/vite.webp";
import mySqlLogo from "../../../../../assets/img/icons/mysql.webp";
import reactHookFormLogo from "../../../../../assets/img/webp/react-hook-form.webp";
import zodLogo from "../../../../../assets/img/webp/zod.webp";
import emailJsLogo from "../../../../../assets/img/webp/emailjs.webp";
import routerLogo from "../../../../../assets/img/webp/router.webp";
import swiperLogo from "../../../../../assets/img/webp/swiper.webp";
import i18nLogo from "../../../../../assets/img/webp/i18n.webp";


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
