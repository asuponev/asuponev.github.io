import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import skillsData from '../data/skills-data';

const Skills = () => {

  const skills = skillsData.map(skill => {
    return (
      <Typography>
        {skill}
      </Typography>
    );
  });

  return (
    <Box component="section" className="container" mt={11} id="skills">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Skills
      </Typography>
      <Stack direction="row" alignItems="center" flexWrap="wrap" gap={1}>
        {skills}
      </Stack>
    </Box>
  );
}

export default Skills;