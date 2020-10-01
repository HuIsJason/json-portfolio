import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#303030',
    },
    secondary: {
      main: '#F54E4E',
    },
    // background: {
    //   default: '#212121',
    // },
  },
  typography: {
    fontFamily: ['"Source Code Pro"', 'monospace'].join(','),
    allVariants: {
      color: '#ACFCFC',
    },
  },
});
