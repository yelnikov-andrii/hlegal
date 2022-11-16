import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { TeamEntrySection } from '../Components/TeamEntrySection/TeamEntrySection';
import { teamMembers } from '../data/dataTeam';

export const TeamEntry: React.FC = () => {
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
      <TeamEntrySection teamMembers={teamMembers} />
      <Footer />
    </div>
  );
};

