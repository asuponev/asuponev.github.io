import React from 'react';
import { Grid } from '@mui/material';

import InfoCard from '../../components/cards/info-card';
import OpenCard from '../../components/cards/open-card';

const ExperienceView = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <OpenCard />
      </Grid>
      {
        [...data].reverse().map(item => {
          return (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
              <InfoCard {...item} />
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export default ExperienceView;