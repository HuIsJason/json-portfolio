import React from 'react';

import { Tabs } from '../../components/common';
import { Education, Experience, Skills } from './types';

import { useJsonStyles } from '../../styles';

import data from '../../db/resume.json';

const Resume: React.FC = () => {
  const classes = useJsonStyles();
  const {
    education,
    experiences,
    skills,
  }: {
    education: Education;
    experiences: Experience[];
    skills: Skills;
  } = data;

  return (
    <>
      {'{\n'}
      {/* Education */}
      <Tabs />"<span className={classes.page}>Education</span>"
      <span className={classes.code}>: </span>
      {'{\n'}
      <Tabs count={2} />"
      <span className={classes.project}>{education.institution}</span>"
      <span className={classes.code}>: </span>
      {'{\n'}
      <Tabs count={3} />"<span className={classes.info}>degree</span>"
      <span className={classes.code}>: </span>"
      <span className={classes.text}>{education.degree}</span>"
      <span className={classes.code}>,</span>
      {'\n'}
      <Tabs count={3} />"<span className={classes.info}>program</span>"
      <span className={classes.code}>: </span>"
      <span className={classes.text}>{education.program}</span>"
      <span className={classes.code}>,</span>
      {'\n'}
      <Tabs count={3} />"<span className={classes.info}>duration</span>"
      <span className={classes.code}>: </span>"
      <span className={classes.text}>{education.duration}</span>"{'\n'}
      <Tabs count={2} />
      {'}\n'}
      <Tabs />
      {'}'}
      <span className={classes.code}>,</span>
      {'\n'}
      {/* Experience */}
      <Tabs />"<span className={classes.page}>Experience</span>"
      <span className={classes.code}>: </span>
      {'{\n'}
      {experiences.map((experience, i) => (
        <React.Fragment key={i}>
          <Tabs count={2} />"
          <span className={classes.project}>{experience.position}</span>"
          <span className={classes.code}>: </span>
          {'{\n'}
          <Tabs count={3} />"<span className={classes.info}>duration</span>"
          <span className={classes.code}>: </span>"
          <span className={classes.text}>{experience.duration}</span>"
          <span className={classes.code}>,</span>
          {'\n'}
          <Tabs count={3} />"<span className={classes.info}>location</span>"
          <span className={classes.code}>: </span>"
          <span className={classes.text}>{experience.location}</span>"{'\n'}
          <Tabs count={2} />
          {'}'}
          {i !== experiences.length - 1 && (
            <span className={classes.code}>,</span>
          )}
          {'\n'}
        </React.Fragment>
      ))}
      <Tabs />
      {'}'}
      <span className={classes.code}>,</span>
      {'\n'}
      {/* Skills */}
      <Tabs />"<span className={classes.page}>Skills</span>"
      <span className={classes.code}>: </span>
      {'{\n'}
      {Object.keys(skills).map((skillCategory, i) => (
        <React.Fragment key={i}>
          <Tabs count={2} />"
          <span className={classes.project}>{skillCategory}</span>"
          <span className={classes.code}>: </span>[{'\n'}
          {skills[skillCategory].map((skill, i) => (
            <React.Fragment key={i}>
              <Tabs count={3} />"<span className={classes.text}>{skill}</span>"
              {i !== skills[skillCategory].length - 1 && (
                <span className={classes.code}>,</span>
              )}
              {'\n'}
            </React.Fragment>
          ))}
          <Tabs count={2} />]
          {i !== Object.keys(skills).length - 1 && (
            <span className={classes.code}>,</span>
          )}
          {'\n'}
        </React.Fragment>
      ))}
      <Tabs />
      {'}\n}'}
    </>
  );
};

export default Resume;
