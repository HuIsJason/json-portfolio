import React, { useCallback, useState } from 'react';

import IExperience from './types';
import Ellipsis from '../Ellipsis';
import Tabs from '../Tabs';
import Toggle from '../Toggle';
import { useJsonStyles } from '../../styles';

interface Props extends IExperience {
  isLast: boolean;
}

const Experience: React.FC<Props> = ({
  position,
  // summary,
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
      <Tabs count={2} />"<span className={classes.red}>{position}</span>"
      <span className={classes.white}>: </span>
      {'{'}
      <Toggle
        onClick={() => handleClick('experience')}
        isShown={showExperience}
      />
      {'\n'}
      <Tabs count={3} />
      {showExperience ? (
        <>
          {/* "<span className={classes.yellow}>summary</span>"
          <span className={classes.white}>: </span>"
          <span className={classes.green}>{summary}</span>"
          <span className={classes.white}>,</span>
          {'\n'}
          <Tabs count={3} /> */}
          "<span className={classes.yellow}>duration</span>"
          <span className={classes.white}>: </span>"
          <span className={classes.green}>{duration}</span>"
          <span className={classes.white}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.yellow}>location</span>"
          <span className={classes.white}>: </span>"
          <span className={classes.green}>{location}</span>"
          <span className={classes.white}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.yellow}>team</span>"
          <span className={classes.white}>: </span>"
          <span className={classes.green}>{team}</span>"
          <span className={classes.white}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.yellow}>tech stack</span>"
          <span className={classes.white}>: </span>
          {'['}
          <Toggle
            onClick={() => handleClick('tech stack')}
            isShown={showTechStack}
          />
          {'\n'}
          {showTechStack ? (
            techStack.map((tech, i) => (
              <React.Fragment key={i}>
                <Tabs count={4} />"<span className={classes.green}>{tech}</span>
                "
                {i !== techStack.length - 1 && (
                  <>
                    <span className={classes.white}>,</span>
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
          <span className={classes.white}>,</span>
          {'\n'}
        </>
      )}
    </>
  );
};

export default Experience;
