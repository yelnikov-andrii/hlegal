import React from 'react';
import { teamMembers } from '../../data/dataTeam';
import { Member } from './Member/Member';

export const TeamSection: React.FC = () => {
  return (
    <section className='team'>
      <div className="container">
        <h1 className='team__header'>
          We are used to taking responsibility and always guarantee honest, timely assistance, even in situations where most are powerless.
        </h1>
        <div className='team__block'>
          {teamMembers.map(member => (
            <Member member={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

