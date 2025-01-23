import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { cardFlip } from "../../../utils/keyframes";
import Badge from "./Badge";

const ProjectCard = (props) => {
  const { swiperRef, title, description, img, badges, github, site } = props;

  return (
    <Box
      component="div"
      sx={{
        maxWidth: 400,
        height: "400px",
        display: 'flex',
        alignItems: 'center',
        transformStyle: "preserve-3d",
        transform: "translate3d(0, 0, 0)",
        position: "relative",
        "&:hover": {
          animation: `${cardFlip} 0.5s linear both`,
        },
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "auto",
          margin: "0 auto",
          position: "absolute",
          backfaceVisibility: "hidden",
        }}
        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay.start()}
      >
        <Box component="div" sx={{ width: "100%", overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="150"
            image={img}
            alt={title}
            sx={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "left top",
            }}
          />
        </Box>

        <CardContent sx={{borderTop: '1px solid lightgrey'}}>
          <Typography
            gutterBottom
            component="h3"
            variant="h5"
            sx={{ fontSize: "19px" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Box component='div' sx={{display: 'flex', gap: '10px', flexWrap: 'wrap', mt: '1rem'}}>
          {badges.map((item, index) => (
            <>
              <Badge key={index} name={item} />
            </>
          ))}
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          position: "absolute",
          backfaceVisibility: "hidden",
          transform: 'rotateX(180deg)',
          width: "100%",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: 'center',
          gap: ".5rem",
          "& a": {
            transition: "transform .5s",
          },
          "& a:hover": {
            transform: "scale(1.5)",
          },
        }}
      >
        <Typography component="h3" variant="h5" sx={{px: '2rem', }}>
          {title}
        </Typography>
        <Typography component="p" variant="body2">
          {description}
        </Typography>
        <Box
          component="div"
          sx={{
            mt: '.5rem',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Link
            href={github}
            underline="none"
            target="_blank"
            alt={`github ${title}`}
          >
            <GitHubIcon sx={{ fontSize: "3rem" }} />
          </Link>
          <Link
            href={site}
            underline="none"
            target="_blank"
            alt={`site ${title}`}
          >
            <LanguageIcon sx={{ fontSize: "3rem" }} />
          </Link>
        </Box>
      </Card>
    </Box>
  );
};

export default ProjectCard;
