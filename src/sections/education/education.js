import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { educationFetched, educationFetchingError } from '../../store/slices/data';

import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';
import EducationView from './educationView';

const Education = () => {
  const dispatch = useDispatch();
  const { education, educationLoadingStatus } = useSelector(state => state.data.education);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/data/education.json`)
      .then(res => res.json())
      .then(data => dispatch(educationFetched(data)))
      .catch(() => dispatch(educationFetchingError()))
  }, [dispatch]);

  return (
    <Box component="section" className="container" pt={11} id="education">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Education
      </Typography>
      {
        educationLoadingStatus === 'loading' ? <Spinner />
          : educationLoadingStatus === 'error' ? <ErrorMessage />
            : <EducationView data={education} />
      }
    </Box>
  );
}

export default Education;