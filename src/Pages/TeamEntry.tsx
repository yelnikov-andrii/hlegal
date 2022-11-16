import React from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { TeamEntrySection } from '../Components/TeamEntrySection/TeamEntrySection';
import { teamMembers } from '../data/dataTeam';

export const TeamEntry: React.FC = () => {
  return (
    <div>
      <Header color="#323264" backgroundIsWhite={true} />
      <TeamEntrySection teamMembers={teamMembers} />
      <Footer />
    </div>
  );
};

