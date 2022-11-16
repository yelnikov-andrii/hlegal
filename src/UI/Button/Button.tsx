import React from 'react';

type Props = {
  children: string;
}

export const Button: React.FC <Props> = ({children}) => {
  return (
    <button className='button'>
      {children}
    </button>
  );
};

