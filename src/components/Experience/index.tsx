import React, { useCallback, useState } from 'react';

import IExperience from './types';
import Ellipsis from '../Ellipsis';
import Tabs from '../Tabs';
import Toggle from '../Toggle';
import { useJsonStyles } from '../../styles';

type Props = IExperience & { isLast: boolean };

const Experience: React.FC<Props> = ({
  position,
  duration,
  location,
  team,
  techStack,
  isLast = false,
}: Props) => {
  const [showExperience, setShowExperience] = useState<boolean>(true);
  const [showTechStack, setShowTechStack] = useState<boolean>(true);

  const handleClick = useCallback(
    (field: 'experience' | 'tech stack') => {
      switch (field) {
        case 'experience':
          setShowExperience(!showExperience);
          break;
        case 'tech stack':
          setShowTechStack(!showTechStack);
          break;
      }
    },
    [showExperience, showTechStack]
  );

  const classes = useJsonStyles();

  return (
    <>
      <Tabs count={2} />"<span className={classes.project}>{position}</span>"
      <span className={classes.code}>: </span>
      {'{'}
      <Toggle
        onClick={() => handleClick('experience')}
        isShown={showExperience}
      />
      {'\n'}
      <Tabs count={3} />
      {showExperience ? (
        <>
          "<span className={classes.info}>duration</span>"
          <span className={classes.code}>: </span>"
          <span className={classes.text}>{duration}</span>"
          <span className={classes.code}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.info}>location</span>"
          <span className={classes.code}>: </span>"
          <span className={classes.text}>{location}</span>"
          <span className={classes.code}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.info}>team</span>"
          <span className={classes.code}>: </span>"
          <span className={classes.text}>{team}</span>"
          <span className={classes.code}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.info}>tech stack</span>"
          <span className={classes.code}>: </span>
          {'['}
          <Toggle
            onClick={() => handleClick('tech stack')}
            isShown={showTechStack}
          />
          {'\n'}
          {showTechStack ? (
            techStack.map((tech, i) => (
              <React.Fragment key={i}>
                <Tabs count={4} />"<span className={classes.text}>{tech}</span>"
                {i !== techStack.length - 1 && (
                  <>
                    <span className={classes.code}>,</span>
                    {'\n'}
                  </>
                )}
              </React.Fragment>
            ))
          ) : (
            <>
              <Tabs count={4} />
              <Ellipsis />
            </>
          )}
          {'\n'}
          <Tabs count={3} />
          {']'}
        </>
      ) : (
        <Ellipsis />
      )}
      {'\n'}
      <Tabs count={2} />
      {'}'}
      {!isLast && (
        <>
          <span className={classes.code}>,</span>
          {'\n'}
        </>
      )}
    </>
  );
};

export default Experience;
