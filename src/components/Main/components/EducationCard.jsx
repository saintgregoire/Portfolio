import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Divider } from "@mui/material"


const EducationCard = (props) => {

  const {img, title, coursName, desc } = props;

  return (
    <>
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={title} src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <>
              <Typography
                component="span"
                variant="body1"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                {coursName}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                sx={{ display: 'block' }}
              >
                {desc}
              </Typography>
            </>
          }
          slotProps={{
            primary: {
              component: 'h3',
              sx: {
                fontWeight: '500',
                fontSize: '19px',
              }
            }
          }}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
  )
}

export default EducationCard