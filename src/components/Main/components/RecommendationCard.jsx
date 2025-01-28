import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Link,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const RecommendationCard = (props) => {
  const {} = props;

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "max-height .5s",
        maxHeight: `${expanded ? "1000px" : "300px"}`,
        overflow: "hidden",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: "60px",
          background:
            "linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)",
        },
      }}
    >
      <CardHeader
        sx={{ p: "1.5rem 1.5rem 0" }}
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <Link
            underline="none"
            href="https://www.linkedin.com/in/maksym-voznichka/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            sx={{ color: "#0A66C2" }}
          >
            <LinkedInIcon />
          </Link>
        }
        В
        title="Mari Ducet"
        subheader={
          <>
            Co-founder Kornog
            <Typography variant="body2" sx={{ color: "#18181b" }}>
              Mari was Maksym&apos;s teacher
            </Typography>
          </>
        }
      />
      <CardContent sx={{ p: "1rem 1.5rem 1.5rem" }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", pb: "1.5rem" }}
        >
          I had the pleasure of observing Maxim&apos;s impressive progress as he
          completed the Frontend Basic course with excellence. From start to
          finish, Maxim demonstrated not only a solid understanding of the
          material but also a proactive and detail-oriented approach to every
          task. Maxim consistently delivered high-quality work, meeting and
          often exceeding expectations. He showcased a strong ability to grasp
          core frontend concepts and applied them effectively in practical
          assignments. What stood out the most was his meticulous attention to
          detail, problem-solving mindset, and unwavering commitment to
          producing clean and efficient code. In addition to his technical
          skills, Maxim's professionalism and dedication were evident throughout
          the course. He approached challenges with enthusiasm and maintained a
          collaborative attitude, making him a pleasure to work with. I am
          confident that Maxim will continue to excel as he advances in his
          frontend development journey. He has the potential to bring
          significant value to any team or project he joins. I highly recommend
          him to anyone looking for a skilled and reliable junior frontend
          developer.
        </Typography>
      </CardContent>
      <IconButton
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        sx={{
          position: "absolute",
          bottom: 5,
          left: "50%",
          zIndex: 99999,
          p: 0,
          transition: "transform .5s",
          transform: `translateX(-50%) ${
            expanded ? "rotate(180deg)" : "rotate(0deg)"
          }`,
        }}
      >
        <ExpandMoreIcon />
      </IconButton>
    </Card>
  );
};

export default RecommendationCard;
