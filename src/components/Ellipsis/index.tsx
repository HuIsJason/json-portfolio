import React from 'react';

import { useJsonStyles } from '../../styles';

const Ellipsis: React.FC = () => {
  const classes = useJsonStyles();

  return <span className={classes.code}>...</span>;
};

export default Ellipsis;
