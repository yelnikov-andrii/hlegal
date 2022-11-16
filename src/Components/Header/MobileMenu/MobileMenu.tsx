import React, {Dispatch, SetStateAction} from 'react';
import classNames from 'classnames';
import {navLinks } from '../../../data/data';
import { Link } from 'react-router-dom';

interface Props {
  menuIsOpened: boolean;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: React.FC <Props> = ({ menuIsOpened, setMenuIsOpened}) => {
  return (
    <div className={classNames('mobileMenu', {
      'mobileMenu mobileMenu--active': menuIsOpened
    })}>
      <div className="container">
        <button 
          className='mobileMenu__close'
          onClick={() => {
            setMenuIsOpened(false);
          }}
          >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7L25 25" stroke="#EC6F5D" strokeWidth="2"/>
          <path d="M25 7L7 25" stroke="#EC6F5D" strokeWidth="2"/>
        </svg>
        </button>
        <nav className='mobileMenu__list'>
          {navLinks.map(item => (
            <Link 
              to={item.link} 
              className="mobileMenu__link"
              key={item.link}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

