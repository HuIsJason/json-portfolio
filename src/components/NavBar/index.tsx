import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar,
  Divider,
  Grid,
  // Slide,
  Toolbar,
  Typography,
  // useScrollTrigger,
} from '@material-ui/core';

import useStyles from './styles';
import { useJsonStyles } from '../../styles';

// interface Props {
//   children: React.ReactElement;
// }

// const HideOnScroll: React.FC<Props> = ({ children }) => {
//   const trigger = useScrollTrigger();

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// };

const NavBar: React.FC = () => {
  const classes = useStyles();
  const jsonClasses = useJsonStyles();

  return (
    <>
      {/* <HideOnScroll> */}
      <AppBar className={classes.root} color="primary" position="static">
        <Toolbar id="back-to-top-anchor">
          <Typography
            className={classes.title}
            variant="h3"
            component={Link}
            to="/"
          >
            {'{'}&nbsp;<span className={jsonClasses.code}>JasonHu</span>
            &nbsp;
            {'}'}
          </Typography>
          <Grid container justify="flex-end">
            <Grid item>
              <NavLink
                activeClassName={classes.selected}
                className={classes.navLink}
                to="/resume"
              >
                <Typography className={classes.linkText} variant="h5">
                  <span className={jsonClasses.code}>Resume</span>.json
                </Typography>
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink
                activeClassName={classes.selected}
                className={classes.navLink}
                to="/projects"
              >
                <Typography className={classes.linkText} variant="h5">
                  <span className={jsonClasses.code}>Projects</span>.json
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
      <Divider className={classes.divider} variant="middle" />
    </>
  );
};

export default NavBar;
