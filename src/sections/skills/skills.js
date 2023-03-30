import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

import { skillsFetched, skillsFetchingError } from '../../store/slices/data';

import Spinner from '../../components/Spinner';
import ErrorMessage from '../../components/ErrorMessage';
import SkillsView from './skillsView';

const Skills = () => {
  const dispatch = useDispatch();
  const { skills, skillsLoadingStatus } = useSelector(state => state.data.skills);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/data/skills.json`)
      .then(res => res.json())
      .then(data => dispatch(skillsFetched(data)))
      .catch(() => dispatch(skillsFetchingError()))
  }, [dispatch]);

  return (
    <Box component="section" className="container" pt={11} id="skills">
      <Typography fontWeight={500} fontSize={24} mb={3}>
        Skills
      </Typography>
      {
        skillsLoadingStatus === 'loading' ? <Spinner />
          : skillsLoadingStatus === 'error' ? <ErrorMessage />
            : <SkillsView data={skills} />
      }
    </Box>
  );
}

export default Skills;