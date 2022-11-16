import React from 'react';
import { Link } from 'react-router-dom';

interface MemberObj {
  name: string;
  img: string;
  position: string;
  title: string;
  id: number;
}

interface Props {
  member: MemberObj;
}

export const Member: React.FC <Props> = ({member}) => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div className='member team__member'>
      <img 
        src={member.img} 
        alt="" 
        className='member__img'
      />
      <Link 
        className='member__link'
        to={`/team/${member.id}`}
        onMouseOver={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <h4 className='member__name'>
          {member.name}
        </h4>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#F5F5FA"/>
          <path d="M13.5 23.5L20.5 16.5L13.5 9.5" stroke={!isHover ? "#24A3FF" : "#F0145A"} strokeWidth="2"/>
        </svg>
      </Link>
      <p className='member__position'>
        {member.position}
      </p>
    </div>
  );
};

