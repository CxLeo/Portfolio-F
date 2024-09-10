'use client'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import SwiperButtonNext from './SwiperArrow';

export type Slider={
    title:string,
    description:string,
    img:string
}

function NoqClinicSwiper({data}:{data:Slider[]}) {
  return (
    <div className=''>
        <Swiper
            className='rounded-lg'
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
            {data.map((slider,idx)=>(
                <SwiperSlide key={slider.title+idx}>
                <div className="flex flex-col lg:flex-row gap-x-[3%] gap-y-[40px]">
                    <div className="lg:w-[23%] w-full">
                    <p className="text-[16px] leading-[23px]">
                    {slider.title}
                    </p>
                    <p className="text-[16px] leading-[24px] text-[#898989]">
                    {slider.description}
                    </p>
                    </div>
                    <Image width={972} height={600}  alt="design user flows" src={slider.img} className="lg:w-[73.5%] w-full"/>
                </div>
            </SwiperSlide>
            ))}
            <SwiperButtonNext/>
        </Swiper>
    </div>
  )
}

export default NoqClinicSwiper