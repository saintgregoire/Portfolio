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
                component="span"
                variant="body1"
                sx={{ color: "text.primary", display: 'block' }}
              >
                {coursName}
              </Typography>
              <Typography component="span" variant="body2" sx={{display: 'block'}}>
                {date}
              </Typography>
              <Typography component="span" variant="body2" sx={{ pt: ".3rem", fontSize: {md: '16px'}, display: 'block' }}>
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
