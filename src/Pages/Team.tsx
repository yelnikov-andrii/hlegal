import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { TeamSection } from '../Components/TeamSection/TeamSection';

export const Team: React.FC = () => {
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
      <TeamSection />
      <div className='footer__wrapper'>
        <Footer />
      </div>
    </div>
  );
};

