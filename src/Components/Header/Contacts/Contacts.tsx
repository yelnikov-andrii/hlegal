import classNames from 'classnames';
import React from 'react';
import { Facebook } from '../../../UI/Facebook/Facebook';
import { PhoneLink } from '../../../UI/PhoneLink/PhoneLink';

interface Props {
  backgroundIsWhite: boolean;
}

export const Contacts: React.FC <Props> = ({backgroundIsWhite}) => {
  return (
      <ul className='contacts__list'>
        <li className='contacts__item'>
          <a 
            href='https://goo.gl/maps/vZV3qomzSscNh8Lg9' className={classNames('contacts__link', {
              'contacts__link--gray': backgroundIsWhite
            })}
            target="_blank"
            rel="noreferrer"
          >
            Kyiv, Mechnikova str, 14/1
          </a>
        </li>
        <li className='contacts__item'>
          <PhoneLink 
            className="phoneLink--header"
            backgroundIsWhite={backgroundIsWhite}
          />
        </li>
        <li className='contacts__item'>
          <Facebook 
            color={!backgroundIsWhite ? 'white' : '#B3B3BA'}
            width={25}
            height={25}
          />
        </li>
      </ul>
  );
};

