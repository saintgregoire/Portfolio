/* eslint-disable react/prop-types */
import { MenuList, MenuItem, Link, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const HeaderMenu = (props) => {
  const { listStyles, menuItemClickFunction, isMobile } = props;
  const pages = ["About", "Skills", "Projects", "Education", "Contacts"];

  return (
    <>
      <MenuList sx={listStyles}>
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={menuItemClickFunction}
            sx={{ ...(isMobile && { justifyContent: "center", height: 48 }) }}
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
