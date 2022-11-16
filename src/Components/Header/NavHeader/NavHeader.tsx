import classNames from 'classnames';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../../data/data';

interface Props {
  backgroundIsWhite: boolean;
}

export const NavHeader: React.FC <Props> = ({backgroundIsWhite}) => {
  const location = useLocation();
  return (
    <nav className='navheader'>
      {navLinks.map(item => (
        <Link 
          to={item.link}
          className={classNames("navheader__link", {
            "navheader__link--blue": backgroundIsWhite,
            "navheader__link--active": location.pathname === item.link || location.pathname.includes(item.name)
          })}
          key={item.link}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

