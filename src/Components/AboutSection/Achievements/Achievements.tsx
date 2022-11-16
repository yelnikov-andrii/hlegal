import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { achievements } from '../../../data/dataAbout';

export const Achievements: React.FC = () => {
  return (
    <div className='achievements'>
      <div className="container">
      <h3 className='achievements__header'>
        achievements
      </h3>
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={4}
        pagination={{ clickable: true }}
        className="achievements__swiper"
      >
          {achievements.map(achievement => (
            <SwiperSlide className='achievements__item' key={achievement.id}>
              <img src={achievement.img} alt=""/>
            </SwiperSlide>
            ))}
      </Swiper>
      <Swiper
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="achievements__swiper--mobile"
      >
          {achievements.map(achievement => (
            <SwiperSlide className='achievements__item' key={achievement.id}>
              <div className='achievements__itemWrapper'>
                <img src={achievement.img} alt=""/>
              </div>
            </SwiperSlide>
            ))}
      </Swiper>
      </div>
    </div>
  );
};

