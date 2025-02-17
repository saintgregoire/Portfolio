import { Avatar, CardContent, CardHeader, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { memo } from "react";

const CardStaticContent = ({ name, post, relation, text }) => {
  return (
    <>
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
        title={<Typography>{name}</Typography>}
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
    </>
  );
};

export default memo(CardStaticContent);
