import React from 'react';
import { ContactSection } from '../Components/ContactSection/ContactSection';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';

export const Contact: React.FC = () => {
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <ContactSection />
      <Footer />
    </div>
  );
};

