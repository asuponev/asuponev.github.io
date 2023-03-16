import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import skillsData from '../data/skills-data';

const Skills = () => {

  const skills = skillsData.map((skill, i) => {
    return (
      <Typography key={i} sx={{ backgroundColor: "background.skills", p: 2, borderRadius: 1 }}>
        {skill}
      </Typography>
    );
  });

  return (
    <Box component="section" className="container" pt={11} id="skills">
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