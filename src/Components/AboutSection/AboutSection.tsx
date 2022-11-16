import React from 'react';
import { AboutMainInfo } from './AboutMainInfo/AboutMainInfo';
import { AboutTeam } from './AboutTeam/AboutTeam';
import { Achievements } from './Achievements/Achievements';

export const AboutSection: React.FC = () => {
  return (
    <section className='about'>
      <div className="container">
        <AboutMainInfo />
      </div>
        <AboutTeam />
        <Achievements />
    </section>
  );
};

