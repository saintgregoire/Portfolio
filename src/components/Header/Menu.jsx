import {
  MenuList,
  MenuItem,
  Link,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const pages = ["About", "Skills", "Projects", "Education", "Contacts"];

const HeaderMenu = (props) => {
  const { listStyles, menuItemClickFunction, isMobile } = props;

  return (
    <>
      {isMobile && (
        <>
          <Typography
            variant="h2"
            component="h2"
            sx={{ my: 3, textAlign: "center" }}
          >
            &lt;VM/&gt;
          </Typography>
          <Divider variant="middle" />
        </>
      )}
      <MenuList sx={listStyles}>
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={menuItemClickFunction}
            sx={{
              ...(isMobile && { justifyContent: "center", height: 48 }),
              borderRadius: "8px",
            }}
          >
            <Link href={`#${page.toLowerCase()}`} underline="none">
              {page}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
      <Button
        variant="contained"
        endIcon={<DownloadIcon />}
        component="a"
        href="/CV_VOZNICHKA_MAKSYM_DEV.pdf"
        download
        sx={{ ...(isMobile && { mx: 1 }) }}
      >
        Download CV
      </Button>
    </>
  );
};

export default HeaderMenu;
