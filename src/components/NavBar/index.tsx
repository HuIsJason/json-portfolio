import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Divider, Grid, Toolbar, Typography } from '@material-ui/core';

import { About } from '../../pages/Home/types';

import useStyles from './styles';
import { useJsonStyles } from '../../styles';

import data from '../../db/about.json';

const NavBar: React.FC = () => {
  const classes = useStyles();
  const jsonClasses = useJsonStyles();

  const { about }: { about: About } = data;

  return (
    <>
      <AppBar className={classes.root} color="primary" position="static">
        <Toolbar id="back-to-top-anchor">
          <Typography
            className={classes.title}
            variant="h3"
            component={Link}
            to="/"
          >
            {'{'}&nbsp;
            <span className={jsonClasses.code}>
              {about.name.replace(/\s+/g, '')}
            </span>
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
      <Divider className={classes.divider} variant="middle" />
    </>
  );
};

export default NavBar;
