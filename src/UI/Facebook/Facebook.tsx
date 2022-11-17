import classNames from 'classnames';
import React from 'react';

interface Props {
  color: string;
  width: number;
  height: number;
}

export const Facebook: React.FC <Props> = ({color, width, height}) => {

  const [isHover, setIsHover] = React.useState(false);
  return (
    <a
      href='http://facebook.com' className={classNames('facebook', {
        'facebook--gray': color === '#B3B3BA'
      })}
      target="_blank"
      rel="noreferrer"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_70590_2714)">
      <path d="M24 12.5733C24 5.90541 18.6274 0.5 12 0.5C5.37258 0.5 0 5.90541 0 12.5733C0 18.5995 4.38823 23.5943 10.125 24.5V16.0633H7.07813V12.5733H10.125V9.91343C10.125 6.88755 11.9165 5.21615 14.6576 5.21615C15.9705 5.21615 17.3438 5.45195 17.3438 5.45195V8.42313H15.8306C14.3399 8.42313 13.875 9.35379 13.875 10.3086V12.5733H17.2031L16.6711 16.0633H13.875V24.5C19.6118 23.5943 24 18.5995 24 12.5733Z" fill={!isHover ? color: '#0085FF'}/>
      </g>
      <defs>
      <clipPath id="clip0_70590_2714">
      <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
      </defs>
      </svg>
    </a>
  );
};

