import React from 'react';

interface Props {
  children: any;
  click: (arg0: boolean) => void;
}

export const Modal: React.FC <Props> = ({children, click}) => {
  return (
    <div className='modal' onClick={() => {
      click(false);
    }}>
      <div className='modal__content' onClick={(e) => {
        e.stopPropagation();
      }}>
        {children}
      </div>
    </div>
  );
};

