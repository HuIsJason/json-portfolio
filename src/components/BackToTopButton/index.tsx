import React, { useCallback } from 'react';
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';

import useStyles from './styles';

const BackToTopButton: React.FC = () => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp color="primary" />
        </Fab>
      </div>
    </Zoom>
  );
};

export default BackToTopButton;
