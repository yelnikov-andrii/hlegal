import React from 'react';
import { publicationsArr } from '../../data/dataPublications';
import { Button } from '../../UI/Button/Button';
import { Article } from './Article/Article';

export const PublicationsSection: React.FC = () => {
  return (
    <section className='publications'>
      <div className="container">
        <div className='publications__block'>
          <div className='publications__buttons'>
            <button className='publications__button'>
              news
            </button>
            <button className='publications__button publications__button--active'>
              articles
            </button>
          </div>
          <div className='publications__articles'>
            {publicationsArr.map(publication => (
              <Article 
                key={publication.name} 
                publication={publication}
              />
            ))}
            <div className='publications__more'>
            <Button className='' click={() => {}}>
              More articles
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

