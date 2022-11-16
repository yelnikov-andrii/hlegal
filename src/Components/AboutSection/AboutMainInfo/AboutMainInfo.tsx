import React from 'react';
import { mainInfoList } from '../../../data/dataAbout';
export const AboutMainInfo: React.FC = () => {
  return (
    <div className='about-mainInfo about__mainBlock'>
      <div className='about-mainInfo__block'>
        <h1 className='about-mainInfo__header'>
          We turn over the idea of legal services
        </h1>
        <p className='about-mainInfo__txt'>
          Consolidating many years of experience and practice, the company's lawyers accompany complex projects and achieve the adoption of a number of decisions that are important for the industry. Many people form the practice of applying the law of the sea in Ukraine.
          HLEGAL is a reliable business partner, confirmed by stable cooperation with international law firms, the trust of large Ukrainian and international companies, and the recognition of professional ratings.
        </p>
      </div>
      <ul className='about-mainInfo__list'>
        {mainInfoList.map(item => (
          <li className='about-mainInfo__item' key={item.name}>
            <div>
            <span 
              dangerouslySetInnerHTML={{__html: item.img}}
              className="about-mainIfo__img">
            </span>
            <span className='about-mainInfo__quantity'>
              {item.quantity}
            </span>
            </div>
            <p className='about-mainInfo__name'>
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

