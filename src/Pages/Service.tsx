import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { PublicationsMain } from '../Components/Main/Publications/PublicationsMain';
import { ServiceSection } from '../Components/ServiceSection/ServiceSection';

export const Service: React.FC = () => {
  React.useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, []);
  return (
    <div>
      <div className='services__topBlock'>
        <Header color="#fff" backgroundIsWhite={false} />
        <div className='services__wrapper'>
          <div className="container">
            <ServiceSection />
          </div>
        </div>
      </div>
      <PublicationsMain header='Reccomended'/>
      <Footer />
    </div>
  );
};

