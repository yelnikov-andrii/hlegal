import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { PublicationsSection } from '../Components/PublicationsSection/PublicationsSection';

export const Publications: React.FC = () => {
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <PublicationsSection />
      <Footer />
    </div>
  );
};

