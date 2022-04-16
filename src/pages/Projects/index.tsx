import React, { useCallback, useState } from 'react';

import { Ellipsis, Project, Tabs, Toggle } from '../../components';
import IProject from '../../components/Project/types';
import data from '../../db/projects.json';

const Projects: React.FC = () => {
  const [showProjects, setShowProjects] = useState<boolean>(true);

  const handleClick = useCallback(() => {
    setShowProjects(!showProjects);
  }, [showProjects]);

  const projects: IProject[] = data;

  return (
    <>
      {'['}
      <Toggle onClick={handleClick} isShown={showProjects} />
      {'\n'}
      {showProjects ? (
        projects.map((project, i) => (
          <Project key={i} {...project} isLast={i === projects.length - 1} />
        ))
      ) : (
        <>
          <Tabs />
          <Ellipsis />
        </>
      )}
      {'\n]'}
    </>
  );
};

export default Projects;
