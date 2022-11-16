import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { TeamSection } from '../Components/TeamSection/TeamSection';

export const Team: React.FC = () => {
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <TeamSection />
      <div className='footer__wrapper'>
        <Footer />
      </div>
    </div>
  );
};

