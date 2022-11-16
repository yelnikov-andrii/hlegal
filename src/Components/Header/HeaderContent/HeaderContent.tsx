import React from 'react';
import { Languages } from '../Languages/Languages';
import { Contacts } from '../Contacts/Contacts';

interface Props {
  backgroundIsWhite: boolean;
}

export const HeaderContent: React.FC <Props> = ({backgroundIsWhite}) => {
  return (
    <div className='header-content'>
      <Languages backgroundIsWhite={backgroundIsWhite} />
      <Contacts backgroundIsWhite={backgroundIsWhite}/>
    </div>
  );
};

