import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  about: {
    about: {},
    aboutLoadingStatus: 'loading'
  },
  experience: {
    experience: [],
    experienceLoadingStatus: 'loading'
  },
  skills: {
    skills: [],
    skillsLoadingStatus: 'loading'
  },
  education: {
    education: [],
    educationLoadingStatus: 'loading'
  },
  projects: {
    projects: [],
    projectsLoadingStatus: 'loading'
  },
}

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    aboutFetched: (state, action) => {
      state.about.aboutLoadingStatus = 'idle';
      state.about.about = action.payload;
    },
    aboutFetchingError: state => { state.about.aboutLoadingStatus = 'error' },
    experienceFetched: (state, action) => {
      state.experience.experienceLoadingStatus = 'idle';
      state.experience.experience = action.payload;
    },
    experienceFetchingError: state => { state.experience.experienceLoadingStatus = 'error' },
    skillsFetched: (state, action) => {
      state.skills.skillsLoadingStatus = 'idle';
      state.skills.skills = action.payload;
    },
    skillsFetchingError: state => { state.skills.skillsLoadingStatus = 'error' },
    educationFetched: (state, action) => {
      state.education.educationLoadingStatus = 'idle';
      state.education.education = action.payload;
    },
    educationFetchingError: state => { state.education.educationLoadingStatus = 'error' },
    projectsFetched: (state, action) => {
      state.projects.projectsLoadingStatus = 'idle';
      state.projects.projects = action.payload;
    },
    projectsFetchingError: state => { state.projects.projectsLoadingStatus = 'error' },
  }
});

const { actions, reducer } = dataSlice;

export default reducer;
export const {
  aboutFetched,
  aboutFetchingError,
  experienceFetched,
  experienceFetchingError,
  skillsFetched,
  skillsFetchingError,
  educationFetched,
  educationFetchingError,
  projectsFetched,
  projectsFetchingError
} = actions;