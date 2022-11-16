import classNames from 'classnames';
import React from 'react';

interface Props {
  className: string;
  backgroundIsWhite: boolean;
}

export const PhoneLink: React.FC <Props> = ({className, backgroundIsWhite}) => {
  return (
    <a 
      href='tel:0800 211 927' 
      className={classNames(className + ' phoneLink', {
        'phoneLink--gray': backgroundIsWhite
      })}
    >
      0800 211 927
    </a>
  );
};

