import React, { useState } from 'react';
import { Box, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import * as Elements from './header-elements/header-elements';

import './header.scss';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box component="header" className="header" sx={{ backgroundColor: "background.header" }}>
      <Box className="container">
        <Box className="header__alert">
          <span>NEW SITE VERSION</span>
          <Link href="http://supo.netlify.app/" fontSize={12} underline="hover" color="link.color">
            supo.netlify.app
          </Link>
        </Box>
        <Box className="header__inner">
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Elements.Logo />
          </Box>
          <Elements.ThemeSwitcher />
          <Box
            component="nav"
            className="header__desktop-menu"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Elements.Nav />
          </Box>
          <Elements.Drawer
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;