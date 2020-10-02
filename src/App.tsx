import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import { useAppStyles, useJsonStyles } from './styles';
import { BackToTopButton, NavBar } from './components';
import { Home, Projects, Resume } from './pages';

const App: React.FC = () => {
  const classes = useAppStyles();
  const jsonClasses = useJsonStyles();

  return (
    <>
      <NavBar />
      <Switch>
        <Container className={classes.root}>
          <Typography className={jsonClasses.root} variant="h5">
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects} />
          </Typography>
        </Container>
      </Switch>
      <BackToTopButton />
    </>
  );
};

export default App;
