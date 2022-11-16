import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../../data/dataTeam';

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
            <a className='main__link' href='#team'>
              Команда
            </a>
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

