'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';


function AtetSwiper({data}:{data:string[]}) {
  return (
    <div className=''>
        <Swiper
            className='rounded-lg relative  '
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Navigation]}
            // navigation={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            loop
            >
            {data.map((vid,idx)=>(
                <SwiperSlide key={vid+idx}>
                    <video width={1334} height={761} loop preload="auto" playsInline autoPlay className=" lg:w-[80%] w-full mx-auto">
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </SwiperSlide>
            ))}
            <ButtonLeft/>
            <ButtonRight/>
        </Swiper>
    </div>
  )
}

export default AtetSwiper