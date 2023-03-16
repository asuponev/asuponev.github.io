import React from 'react';
import { Card, CardContent, Stack, Typography } from '@mui/material';

const InfoCard = ({ date, company, position, description }) => {
  return (
    <Card sx={{ backgroundColor: "background.card" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography color="text.secondary">
            {date}
          </Typography>
          <Typography>
            {company}
          </Typography>
        </Stack>
        <Typography fontSize={20} fontWeight={700} minHeight={60}>
          {position}
        </Typography>
        <Typography minHeight={72}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;