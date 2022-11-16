import React from 'react';
import { AboutSection } from '../Components/AboutSection/AboutSection';
import { Header } from '../Components/Header/Header';
import { Separator } from '../UI/Separator/Separator';
import { Footer } from '../Components/Footer/Footer';

export const About: React.FC = () => {
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <AboutSection />
      <Separator />
      <Footer />
    </div>
  );
};

