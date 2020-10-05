import React from 'react';

import { Tabs } from '..';
import Props from './types';

import { useJsonStyles } from '../../../styles';

const Project: React.FC<Props> = ({
  name,
  description,
  techStack,
  githubLink,
  isLast = false,
}) => {
  const classes = useJsonStyles();

  return (
    <>
      {'\n'}
      <Tabs count={2} />"<span className={classes.project}>{name}</span>"
      <span className={classes.code}>: </span>
      {'{\n'}
      <Tabs count={3} />"<span className={classes.info}>description</span>"
      <span className={classes.code}>: </span>"
      <span className={classes.text}>{description}</span>"
      <span className={classes.code}>,</span>
      {'\n'}
      <Tabs count={3} />"<span className={classes.info}>tech stack</span>"
      <span className={classes.code}>: </span>[{'\n'}
      {techStack.map((tech, i) => (
        <React.Fragment key={i}>
          <Tabs count={4} />"<span className={classes.text}>{tech}</span>"
          {i !== techStack.length - 1 && (
            <span className={classes.code}>,</span>
          )}
          {'\n'}
        </React.Fragment>
      ))}
      <Tabs count={3} />]<span className={classes.code}>,</span>
      {'\n'}
      <Tabs count={3} />"<span className={classes.info}>GitHub</span>"
      <span className={classes.code}>: </span>"
      <a
        className={classes.text}
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {githubLink}
      </a>
      "{'\n'}
      <Tabs count={2} />
      {'}'}
      {!isLast && <span className={classes.code}>,</span>}
    </>
  );
};

export default Project;
