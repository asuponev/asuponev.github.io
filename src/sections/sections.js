import React from 'react';
import { Box } from '@mui/material';

import About from './about';
import Experience from './experience';
import Skills from './skills';
import Education from './education';

const Sections = () => {
  return (
    <Box component="main">
      <About />
      <Experience />
      <Skills />
      <Education />
    </Box>
  );
}

export default Sections;