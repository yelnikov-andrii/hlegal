import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { PublicationsSection } from '../Components/PublicationsSection/PublicationsSection';

export const Publications: React.FC = () => {
  React.useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, []);
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <PublicationsSection />
      <Footer />
    </div>
  );
};

