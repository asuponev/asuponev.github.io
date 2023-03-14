import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { themeSettings } from './theme/theme';

import Header from './components/header/header';
import Sections from './sections/sections';
import Footer from './components/footer/footer';
import ThemeSwitcher from './components/theme-switcher/theme-switcher';

const App = () => {
  const { mode } = useSelector(state => state.options);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeSwitcher />
      <Header />
      <Sections />
      <Footer />
    </ThemeProvider>
  );
}

export default App;