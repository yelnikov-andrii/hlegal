import React from 'react';
import { publicationsArr } from '../../../data/dataPublications';
import { PublicationMain } from './Publication/PublicationMain';

interface Props {
  header: string;
}

export const PublicationsMain: React.FC <Props> = ({header}) => {
  return (
    <div className='publications-main'>
      <div className="container">
      <a className='main__link' href='#publications'>
        Publications
      </a>
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

