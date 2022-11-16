import React from 'react';
import { Link } from 'react-router-dom';

interface PublicationObj {
  img?: string;
  name: string;
  date: string;
  txt: string;
  id: number;
};

interface Props {
  publication: PublicationObj;
}

export const Article: React.FC <Props> = ({publication}) => {
  return (
    <div className='publications__article article'>
      <img 
        src={publication.img}
        alt=""
        className='article__img'
      />
      <div className='article__wrapper'>
      <Link to={`/publications/${publication.id}`} className='article__name'>
        {publication.name}
      </Link>
      <p className='article__date'>
        {publication.date}
      </p>
      <p className='article__txt'>
        {publication.txt}
      </p>
      </div>
    </div>
  );
};

