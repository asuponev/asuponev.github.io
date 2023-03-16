import React from 'react';
import { Stack, Typography } from '@mui/material';

const SkillItems = ({ skills }) => {
  return (
    <Stack direction="row" alignItems="flex-start" justifyContent="flex-start" flexWrap="wrap" gap={1}>
      {
        skills.map((skill, i) => {
          return (
            <Typography key={i} sx={{ backgroundColor: "background.skills", p: 1, borderRadius: 2 }}>
              {skill}
            </Typography>
          );
        })
      }
    </Stack>
  );
}

export default SkillItems;