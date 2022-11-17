import React from 'react';
import { Facebook } from '../../../UI/Facebook/Facebook';

export const ContactList: React.FC = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <ul className='contactList contact__list'>
      <li className='contactList__item'>
        <a 
          className='contactList__link' 
          href='https://goo.gl/maps/vZV3qomzSscNh8Lg9' 
          target="_blank"
          rel="noreferrer"
        >
          Kyiv, 
          <br />
          Mechnikova str, 14
        </a>
      </li>
      <li className='contactList__item'>
        <a 
          className='contactList__link' 
          href='tel:0800 211 927' 
        >
          0800 211 927
        </a>
        <br />
        <a 
          className='contactList__link contactList__link--email' href='mailto:contact@forstudy.space'
        >
          contact@forstudy.space
        </a>
      </li>
      <li 
        className='contactList__item'
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
      <Facebook 
        color={isHover ? '#0085FF' : '#24A3FF'}
        width={38}
        height={38} 
      />
        <a 
          className='contactList__txt'
          href='http://facebook.com'
          target="_blank"
          rel="noreferrer"
        >
          Our page on facebook
        </a>
      </li>
    </ul>
  );
};

