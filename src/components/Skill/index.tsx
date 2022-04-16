import React, { useCallback, useState } from 'react';

import ISkill from './types';
import Ellipsis from '../Ellipsis';
import Tabs from '../Tabs';
import Toggle from '../Toggle';
import { useJsonStyles } from '../../styles';

type Props = ISkill & { isLast: boolean };

const Skill: React.FC<Props> = ({
  skillCategory,
  skillList,
  isLast = false,
}: Props) => {
  const [showSkills, setShowSkills] = useState<boolean>(true);

  const handleClick = useCallback(() => {
    setShowSkills(!showSkills);
  }, [showSkills]);

  const classes = useJsonStyles();

  return (
    <>
      <Tabs count={2} />"
      <span className={classes.project}>{skillCategory}</span>"
      <span className={classes.code}>: </span>[
      <Toggle onClick={handleClick} isShown={showSkills} />
      {'\n'}
      {showSkills ? (
        skillList.map((skill, i) => (
          <React.Fragment key={i}>
            <Tabs count={3} />"<span className={classes.text}>{skill}</span>"
            {i !== skillList.length - 1 && (
              <>
                <span className={classes.code}>,</span>
                {'\n'}
              </>
            )}
          </React.Fragment>
        ))
      ) : (
        <>
          <Tabs count={3} />
          <Ellipsis />
        </>
      )}
      {'\n'}
      <Tabs count={2} />
      {']'}
      {!isLast && (
        <>
          <span className={classes.code}>,</span>
          {'\n'}
        </>
      )}
    </>
  );
};

export default Skill;
