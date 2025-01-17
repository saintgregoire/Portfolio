import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Link } from "@mui/material";

const social = [
  {
    id: 1,
    href: "https://github.com/saintgregoire",
    alt: "link to github",
    icon: <GitHubIcon />,
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/maksym-voznichka/",
    alt: "link to linkedIn",
    icon: <LinkedInIcon />,
  },
  {
    id: 3,
    href: "mailto:maksym.voznicka@gmail.com",
    alt: "link to email",
    icon: <EmailIcon />,
  },
];

const Social = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        gap: ".6rem",
        justifyContent: {
          xs: "center",
          lg: "start",
        },
        alignItems: "center",
        mt: "2rem",
      }}
    >
      <>
        {social.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            underline="none"
            target="_blank"
            alt={item.alt}
            sx={{'&:hover': {
              transform: 'scale(1.5)',
            },
            transition: 'transform .3s',
          }}
          >
            {item.icon}
          </Link>
        ))}
      </>
    </Box>
  );
};

export default Social;
