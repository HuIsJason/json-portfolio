import React from 'react';

import { useJsonStyles } from '../../styles';
import { Project, Tabs } from '../../components/common';

import data from '../../db/projects.json';
import { Props as ProjectProps } from '../../components/common/Project';

const Projects: React.FC = () => {
  const classes = useJsonStyles();
  const projects: ProjectProps[] = data;

  return (
    <>
      {'{\n'}
      <Tabs />"<span className={classes.page}>Projects</span>"
      <span className={classes.code}>: </span>
      {'{'}
      {projects.map((project, i) => (
        <Project
          key={i}
          name={project.name}
          description={project.description}
          techStack={project.techStack}
          githubLink={project.githubLink}
          isLast={i === projects.length - 1}
        />
      ))}
      {'\n'}
      <Tabs />
      {'}\n}'}
    </>
  );
};

export default Projects;
