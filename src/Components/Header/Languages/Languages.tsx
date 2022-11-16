import classNames from 'classnames';
import React from 'react';
import { Language } from './Language/Language';

interface Props {
  backgroundIsWhite: boolean;
}

export const Languages: React.FC <Props> = ({ backgroundIsWhite }) => {
  const langs = [
    'УК',
    'РУ',
    'EN'
  ];

  const [langActive, setLangActive] = React.useState('УК');

  return (
    <div className={classNames('languages', {
      'languages--bgWhite': backgroundIsWhite === true
    })}>
      {langs.map(lang => (
        <Language 
          key={lang} 
          lang={lang}
          langActive={langActive}
          setLangActive={setLangActive}
          backgroundIsWhite={backgroundIsWhite}
        />
      ))}
    </div>
  );
};

