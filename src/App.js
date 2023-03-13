import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/header/header';
import Sections from './sections/sections';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Sections />
      <Footer />
    </>
  );
}

export default App;