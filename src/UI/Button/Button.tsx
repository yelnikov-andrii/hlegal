import React from 'react';

type Props = {
  children: string;
  className: string;
}

export const Button: React.FC <Props> = ({children, className}) => {
  return (
    <button className={'button ' + className}>
      {children}
    </button>
  );
};

