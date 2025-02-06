import { Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      component="footer"
      maxWidth="xl"
      sx={{
        background: "rgb(226, 226, 226, 30%)",
        p: "2rem",
        display: "flex",
        flexDirection: {xs: 'column', md: 'row'},
        gap: {xs: '.5rem', md: 0},
        justifyContent: "space-between",
        alignItems: "center",
        "& > p": {flex: {md:'1 1 0'}},
      }}
    >
      <Typography sx={{fontSize: '1.5rem', fontWeight: 500, order: {md: 2}, textAlign: {md: 'center'}}}>
        <Link href="#" underline="none">
        &lt;VM/&gt;
        </Link>
        </Typography>
      <Typography variant="body2" sx={{order: {md: 1}}}>
        © 2025. Licensed under&nbsp;
        <Link href="/LICENSE" color="#18181b">
          MIT License
        </Link>
      </Typography>
      <Typography variant="body2" sx={{order: {md: 3}, textAlign: {md: 'end'}}}>
        <Link href="#" color="#18181b" >
          Terms of Use & Privacy Policy
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
