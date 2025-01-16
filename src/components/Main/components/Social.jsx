import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Link } from "@mui/material";

const Social = () => {
  return (
    <Box
          component="div"
          sx={{
            display: "flex",
            gap: ".6rem",
            justifyContent: "center",
            alignItems: 'center',
            mt: "2rem",
          }}
        >
          <Link
            href="https://github.com/saintgregoire"
            underline="none"
            target="_blank"
            alt="link to github"
          >
            <GitHubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/maksym-voznichka/"
            underline="none"
            target="_blank"
            alt="link to linkedIn"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="mailto:maksym.voznicka@gmail.com"
            underline="none"
            alt="link to email"
          >
            <EmailIcon />
          </Link>
        </Box>
  )
}

export default Social