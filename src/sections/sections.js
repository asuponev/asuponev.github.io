import React from 'react';
import { Box } from '@mui/material';

import About from './about/about';
import Experience from './experience/experience';
import Skills from './skills/skills';
import Education from './education/education';
import Projects from './projects/projects';

const Sections = () => {
  return (
    <Box component="main">
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
    </Box>
  );
}

export default Sections;