import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  divider: {
    marginBottom: theme.spacing(5),
  },
  title: {
    textDecoration: 'none',
    paddingLeft: theme.spacing(3),
  },
  navLink: {
    textDecoration: 'none',
  },
  linkText: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  selected: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'wavy',
    textDecorationWidth: '0.1',
    textDecorationColor: '#F54E4E',
  },
}));
