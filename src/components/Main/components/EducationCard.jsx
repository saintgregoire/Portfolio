import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";

const EducationCard = (props) => {
  const { img, title, coursName, desc, date } = props;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={title} src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="h3"
              sx={{
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              {title}
            </Typography>
          }
          secondary={
            <>
              <Typography
                component="p"
                variant="body1"
                sx={{ color: "text.primary" }}
              >
                {coursName}
              </Typography>
              <Typography component="p" variant="body2">
                {date}
              </Typography>
              <Typography component="p" variant="body2" sx={{ pt: ".3rem", fontSize: {md: '16px'} }}>
                {desc}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default EducationCard;
