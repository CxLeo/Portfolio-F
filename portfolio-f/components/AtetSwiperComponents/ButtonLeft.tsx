"use Client";
import { useSwiper } from "swiper/react";

const ButtonLeft = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-[72px] h-[72px]  lg:bg-white bg-transparent rounded-full lg:flex hidde justify-center items-center active:scale-105 lg:shadow-[0_4px_4px_0_#00000026] 
      absolute transform -translate-y-1/2 inset-y-1/2 left-1  z-[100] "
      onClick={() => swiper.slidePrev()}
    >
      <svg
        width="21"
        height="32"
        viewBox="0 0 21 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.88404 15.6747L20.146 3.36774L16.599 0.0761716L1.56354 14.0289C0.584058 14.9378 0.584057 16.4115 1.56354 17.3204L16.599 31.2731L20.146 27.9816L6.88404 15.6747Z"
          fill="#898989"
        />
      </svg>
    </button>
  );
};

export default ButtonLeft;
