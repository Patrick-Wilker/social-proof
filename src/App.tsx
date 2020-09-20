import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import {colors} from './assets/styles/_variables';
import GlobalStyle from './assets/styles/global';

function App() {
  return (
    <>
        <ThemeProvider theme={colors}>
            <Routes/>
            <GlobalStyle/>
        </ThemeProvider>
    </>
  );
}

export default App;
