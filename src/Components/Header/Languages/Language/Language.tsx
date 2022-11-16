import classNames from 'classnames';
import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  lang: string;
  langActive: string;
  setLangActive: Dispatch<SetStateAction<string>>;
  backgroundIsWhite: boolean;
}

export const Language: React.FC <Props> = ({
  lang, 
  langActive, 
  setLangActive,
  backgroundIsWhite}) => {
  return (
    <button 
      className={classNames("language", {
        "language--active": langActive === lang,
        "language--gray": backgroundIsWhite,
      })}
      onClick={() => {
        setLangActive(lang);
      }}
    >
      {lang}
    </button>
  );
};

