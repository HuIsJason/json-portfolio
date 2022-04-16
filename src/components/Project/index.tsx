import React, { useCallback, useState } from 'react';

import IProject from './types';
import Ellipsis from '../Ellipsis';
import Tabs from '../Tabs';
import Toggle from '../Toggle';
import { useJsonStyles } from '../../styles';

interface Props extends IProject {
  isLast: boolean;
}

const Project: React.FC<Props> = ({
  name,
  description,
  techStack,
  githubLink,
  projectLink,
  isLast = false,
}: Props) => {
  const [showProject, setShowProject] = useState<boolean>(true);
  const [showProjectInfo, setShowProjectInfo] = useState<boolean>(true);
  const [showTechStack, setShowTechStack] = useState<boolean>(true);

  const handleClick = useCallback(
    (field: 'project' | 'project info' | 'tech stack') => {
      switch (field) {
        case 'project':
          setShowProject(!showProject);
          break;
        case 'project info':
          setShowProjectInfo(!showProjectInfo);
          break;
        case 'tech stack':
          setShowTechStack(!showTechStack);
          break;
      }
    },
    [showProject, showProjectInfo, showTechStack]
  );

  const classes = useJsonStyles();

  return (
    <>
      <Tabs />
      {'{'}
      <Toggle onClick={() => handleClick('project')} isShown={showProject} />
      {'\n'}
      <Tabs count={2} />
      {showProject ? (
        <>
          "<span className={classes.red}>{name}</span>"
          <span className={classes.white}>: </span>
          {'{'}
          <Toggle
            onClick={() => handleClick('project info')}
            isShown={showProjectInfo}
          />
          {'\n'}
          <Tabs count={3} />
          {showProjectInfo ? (
            <>
              "<span className={classes.yellow}>description</span>"
              <span className={classes.white}>: </span>"
              <span className={classes.green}>{description}</span>"
              <span className={classes.white}>,</span>
              {'\n'}
              <Tabs count={3} />"
              <span className={classes.yellow}>tech stack</span>"
              <span className={classes.white}>: </span>[
              <Toggle
                onClick={() => handleClick('tech stack')}
                isShown={showTechStack}
              />
              {'\n'}
              {showTechStack ? (
                techStack.map((tech, i) => (
                  <React.Fragment key={i}>
                    <Tabs count={4} />"
                    <span className={classes.green}>{tech}</span>"
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
              <Tabs count={3} />]<span className={classes.white}>,</span>
              {'\n'}
              <Tabs count={3} />"<span className={classes.yellow}>GitHub</span>"
              <span className={classes.white}>: </span>"
              <a
                className={classes.green}
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {githubLink}
              </a>
              "
              {projectLink && (
                <>
                  <span className={classes.white}>,</span>
                  {'\n'}
                  <Tabs count={3} />"
                  <span className={classes.yellow}>link</span>"
                  <span className={classes.white}>: </span>"
                  <a
                    className={classes.green}
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectLink}
                  </a>
                  "
                </>
              )}
            </>
          ) : (
            <>
              <Ellipsis />
            </>
          )}
          {'\n'}
          <Tabs count={2} />
          {'}'}
        </>
      ) : (
        <Ellipsis />
      )}
      {'\n'}
      <Tabs />
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

export default Project;
