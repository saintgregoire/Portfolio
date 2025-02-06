import {List,
  ListItem,
  Typography} from "@mui/material";

const Terms = () => {
  return (
    <>
      <Typography component="h3">Terms of Use</Typography>
      <List sx={{ "& span": { color: "rgba(0, 0, 0, 0.6)" } }}>
        <ListItem>
          <Typography>
            1. General Provisions
            <br /> This website is intended for personal use as a web developer
            portfolio. All materials on the site are the intellectual property
            of the owner and are protected by copyright.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            2. Use of Content
            <br /> Users may use all content on the website except for photos
            where the owner appears and his contact details, without prior
            consent from the website owner.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            3. Liability
            <br /> The website owner is not responsible for any direct or
            indirect damages arising from the use of the site, including but not
            limited to errors or omissions in the content.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            4. Changes to Terms
            <br /> The website owner reserves the right to modify the terms of
            use of the site at any time without prior notice. It is recommended
            to regularly check the current terms of use.
          </Typography>
        </ListItem>
      </List>
      <Typography component="h3">Privacy Policy</Typography>
      <List>
        <ListItem>
          <Typography>
            1. Data Collection
            <br /> We collect users name and email through the contact form on
            the website to send notifications and messages.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            2. Data Usage
            <br /> The collected data is used solely for sending notifications
            and communicating with the user. We do not share data with third
            parties.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            3. Data Storage
            <br /> All data is stored on the server. Data transmission is done
            through EmailJs, ensuring secure transmission.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            4. Data Security
            <br /> We take all necessary measures to protect the data; however,
            we cannot guarantee the complete security of data during its
            transmission over the internet.
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Terms;
