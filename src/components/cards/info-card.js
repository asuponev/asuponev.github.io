import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const InfoCard = ({ date, company, position, description }) => {
  return (
    <Card sx={{ backgroundColor: "background.card" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1, height: 200 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">
            {date}
          </Typography>
          <Typography >
            {company}
          </Typography>
        </Stack>
        <Typography fontWeight={700}>
          {position}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;