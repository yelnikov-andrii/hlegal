import React from 'react';

type Props = {
  children: string;
  className: string;
  click: (arg0: boolean) => void;
}

export const Button: React.FC <Props> = ({children, className, click}) => {
  return (
    <button className={'button ' + className} onClick={() => {
      click(true);
    }}>
      {children}
    </button>
  );
};

