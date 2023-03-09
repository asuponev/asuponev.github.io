import React from 'react';
import { Box, Divider, Drawer } from '@mui/material';

import * as Elements from './header-elements';

export const CustomDrawer = ({ mobileOpen, handleDrawerToggle }) => {
  return (
    <Drawer
      open={mobileOpen}
      onClose={handleDrawerToggle}
      className="header__drawer"
      sx={{ display: { xs: "block", sm: "none" } }}
    >
      <Box onClick={handleDrawerToggle}>
        <Box px={3} py={2}>
          <Elements.Logo />
        </Box>
        <Divider />
        <Box component="nav" className="header__mobile-menu">
          <Elements.Nav />
        </Box>
      </Box>
    </Drawer>
  );
}