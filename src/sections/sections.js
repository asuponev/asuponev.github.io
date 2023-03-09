import React from 'react';
import { Box } from '@mui/material';

import About from './about';
import Experience from './experience';

const Sections = () => {
  return (
    <Box component="main">
      <About />
      <Experience />
    </Box>
  );
}

export default Sections;