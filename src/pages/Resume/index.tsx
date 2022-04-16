import React, { useCallback, useState } from 'react';

import { Education, Skills } from './types';
import { Ellipsis, Experience, Skill, Tabs, Toggle } from '../../components';
import IExperience from '../../components/Experience/types';
import { useJsonStyles } from '../../styles';
import data from '../../db/resume.json';

const Resume: React.FC = () => {
  const [showResume, setShowResume] = useState<boolean>(true);
  const [showEducation, setShowEducation] = useState<boolean>(true);
  const [showSchool, setShowSchool] = useState<boolean>(true);
  const [showExperiences, setShowExperiences] = useState<boolean>(true);
  const [showSkills, setShowSkills] = useState<boolean>(true);
  const [showLanguages, setShowLanguages] = useState<boolean>(true);
  const [showLibraries, setShowLibraries] = useState<boolean>(true);
  const [showTools, setShowTools] = useState<boolean>(true);
  const [showMethodologies, setShowMethodologies] = useState<boolean>(true);

  const handleClick = useCallback(
    (
      field:
        | 'resume'
        | 'education'
        | 'school'
        | 'experiences'
        | 'skills'
        | 'languages'
        | 'libraries'
        | 'tools'
        | 'methodologies'
    ) => {
      switch (field) {
        case 'resume':
          setShowResume(!showResume);
          break;
        case 'education':
          setShowEducation(!showEducation);
          break;
        case 'school':
          setShowSchool(!showSchool);
          break;
        case 'experiences':
          setShowExperiences(!showExperiences);
          break;
        case 'skills':
          setShowSkills(!showSkills);
          break;
        case 'languages':
          setShowLanguages(!showLanguages);
          break;
        case 'libraries':
          setShowLibraries(!showLibraries);
          break;
        case 'tools':
          setShowTools(!showTools);
          break;
        case 'methodologies':
          setShowMethodologies(!showMethodologies);
          break;
      }
    },
    [
      showResume,
      showEducation,
      showSchool,
      showExperiences,
      showSkills,
      showLanguages,
      showLibraries,
      showTools,
      showMethodologies,
    ]
  );

  const classes = useJsonStyles();
  const {
    education,
    experiences,
    skills,
  }: {
    education: Education;
    experiences: IExperience[];
    skills: Skills;
  } = data;

  return (
    <>
      {'{'}
      <Toggle onClick={() => handleClick('resume')} isShown={showResume} />
      {'\n'}
      <Tabs />
      {showResume ? (
        <>
          "<span className={classes.page}>Resume</span>"
          <span className={classes.code}>: </span>"
          <span className={classes.text}>
            <a
              className={classes.text}
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              /Resume.pdf
            </a>
          </span>
          "<span className={classes.code}>,</span>
          {'\n'}
          {/* Education */}
          <Tabs />"<span className={classes.page}>Education</span>"
          <span className={classes.code}>: </span>
          {'{'}
          <Toggle
            onClick={() => handleClick('education')}
            isShown={showEducation}
          />
          {'\n'}
          <Tabs count={2} />
          {showEducation ? (
            <>
              "<span className={classes.project}>{education.institution}</span>"
              <span className={classes.code}>: </span>
              {'{'}
              <Toggle
                onClick={() => handleClick('school')}
                isShown={showSchool}
              />
              {'\n'}
              <Tabs count={3} />
              {showSchool ? (
                <>
                  "<span className={classes.info}>degree</span>"
                  <span className={classes.code}>: </span>"
                  <span className={classes.text}>{education.degree}</span>"
                  <span className={classes.code}>,</span>
                  {'\n'}
                  <Tabs count={3} />"
                  <span className={classes.info}>program</span>"
                  <span className={classes.code}>: </span>"
                  <span className={classes.text}>{education.program}</span>"
                  <span className={classes.code}>,</span>
                  {'\n'}
                  <Tabs count={3} />"
                  <span className={classes.info}>duration</span>"
                  <span className={classes.code}>: </span>"
                  <span className={classes.text}>{education.duration}</span>"
                </>
              ) : (
                <Ellipsis />
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
          <span className={classes.code}>,</span>
          {'\n'}
          {/* Experience */}
          <Tabs />"<span className={classes.page}>Experience</span>"
          <span className={classes.code}>: </span>
          {'{'}
          <Toggle
            onClick={() => handleClick('experiences')}
            isShown={showExperiences}
          />
          {'\n'}
          {showExperiences ? (
            experiences.map((experience, i) => (
              <Experience
                key={i}
                {...experience}
                isLast={i === experiences.length - 1}
              />
            ))
          ) : (
            <>
              <Tabs count={2} />
              <Ellipsis />
            </>
          )}
          {'\n'}
          <Tabs />
          {'}'}
          <span className={classes.code}>,</span>
          {'\n'}
          {/* Skills */}
          <Tabs />"<span className={classes.page}>Skills</span>"
          <span className={classes.code}>: </span>
          {'{'}
          <Toggle onClick={() => handleClick('skills')} isShown={showSkills} />
          {'\n'}
          {showSkills ? (
            Object.keys(skills).map((skillCategory, i) => (
              <Skill
                key={i}
                skillCategory={skillCategory}
                skillList={skills[skillCategory]}
                isLast={i === Object.keys(skills).length - 1}
              />
            ))
          ) : (
            <>
              <Tabs count={2} />
              <Ellipsis />
            </>
          )}
          {'\n'}
          <Tabs />
          {'}'}
        </>
      ) : (
        <Ellipsis />
      )}
      {'\n}'}
    </>
  );
};

export default Resume;
