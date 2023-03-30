import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { experienceFetched, experienceFetchingError } from '../../store/slices/data';

import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';
import ExperienceView from './experienceView';

const Experience = () => {
  const dispatch = useDispatch();
  const { experience, experienceLoadingStatus } = useSelector(state => state.data.experience);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/data/experience.json`)
      .then(res => res.json())
      .then(data => dispatch(experienceFetched(data)))
      .catch(() => dispatch(experienceFetchingError()))
  }, [dispatch]);

  return (
    <Box component="section" className="container" pt={11} id="experience">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Experience
      </Typography>
      {
        experienceLoadingStatus === 'loading' ? <Spinner />
          : experienceLoadingStatus === 'error' ? <ErrorMessage />
            : <ExperienceView data={experience} />
      }
    </Box>
  );
}

export default Experience;