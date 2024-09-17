"use Client";
import { useSwiper } from "swiper/react";

const ButtonRight = () => {
  const swiper = useSwiper();
  return (
    <button
      className="w-[72px] h-[72px]  lg:bg-white bg-transparent rounded-full lg:flex hidde justify-center items-center active:scale-105 lg:shadow-[0_4px_4px_0_#00000026] 
      absolute transform -translate-y-1/2 inset-y-1/2 lg:right-0 -right-12 z-[100]"
      onClick={() => swiper.slideNext()}
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
          d="M14.116 16.3253L0.854005 28.6323L4.40101 31.9238L19.4365 17.9711C20.4159 17.0622 20.4159 15.5885 19.4365 14.6796L4.40102 0.726866L0.854009 4.01844L14.116 16.3253Z"
          fill="#898989"
        />
      </svg>
    </button>
  );
};

export default ButtonRight;
