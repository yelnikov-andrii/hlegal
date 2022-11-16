import React from 'react';
import { ServicesSection } from '../../ServicesSection/ServicesSection';
import { Link } from 'react-router-dom';

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
        <Link className='main__link' to='/services'>
          Services 
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
        <ServicesSection />
      </div>
    </main>
  );
};

