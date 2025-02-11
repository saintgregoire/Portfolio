import {
  MenuList,
  MenuItem,
  Link,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";

const HeaderMenu = (props) => {
  const { listStyles, menuItemClickFunction, isMobile } = props;
  const { t } = useTranslation();

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
        {t("menu", {returnObjects: true}).map((page) => (
          <MenuItem
            key={page.id}
            onClick={menuItemClickFunction}
            sx={{
              ...(isMobile && { justifyContent: "center", height: 48 }),
              borderRadius: "8px",
            }}
          >
            <Link href={`#${page.id}`} underline="none">
              {page.name}
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
        {t("download CV")}
      </Button>
    </>
  );
};

export default HeaderMenu;
