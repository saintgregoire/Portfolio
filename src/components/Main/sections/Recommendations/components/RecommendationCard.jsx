import { Card, IconButton, Box } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardStaticContent from "./CardStaticContent";
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
      setShowExpandBtn(cardRef.current.scrollHeight > 315);
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
        <CardStaticContent
          name={name}
          post={post}
          relation={relation}
          text={text}
        />
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
