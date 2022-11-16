import React from 'react';
import { Facebook } from '../../UI/Facebook/Facebook';
import { PhoneLink } from '../../UI/PhoneLink/PhoneLink';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer__block'>
          <div className='footer__item'>
            <p className='footer__address'>
              Kyiv, Mechnikova str, 14/1
            </p>
            <a 
              href='https://goo.gl/maps/vZV3qomzSscNh8Lg9' 
              className='footer__link'
              target="_blank"
              rel="noreferrer"
            >
              On map
            </a>
          </div>
          <div className='footer__item'>
            <p className='footer__company'>
              © 2021 HLEGAL Law company, LLC
            </p>
          </div>
          <div className='footer__item'>
            <Facebook 
              color='#24A3FF'
              width={38}
              height={38} 
            />
          </div>
          <div className='footer__item'>
            <PhoneLink className="phoneLink--footer" backgroundIsWhite={false} />
          </div>
          <div className='footer__item'>
            <a href='mailto:contact@forstudy.space' className='footer__email'>
              contact@forstudy.space
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

