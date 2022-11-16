import React from 'react';

interface Props {
  children: string;
}

export const Paragraph: React.FC <Props> = ({children}) => {

  return (
    <p className='paragraph'>
      {children}
    </p>
  );
};

