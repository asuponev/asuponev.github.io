import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

import { aboutFetched, aboutFetchingError } from '../../store/slices/data';

import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';
import AboutView from './aboutView';

const About = () => {
  const dispatch = useDispatch();
  const { about, aboutLoadingStatus } = useSelector(state => state.data.about);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/data/about.json`)
      .then(res => res.json())
      .then(data => dispatch(aboutFetched(data)))
      .catch(() => dispatch(aboutFetchingError()))
  }, [dispatch]);

  return (
    <Box component="section" className="container" pt={20} id="about">
      {
        aboutLoadingStatus === 'loading' ? <Spinner />
          : aboutLoadingStatus === 'error' ? <ErrorMessage />
            : <AboutView {...about} />
      }
    </Box>
  );
}

export default About;