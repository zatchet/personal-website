import React, { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

import headshot from '../res/outline.png';
import github from '../res/github.png';
import resume from '../res/resume.png';
import email from '../res/email.png';
import linkedin from '../res/linkedin.png';

const words = ['', 'Hello, World! My name is Zach, and I like to code.'];
const words2 = ['', 'I go to Northeastern University in Boston, where I study computer science.'];
const words3 = ['', 'Check out some of my stuff below ↓'];

const DELAY_TIME = 2500;
const FIRST_LINE_TIME = 2700;
const SECOND_LINE_TIME = 3600;
const THIRD_LINE_TIME = 1850;

const MyCard = () => {
  useEffect(() => {
    setTimeout(() => {
      setFirstLineDone(true);
    }, DELAY_TIME + FIRST_LINE_TIME);
    setTimeout(() => {
      setSecondLineDone(true);
    }, DELAY_TIME + FIRST_LINE_TIME + SECOND_LINE_TIME);
    setTimeout(() => {
      setThirdLineDone(true);
    }, DELAY_TIME + FIRST_LINE_TIME + SECOND_LINE_TIME + THIRD_LINE_TIME);
  }, []);
  
  const [firstLineDone, setFirstLineDone] = useState(false);
  const [secondLineDone, setSecondLineDone] = useState(false);
  const [thirdLineDone, setThirdLineDone] = useState(false);

  return (
    <div class="card-container">
      <div class="card">
        <img src={headshot} alt="Zachary Rippas" class="img"/>
        <div class="card-writer">
          <Typewriter
            words={words}
            cursor={!firstLineDone}
            cursorStyle='|'
            typeSpeed={35}
            delaySpeed={DELAY_TIME}
          />
          <br/>
          <br/>
          <Typewriter
            words={words2}
            cursor={firstLineDone && !secondLineDone}
            cursorStyle='|'
            typeSpeed={35}
            delaySpeed={DELAY_TIME + FIRST_LINE_TIME}
          />
          <br/>
          <br/>
          <Typewriter
            words={words3}
            cursor={firstLineDone && secondLineDone && !thirdLineDone}
            cursorStyle='|'
            typeSpeed={35}
            delaySpeed={DELAY_TIME + FIRST_LINE_TIME + SECOND_LINE_TIME}
          />
         <br/>
        </div>
        <div class="links">
          <a class="link-container" href="https://github.com/zatchet" target="_blank" rel='noreferrer'>
            <img class="link" src={github} alt="Github"/>
          </a>
          <a class="link-container" href="https://linkedin.com/in/rippas" target="_blank" rel='noreferrer'>
            <img class="link" src={linkedin} alt="LinkedIn"/>
          </a>
          <a class="link-container" href="/Rippas_Zachary.pdf" target="_blank" rel='noreferrer' title='Resume'>
            <img class="link" src={resume} alt="Resume"/>
          </a>
          <a class="link-container" href="mailto:zach@rippas.org" target="_blank" rel='noreferrer'>
            <img class="link" src={email} alt="Email"/>
          </a>      
        </div>
      </div>
    </div>
  );
};

export default MyCard;
