import React, {Dispatch, SetStateAction} from 'react';

interface Props {
  color: string;
  setMenuIsOpened: Dispatch<SetStateAction<boolean>>;
}

export const MenuOpener: React.FC <Props> = ({setMenuIsOpened, color}) => {
  return (
    <div className='menuOpener' onClick={() => {
      setMenuIsOpened(true);
    }}>
      <svg width="32" height="33" className='menuOpener__icon' viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10.5H25" stroke={color} strokeWidth="2"/>
        <path d="M7 16.5H25" stroke={color} strokeWidth="2"/>
        <path d="M7 22.5H25" stroke={color} strokeWidth="2"/>
      </svg>
      <svg width="32" height="32" className='menuOpener__icon--active' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#E6E6F0"/>
        <path d="M7 10H25" stroke={color} strokeWidth="2"/>
        <path d="M7 16H25" stroke={color} strokeWidth="2"/>
        <path d="M7 22H25" stroke={color} strokeWidth="2"/>
      </svg>
    </div>
  );
};

