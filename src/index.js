import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import 'modern-normalize';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
