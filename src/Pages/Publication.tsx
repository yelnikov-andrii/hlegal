import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { PublicationSection } from '../Components/PublicatonSection/PublicationSection';
export const Publication: React.FC = () => {
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <PublicationSection />
      <Footer />
    </div>
  );
};

