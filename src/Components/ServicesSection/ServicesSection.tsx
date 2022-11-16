import React from 'react';
import { Link } from 'react-router-dom';
import { mainServicesArr } from '../../data/dataServices';

export const ServicesSection: React.FC = () => {
  return (
    <section className='services'>
      <h2 className='services__header'>
          What can we do better than others?
        </h2>
        <div className='services__block'>
          {mainServicesArr.map(service => (
            <div 
              key={service.title} 
              className="services__item"
            >
              <div
                className='services__icon' 
                dangerouslySetInnerHTML={{__html: service.icon}}>
              </div>
              <Link className='services__title' to={`/services/${service.id}`}>
                {service.title}
              </Link>
              <p className='services__description'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
    </section>
  );
};

