import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../../data/dataTeam';
import { Link } from 'react-router-dom';

export const MainTeam: React.FC = () => {
  return (
    <div className='main-team'>
      <div className="container">
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {teamMembers.map(teamMember => (
          <SwiperSlide className='main-team__slide' key={teamMember.name}>
          <div className='main-team__photo'>
          <img src={teamMember.img} alt=""/>
          </div>
          <div className='main-team__description'>
            <Link className='main__link' to='/team'>
              Команда
              <svg 
                width="12" 
                height="13" 
                viewBox="0 0 12 13" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.5 2L8 6.5L3.5 11" stroke="#24A3FF" strokeWidth="2"/>
              </svg>
            </Link>
            <h2 className='main-team__header'>
              {teamMember.title}
            </h2>
            <h4 className='main-team__name'>
              {teamMember.name}
            </h4>
            <p className='main-team__position'>
              {teamMember.position}
            </p>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

