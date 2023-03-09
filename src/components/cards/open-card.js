import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const OpenCard = () => {
  return (
    <Card>
      <CardContent sx={{ height: 200 }}>
        <Typography color="text.secondary">
          Open for collaboration
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OpenCard;