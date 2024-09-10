"use Client"
import { useSwiper } from "swiper/react";

 const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-x-[10px] px-2 py-2">
        <button className="w-[41px] h-[41px] bg-[#00C7A8] rounded-full flex justify-center items-center transform active:scale-105" onClick={() => swiper.slidePrev()}>
        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[-4px]">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.91037 0L12 2.15091L4.17926 10.201L12 18.251L9.91037 20.4019L0 10.201L9.91037 0Z" fill="white"/>
        </svg>
        </button>
        <button className="w-[41px] h-[41px] bg-[#00C7A8] rounded-full flex justify-center items-center transform active:scale-105" onClick={() => swiper.slideNext()}>
        <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.08963 20.4023L1.84334e-07 18.2514L7.82074 10.2014L2.5178e-06 2.15131L2.08963 0.000401567L12 10.2014L2.08963 20.4023Z" fill="white"/>
        </svg>
        </button>
    </div>
    
  )
};

export default SwiperButtonNext;