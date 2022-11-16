import React from 'react';
import { HeaderContent } from './HeaderContent/HeaderContent';
import { Logo } from './Logo/Logo';
import { NavHeader } from './NavHeader/NavHeader';
import { MobileMenu } from './MobileMenu/MobileMenu';

interface Props {
  color: string;
  backgroundIsWhite: boolean;
}

export const Header: React.FC <Props> = ({color, backgroundIsWhite}) => {
  const [menuIsOpened, setMenuIsOpened] = React.useState(false);

  return (
    <header className='header'>
    <div className="container">
      <Logo 
        setMenuIsOpened={setMenuIsOpened}
        color={color}
      />
      <HeaderContent backgroundIsWhite={backgroundIsWhite} />
      <NavHeader backgroundIsWhite={backgroundIsWhite} />
      <MobileMenu 
        menuIsOpened={menuIsOpened}
        setMenuIsOpened={setMenuIsOpened}
      />
    </div>
    </header>
  );
};

