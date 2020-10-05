import React from 'react';
import { Grid } from '@material-ui/core';

import { Tabs } from '../../components/common';
import { About, Links } from './types';

import useStyles from './styles';
import { useJsonStyles } from '../../styles';

import data from '../../db/about.json';
import ProfilePic from '../../assets/ProfilePic.jpg';

const Home: React.FC = () => {
  const classes = useStyles();
  const jsonClasses = useJsonStyles();
  const { about, links }: { about: About; links: Links } = data;

  return (
    <Grid container>
      <Grid item xs={5}>
        <img className={classes.pic} src={ProfilePic} alt="" />
        <Tabs count={2} />
        {'{\n'}
        <Tabs count={3} />"<span className={jsonClasses.page}>GitHub</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>
          <a
            className={jsonClasses.text}
            href={links.GitHub.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {links.GitHub.linkName}
          </a>
        </span>
        "<span className={jsonClasses.code}>,</span>
        {'\n'}
        <Tabs count={3} />"<span className={jsonClasses.page}>LinkedIn</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>
          <a
            className={jsonClasses.text}
            href={links.LinkedIn.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {links.LinkedIn.linkName}
          </a>
        </span>
        "{'\n'}
        <Tabs count={2} />
        {'}'}
      </Grid>
      <Grid item xs={7}>
        {'{\n'}
        <Tabs />"<span className={jsonClasses.project}>I am</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>{about.position}</span>"
        <span className={jsonClasses.code}>,</span>
        {'\n'}
        <Tabs />"<span className={jsonClasses.project}>studying at</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>{about.school}</span>"
        <span className={jsonClasses.code}>,</span>
        {'\n'}
        <Tabs />"<span className={jsonClasses.project}>currently</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>{about.status}</span>"
        <span className={jsonClasses.code}>,</span>
        {'\n'}
        <Tabs />"<span className={jsonClasses.project}>I enjoy</span>"
        <span className={jsonClasses.code}>: </span>[
        {about.interests.map((interest, i) => (
          <React.Fragment key={i}>
            {'\n'}
            <Tabs count={2} />"
            <span className={jsonClasses.text}>{interest}</span>"
            {i !== about.interests.length - 1 && (
              <span className={jsonClasses.code}>,</span>
            )}
          </React.Fragment>
        ))}
        {'\n'}
        <Tabs />]<span className={jsonClasses.code}>,</span>
        {'\n'}
        <Tabs />"<span className={jsonClasses.project}>Contact me via</span>"
        <span className={jsonClasses.code}>: </span>
        {'{\n'}
        <Tabs count={2} />"<span className={jsonClasses.info}>email</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>{about.email}</span>"
        <span className={jsonClasses.code}>,</span>
        {'\n'}
        <Tabs count={2} />"<span className={jsonClasses.info}>phone</span>"
        <span className={jsonClasses.code}>: </span>"
        <span className={jsonClasses.text}>{about.phone}</span>"{'\n'}
        <Tabs />
        {'}\n}'}
      </Grid>
    </Grid>
  );
};

export default Home;
