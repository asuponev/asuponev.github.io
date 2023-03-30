import React from 'react';
import { Grid } from '@mui/material';

import ProjectCard from '../../components/cards/project-card';

const ProjectsView = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {
        [...data].reverse().map(project => {
          return (
            <Grid item lg={4} md={6} sm={12} xs={12} key={project.id}>
              <ProjectCard {...project} />
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export default ProjectsView;