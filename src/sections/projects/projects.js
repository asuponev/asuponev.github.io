import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { projectsFetched, projectsFetchingError } from '../../store/slices/data';

import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';
import ProjectsView from './projectsView';

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, projectsLoadingStatus } = useSelector(state => state.data.projects);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/data/projects.json`)
      .then(res => res.json())
      .then(data => dispatch(projectsFetched(data)))
      .catch(() => dispatch(projectsFetchingError()))
  }, [dispatch]);

  return (
    <Box component="section" className="container" pt={11} id="projects">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Projects
      </Typography>
      {
        projectsLoadingStatus === 'loading' ? <Spinner />
          : projectsLoadingStatus === 'error' ? <ErrorMessage />
            : <ProjectsView data={projects} />
      }
    </Box>
  );
}

export default Projects;