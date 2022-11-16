import React from 'react';
import { theyTrustUsArr } from '../../../data/data';

export const Trust: React.FC = () => {
  return (
    <div className='trust'>
      <div className="container">
        <h3 className='trust__header'>
          They already trust us
        </h3>
        <div className='trust__companies'>
          {theyTrustUsArr.map(item => (
            <img 
              src={item.img} 
              alt=""
              className='trust__company'
              key={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

