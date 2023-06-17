import React from 'react';
import { Stack, Typography } from '@mui/material';

const SkillsView = ({ data }) => {
  console.log(data)
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {
        data[0].items.map((item, i) => {
          return (
            <Typography key={i} sx={{ backgroundColor: "background.skills", p: 1, borderRadius: 2 }}>
              {item.label}
            </Typography>
          );
        })
      }
      {
        data[1].items.map((item, i) => {
          return (
            <Typography key={i} sx={{ backgroundColor: "background.skills", p: 1, borderRadius: 2 }}>
              {item.label}
            </Typography>
          );
        })
      }
    </Stack>
  );
}

export default SkillsView;