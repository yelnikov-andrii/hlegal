import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { PublicationSection } from '../Components/PublicatonSection/PublicationSection';

export const Publication: React.FC = () => {
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
      <PublicationSection />
      <Footer />
    </div>
  );
};

