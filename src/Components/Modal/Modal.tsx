import React from 'react';
import { Form } from '../ContactSection/Form/Form';

interface Props {
  click: (arg0: boolean) => void;
}

export const Modal: React.FC <Props> = ({click}) => {
  return (
    <div className='modal' onClick={() => {
      click(false);
    }}>
      <div className='modal__content' onClick={(e) => {
        e.stopPropagation();
      }}>
        <Form click={click} formModal={true} />
      </div>
    </div>
  );
};

