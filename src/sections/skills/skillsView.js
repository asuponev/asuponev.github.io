import React from 'react';
import { Stack, Typography } from '@mui/material';

const SkillsView = ({ data }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {
        data.map((item, i) => {
          return (
            <Typography key={i} sx={{ backgroundColor: "background.skills", p: 1, borderRadius: 2 }}>
              {item}
            </Typography>
          );
        })
      }
    </Stack>
  );
}

export default SkillsView;