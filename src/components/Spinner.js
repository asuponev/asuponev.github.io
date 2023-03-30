import React from 'react';
import { Stack, CircularProgress, Typography } from '@mui/material';

const Spinner = () => {
  return (
    <Stack alignItems="center" justifyContent="center" spacing={3}>
      <CircularProgress />
      <Typography>
        Loading data
      </Typography>
    </Stack>
  );
}

export default Spinner;