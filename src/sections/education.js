import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import InfoCard from '../components/cards/info-card';
import educationData from '../data/education-data';

const Education = () => {

  const cards = [...educationData].reverse().map(item => {
    return (
      <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
        <InfoCard {...item} />
      </Grid>
    );
  });

  return (
    <Box component="section" className="container" mt={11} id="education">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Education
      </Typography>
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Box>
  );
}

export default Education;