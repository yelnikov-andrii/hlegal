import React from 'react';
import { Link } from 'react-router-dom';
import { publicationsArr } from '../../../data/dataPublications';
import { PublicationMain } from './Publication/PublicationMain';

interface Props {
  header: string;
}

export const PublicationsMain: React.FC <Props> = ({header}) => {
  return (
    <div className='publications-main'>
      <div className="container">
      <Link className='main__link' to='/publications'>
        Publications
        <svg 
          width="12" 
          height="13" 
          viewBox="0 0 12 13" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 2L8 6.5L3.5 11" stroke="#24A3FF" strokeWidth="2"/>
        </svg>
      </Link>
      <h2 className='publications-main__header'>
        {header}
      </h2>
      <div className='publications-main__block'>
       {publicationsArr.slice(0, 3).map(publication => (
        <PublicationMain 
          key={publication.name} 
          publication={publication} 
        />
       ))}
      </div>
      </div>
    </div>
  );
};

