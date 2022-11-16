import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { Trust } from '../Components/Main/Trust/Trust';
import { ServicesSection } from '../Components/ServicesSection/ServicesSection';

export const Services: React.FC = () => {
  return (
    <div>
      <div className='services__topBlock'>
        <Header color="#fff" backgroundIsWhite={false} />
        <div className='services__wrapper'>
          <div className="container">
            <ServicesSection />
          </div>
        </div>
      </div>
      <Trust />
      <Footer />
    </div>
  );
};

