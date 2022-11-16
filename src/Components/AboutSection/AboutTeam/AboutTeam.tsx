import React from 'react';
import team from '../../../images/Team/Team.png';

export const AboutTeam: React.FC = () => {
  return (
    <div className='about-team about__team'>
      <div className='about-team__wrapper'>
      <img src={team} alt="" className='about-team__img'/>
      <h2 className='about-team__header'>
        Team
      </h2>
      </div>
      <div className="container">
      <div className='about-team__block'>
        <p className='about-team__txt'>
          The historically unchanged legal profession has begun to reformat in recent years. Clients are feeling this, but law firms are still resisting evolution. Clients need convenience, simplicity, transparent payment. Google, IBM WatsOn, Symantec Clearwell prove that the technological revolution in legal services has begun and is imminent.
          Quality is what we care about the most.
          It's simple. If you are unhappy with our work, we will refund your money. We trust our clients. And we want our clients to trust us too.
        </p>
        <h2 className='about-team__title'>
          Quality is what we care about the most.
        </h2>
      </div>
      </div>
    </div>
  );
};

