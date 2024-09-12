'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import SwiperButtonNext from './SwiperArrow';

const data = ["user experience", "visual design","interactive experience"];

function HomeHeroSwiper() {
  return (
    <div className=''>
        <Swiper
            className='rounded-lg  max-h-[140px] '
            spaceBetween={20}
            slidesPerView={1}  
            loop
            modules={[Autoplay]}
            autoplay={{
                delay:2000
            }}
            direction='vertical'
            allowTouchMove={false}
            // breakpoints={{
            // 375: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1440: {
     
            //     spaceBetween: 30,
            // },
            // }}
            >
            {data.map((text,idx)=>(
                <SwiperSlide key={text+idx}>
                <div className=" h-fit">
                    <p className='font-dmsans font-[450] leading-[60px] text-[60px] lg:text-[120px] lg:leading-[128px] text-[#00C7A8]'>{text}</p>
                </div>
            </SwiperSlide>
            ))} 
        </Swiper>
    </div>
  )
}

export default HomeHeroSwiper;