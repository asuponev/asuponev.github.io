import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import skillsData from '../data/skills-data';
import SkillItems from '../components/cards/skill-items';

const Skills = () => {

  return (
    <Box component="section" className="container" pt={11} id="skills">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Skills
      </Typography>
      <SkillItems skills={skillsData} />
    </Box>
  );
}

export default Skills;