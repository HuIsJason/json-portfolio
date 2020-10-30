import React from 'react';

import { Project, Tabs } from '../../components/common';
import ProjectProps from '../../components/common/Project/types';
import { Links } from '../Home/types';

import { useJsonStyles } from '../../styles';

import data from '../../db/projects.json';
import linkData from '../../db/about.json';

const Projects: React.FC = () => {
  const classes = useJsonStyles();
  const projects: ProjectProps[] = data;
  const { links }: { links: Links } = linkData;

  return (
    <>
      {'{\n'}
      <Tabs />"<span className={classes.page}>GitHub repositories</span>"
      <span className={classes.code}>: </span>"
      <span className={classes.text}>
        <a
          className={classes.text}
          href={links.GitHubRepos.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {links.GitHubRepos.linkName}
        </a>
      </span>
      "<span className={classes.code}>,</span>
      {'\n'}
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
