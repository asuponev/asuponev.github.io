import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import ProjectCard from '../components/cards/project-card';
import projectsData from '../data/projects-data';

const Projects = () => {

  const projects = [...projectsData].reverse().map(project => {
    return (
      <Grid item lg={4} md={6} sm={12} xs={12} key={project.id}>
        <ProjectCard {...project} />
      </Grid>
    );
  });

  return (
    <Box component="section" className="container" pt={11} id="projects">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects}
      </Grid>
    </Box>
  );
}

export default Projects;