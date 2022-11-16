import React from 'react';
import { AboutSection } from '../Components/AboutSection/AboutSection';
import { Header } from '../Components/Header/Header';
import { Separator } from '../UI/Separator/Separator';
import { Footer } from '../Components/Footer/Footer';

export const About: React.FC = () => {
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
      <AboutSection />
      <Separator />
      <Footer />
    </div>
  );
};

