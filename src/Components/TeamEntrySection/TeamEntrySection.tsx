import React from 'react';
import { useParams } from 'react-router-dom';
import { MemberInfo } from './MemberInfo/MemberInfo';

interface MemberObj {
  name: string;
  img: string;
  position: string;
  title: string;
  id: number;
}

interface Props {
  teamMembers: MemberObj[];
}

export const TeamEntrySection: React.FC <Props> = ({ teamMembers }) => {
  const params = useParams();
  const selectedMember = teamMembers.find((member: MemberObj) => params.id && member.id === +params.id);

  return (
    <section className='team-entry'>
      <div className="container">
        <div className='team-entry__block'>
          <div className='team-entry__blockImg'>
           <img src={selectedMember?.img} alt=""/>
          </div>
          <MemberInfo member={selectedMember} />
        </div>
      </div>
    </section>
  );
};

