import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { Drawer } from "@mui/material";
import { useState } from "react";
import HeaderMenu from "./Menu";

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar id='back-to-top-anchor' position="static" sx={{ background: "white" }}>
      <Toolbar sx={{px:{
        md: '30px',
      }}}>
        <Typography variant="h2" component="span" sx={{ flexGrow: 1 }}>
          &lt;VM/&gt;
        </Typography>
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
                listStyles={{ width: 200}}
                menuItemClickFunction={() => setToggleDrawer(false)}
                isMobile={isMobile}
              />
            </Drawer>
          </>
        ) : (
          <HeaderMenu listStyles={{ display: "flex", pr: "1rem" }} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
