import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'theme';
import GlobalStyles from 'components/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
