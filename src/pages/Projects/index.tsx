import React from 'react';

import { Project } from '../../components';
import ProjectProps from '../../components/Project/types';

import data from '../../db/projects.json';

const Projects: React.FC = () => {
  const projects: ProjectProps[] = data;

  return (
    <>
      {'[\n'}
      {projects.map((project, i) => (
        <Project
          key={i}
          name={project.name}
          description={project.description}
          techStack={project.techStack}
          githubLink={project.githubLink}
          projectLink={project.projectLink}
          isLast={i === projects.length - 1}
        />
      ))}
      {']'}
    </>
  );
};

export default Projects;
