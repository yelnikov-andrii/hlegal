import React from 'react';

type Props = {
  list: string[];
}

export const UnOrderedList: React.FC <Props> = ({list}) => {
  return (
    <ul className='service__list unordered-list'>
      {list.map(item => (
        <li className='unordered-list__item'>
          <span className='unordered-list__txt'>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

