import {
  Avatar,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Link,
  IconButton,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useRef, useState } from "react";

const RecommendationCard = (props) => {
  const { name, post, relation, text } = props;

  const [expanded, setExpanded] = useState(false);
  const [showExpandBtn, setShowExpandBtn] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setShowExpandBtn(cardRef.current.scrollHeight > 301);
    }
  }, []);

  return (
    <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        ref={cardRef}
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
            background: `${
              showExpandBtn &&
              "linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)"
            }`,
          },
        }}
      >
        <CardHeader
          sx={{ p: "1.5rem 1.5rem 0" }}
          avatar={<Avatar aria-label="recipe">{name[0]}</Avatar>}
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
          title={name}
          subheader={
            <>
              {post}
              <Typography variant="body2" sx={{ color: "#18181b" }}>
                {relation}
              </Typography>
            </>
          }
        />
        <CardContent sx={{ p: "1rem 1.5rem 1.5rem" }}>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", pb: "1.5rem" }}
          >
            {text}
          </Typography>
        </CardContent>
        {showExpandBtn && (
          <IconButton
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
        )}
      </Card>
    </Box>
  );
};

export default RecommendationCard;
