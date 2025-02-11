import { Button, Container, Link, Typography, Box } from "@mui/material";
import { useContext } from "react";
import { DialogContext } from "../context/DialogContext";

const Footer = () => {
  const { setOpenDialog, setContent } = useContext(DialogContext);

  const handleShowLicense = () => {
    setOpenDialog(true);
    setContent("license");
  };

  const handleShowTerms = () => {
    setOpenDialog(true);
    setContent("terms");
  };

  return (
    <Box
      component="footer"
      sx={{ background: "rgb(226, 226, 226, 30%)" }}
    >
      <Container
        component="div"
        maxWidth="xl"
        sx={{
          p: "2rem",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: ".5rem", md: 0 },
          justifyContent: "space-between",
          alignItems: "center",
          "& > p": { flex: { md: "1 1 0" } },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: 500,
            order: { md: 2 },
            textAlign: { md: "center" },
          }}
        >
          <Link href="#" underline="none">
            &lt;VM/&gt;
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ order: { md: 1, fontSize: '16px', } }}>
          © 2025. Licensed under&nbsp;
          <Button
            variant="text"
            onClick={handleShowLicense}
            sx={{
              p: 0,
              fontWeight: 400,
              textTransform: "none",
              fontSize: '16px',
              "&:hover": {
                background: "none",
                textDecoration: "underline",
              },
            }}
          >
            MIT License
          </Button>
        </Typography>
        <Typography
          variant="body2"
          sx={{ order: { md: 3 }, textAlign: { md: "end" } }}
        >
          <Button
            variant="text"
            onClick={handleShowTerms}
            sx={{
              p: 0,
              fontWeight: 400,
              textTransform: "none",
              fontSize: '16px',
              "&:hover": {
                background: "none",
                textDecoration: "underline",
              },
            }}
          >
            Terms of Use & Privacy Policy
          </Button>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
