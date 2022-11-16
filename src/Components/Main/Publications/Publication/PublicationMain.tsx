import React from 'react';

interface PublicationObj {
  name: string;
  date: string;
  img?: string;
  txt: string;
  id: number;
}

interface Props {
  publication: PublicationObj;
}

export const PublicationMain: React.FC <Props> = ({publication}) => {
  return (
    <div className='publication-main publications-main__item'>
      <img 
        src={publication.img} 
        alt=""
        className='publication-main__img'
      />
      <h4 className='publication-main__name'>
        {publication.name}
      </h4>
      <p className='publication-main__date'>
        {publication.date}
      </p>
      <p className='publication-main__txt'>
        {publication.txt}
      </p>
    </div>
  );
};

