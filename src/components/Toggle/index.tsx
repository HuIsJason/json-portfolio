import React from 'react';

import { useJsonStyles } from '../../styles';

interface Props {
  isShown: boolean;
  onClick: () => void;
}

const Toggle: React.FC<Props> = ({ isShown, onClick }: Props) => {
  const classes = useJsonStyles();

  // arrows:   ˅˃   🢓🢒   ⮟⮞
  return (
    <span onClick={onClick} className={classes.white}>
      {' '}
      {isShown ? '˅' : '˃'}
    </span>
  );
};

export default Toggle;
