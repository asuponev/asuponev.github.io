import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import InfoCard from '../components/cards/info-card';
import OpenCard from '../components/cards/open-card';
import experienceData from '../data/experience-data';

const Experience = () => {

  const cards = [...experienceData].reverse().map(item => {
    return (
      <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
        <InfoCard {...item} />
      </Grid>
    );
  });

  return (
    <Box component="section" className="container" mt={11} id="experience">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Experience
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <OpenCard />
        </Grid>
        {cards}
      </Grid>
    </Box>
  );
}

export default Experience;