import React from 'react';
import { Stack, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorMessage = () => {
  return (
    <Stack alignItems="center" spacing={3}>
      <ErrorOutlineIcon fontSize="large" />
      <Typography>
        Oops, failed to load data
      </Typography>
    </Stack>
  );
}

export default ErrorMessage;