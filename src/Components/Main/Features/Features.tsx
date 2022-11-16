import React from 'react';
import { ServicesSection } from '../../ServicesSection/ServicesSection';

export const Features: React.FC = () => {
  const featuresArr = [
    'Consistent',
    'Customer oriented',
    'Innovative',
    'Business oriented'
  ];

  return (
    <main className='features'>
      <div className='features__blockIdeaServices'>
        <ul className='features__list'>
          {featuresArr.map(feature => (
            <li className='features__item' key={feature}>
              {feature}
            </li>
          ))}
        </ul>
        <div>
          <h2 className='features__titleh2'>
            We turn the idea of legal services 
          </h2>
          <p className='features__description'>
            Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve a number of important decisions for the industry. Many of them form the practice of applying the law of the sea in Ukraine.
          </p>
        </div>
      </div>
      <div>
        <a className='main__link' href='#services'>
          Services
        </a>
        <ServicesSection />
      </div>
    </main>
  );
};

