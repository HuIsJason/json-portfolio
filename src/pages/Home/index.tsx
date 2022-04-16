import React, { useCallback, useState } from 'react';
import { Grid } from '@material-ui/core';

import { About, Links } from './types';
import { Ellipsis, Tabs, Toggle } from '../../components';
import useStyles from './styles';
import { useJsonStyles } from '../../styles';
import data from '../../db/about.json';
import ProfilePic from '../../assets/ProfilePic.jpg';

const Home: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(true);
  const [showAbout, setShowAbout] = useState<boolean>(true);
  const [showPreviously, setShowPreviously] = useState<boolean>(true);
  const [showEnjoy, setShowEnjoy] = useState<boolean>(true);

  const classes = useStyles();
  const jsonClasses = useJsonStyles();
  const { about, links }: { about: About; links: Links } = data;

  const handleClick = useCallback(
    (field: 'links' | 'about' | 'previously' | 'enjoy') => {
      switch (field) {
        case 'links':
          setShowLinks(!showLinks);
          break;
        case 'about':
          setShowAbout(!showAbout);
          break;
        case 'previously':
          setShowPreviously(!showPreviously);
          break;
        case 'enjoy':
          setShowEnjoy(!showEnjoy);
          break;
      }
    },
    [showLinks, showAbout, showPreviously, showEnjoy]
  );

  return (
    <Grid container>
      <Grid item xs={5}>
        <img className={classes.pic} src={ProfilePic} alt="" />
        <Tabs count={2} />
        {'{'}
        <Toggle onClick={() => handleClick('links')} isShown={showLinks} />
        {'\n'}
        <Tabs count={3} />
        {showLinks ? (
          <>
            "<span className={jsonClasses.page}>Resume</span>"
            <span className={jsonClasses.code}>: </span>"
            <span className={jsonClasses.text}>
              <a
                className={jsonClasses.text}
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                /Resume.pdf
              </a>
            </span>
            "<span className={jsonClasses.code}>,</span>
            {'\n'}
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
            <Tabs count={3} />"
            <span className={jsonClasses.page}>LinkedIn</span>"
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
            "
          </>
        ) : (
          <Ellipsis />
        )}
        {'\n'}
        <Tabs count={2} />
        {'}'}
      </Grid>
      <Grid className={classes.about} item xs={7}>
        {'{'}
        <Toggle onClick={() => handleClick('about')} isShown={showAbout} />
        {'\n'}
        <Tabs />
        {showAbout ? (
          <>
            "<span className={jsonClasses.project}>I am a</span>"
            <span className={jsonClasses.code}>: </span>"
            <span className={jsonClasses.text}>{about.position}</span>"
            <span className={jsonClasses.code}>,</span>
            {'\n'}
            <Tabs />"<span className={jsonClasses.project}>Currently</span>"
            <span className={jsonClasses.code}>: </span>"
            <span className={jsonClasses.text}>{about.status}</span>"
            <span className={jsonClasses.code}>,</span>
            {'\n'}
            <Tabs />"<span className={jsonClasses.project}>Previously at</span>"
            <span className={jsonClasses.code}>: </span>[
            <Toggle
              onClick={() => handleClick('previously')}
              isShown={showPreviously}
            />
            {'\n'}
            {showPreviously ? (
              about.previously.map((previous, i) => (
                <React.Fragment key={i}>
                  <Tabs count={2} />"
                  <span className={jsonClasses.text}>{previous}</span>"
                  {i !== about.previously.length - 1 && (
                    <>
                      <span className={jsonClasses.code}>,</span>
                      {'\n'}
                    </>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <Tabs count={2} />
                <Ellipsis />
              </>
            )}
            {'\n'}
            <Tabs />]<span className={jsonClasses.code}>,</span>
            {'\n'}
            <Tabs />"<span className={jsonClasses.project}>Studying at</span>"
            <span className={jsonClasses.code}>: </span>"
            <span className={jsonClasses.text}>{about.school}</span>"
            <span className={jsonClasses.code}>,</span>
            {'\n'}
            <Tabs />"<span className={jsonClasses.project}>I enjoy</span>"
            <span className={jsonClasses.code}>: </span>[
            <Toggle onClick={() => handleClick('enjoy')} isShown={showEnjoy} />
            {'\n'}
            {showEnjoy ? (
              about.interests.map((interest, i) => (
                <React.Fragment key={i}>
                  <Tabs count={2} />"
                  <span className={jsonClasses.text}>{interest}</span>"
                  {i !== about.interests.length - 1 && (
                    <>
                      <span className={jsonClasses.code}>,</span>
                      {'\n'}
                    </>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <Tabs count={2} />
                <Ellipsis />
              </>
            )}
            {'\n'}
            <Tabs />]<span className={jsonClasses.code}>,</span>
            {'\n'}
            <Tabs />"<span className={jsonClasses.info}>Contact me at</span>"
            <span className={jsonClasses.code}>: </span>"
            <span className={jsonClasses.text}>{about.email}</span>"
          </>
        ) : (
          <Ellipsis />
        )}
        {'\n}'}
      </Grid>
    </Grid>
  );
};

export default Home;
