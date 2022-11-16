import React from 'react';
import { Separator } from '../../UI/Separator/Separator';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Features } from './Features/Features';
import { PublicationsMain } from './Publications/PublicationsMain';
import { MainTeam } from './Team/MainTeam';
import { Trust } from './Trust/Trust';

export const Main: React.FC = () => {
  return (
    <div className='main'>
      <div className='main__topBlock'>
      <Header color="#fff" backgroundIsWhite={false} />
      <div className="container">
        <h1 className='main__header'>
          you legal solutions provider
        </h1>
        <Features />
      </div>
      </div>
      <MainTeam />
      <Trust />
      <PublicationsMain header='We have something to tell'/>
      <Separator />
      <div className='footer__wrapper'>
        <Footer />
      </div>
    </div>
  );
};

