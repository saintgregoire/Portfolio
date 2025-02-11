import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { Container, Drawer, Link } from "@mui/material";
import { useState } from "react";
import HeaderMenu from "./components/Menu";
import HideOnScroll from "./components/HideOnScroll";
import LanguageBtn from "./components/LanguageBtn";

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <HideOnScroll>
      <AppBar sx={{ background: "white" }}>
        <Container component="div" maxWidth="xl" sx={{position: 'relative'}}>
          <Toolbar
            sx={{
              px: { xs: 0 },
            }}
          >
            <Link
              href="#back-to-top-anchor"
              underline="none"
              variant="h2"
              sx={{ flexGrow: 1 }}
            >
              &lt;VM/&gt;
            </Link>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  onClick={() => setToggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={toggleDrawer}
                  onClose={() => setToggleDrawer(false)}
                >
                  <HeaderMenu
                    listStyles={{ width: 200 }}
                    menuItemClickFunction={() => setToggleDrawer(false)}
                    isMobile={isMobile}
                  />
                </Drawer>
              </>
            ) : (
              <HeaderMenu listStyles={{ display: "flex", pr: "1rem" }} />
            )}
          </Toolbar>
          <LanguageBtn />
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
