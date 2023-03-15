import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "background.footer" }} mt={11}>
      <Box className="container">
        <Stack direction="row" py={4} alignItems="center" justifyContent="space-between">
          <Typography color="text.secondary" fontSize={12} fontWeight={400} noWrap>
            © 2023 Andrew Suponev. All rights reserved.
          </Typography>
          <Typography>
            <Link href="https://github.com/elsuppo" fontSize={12} underline="hover" color="link.color">
              Development
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Footer;