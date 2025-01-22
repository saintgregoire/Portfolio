import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const ProjectCard = (props) => {

  const {swiperRef, title, description, img, badges, github, site} = props;

  return (
    <Card
      sx={{ maxWidth: { xs: 400 }, margin: "0 auto" }}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
