import React from 'react';

export const OrderedList: React.FC = () => {
  return (
    <ol className='ordered-list publication__list'>
      <li className='ordered-list__item'>
        <span className='ordered-list__txt'>
          Transparency and awareness of users about the processing of personal data.
        </span>
      </li>
      <li className='ordered-list__item'>
        <span className='ordered-list__txt'>
          Lack of proper user consent for the processing of personal data for the purpose of personalizing advertising.
        </span>
      </li>
    </ol>
  );
};

