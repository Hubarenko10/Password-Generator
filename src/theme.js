import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#18171F'
      // default: '#fff'
    }
  },
  typography: {
    fontFamily: 'JetBrains Mono, monospace',
    fontWeightRegular: 400,
    fontWeightBold: 700,
  }
});

export default theme;