'use client'
import { useEffect, useRef, useState } from "react";
import { color, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Image from "next/image";
import { useTheme } from "next-themes"
import { cn } from "@/utilities/utilities";
import { IoMdMoon } from "react-icons/io";
import { GoSun } from "react-icons/go";


const NavBar = () => {

  const { theme, setTheme,resolvedTheme } = useTheme()
 

  console.log(theme)


  useEffect(() => {

    setViewportHeight(window.innerHeight);
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [viewportHeight, setViewportHeight] = useState(0);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const navbar = {
    open: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      height: `${viewportHeight}px`,
      backgroundColor: cn(theme === 'light' ? 'white' : 'black'),                    // Solid white
      backdropFilter: 'blur(0px)',             // No blur effect
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
      transition: {
        type: "tween",
        ease: "easeInOut",
        delay: 0.2,
        duration: 0.35,
      },
    },
    closed: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 80px, 0% 80px)",
      height: 80,
      // backgroundColor: "red",                    // Solid white
      // backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white
      backdropFilter: 'blur(10px)',            // Blur effect
      transition: {
        delay: 0.2,
        type: "tween",
        ease: "easeInOut",
        duration: 0.55,
      },
    },
  };

  const navbottom = {
    onOpen: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    },
    onClose: {
      opacity: 0,
      transition: {
        delay: 0
      }
    },
  };

  let srctest;

  switch (resolvedTheme) {
    case 'light':
      srctest = '/images/navbar/sun.png'
      break
    case 'dark':
      srctest = '/images/navbar/moon.png'
      break
    default:
      srctest = '/images/navbar/sun.png'
      break
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={` w-full ah-${isOpen ? "screen" : "[80px]"} sticky top-0 z-[15] flex flex-col overflow-hidden  `}
      variants={navbar}
    >
      <div className="w-full flex-grow">
        <div className="w-full flex ">
          <a href="/" className="w-[35px] h-[50px] mt-[15px] ml-[7.5%]  hover:-translate-y-[2px] transition-transform duration-200 transform">
          <svg width="35" height="50" viewBox="0 0 35 50" fill="" xmlns="http://www.w3.org/2000/svg"
                        className={cn('w-[35px]  h-[50px] hover:-translate-y-[6px] transition-transform duration-200 transform')}
                    >
                        <path d="M20.4122 0.00943498C25.0178 0.00943498 30.3931 0 34.9987 0C35.0002 2.80977 35.0013 6.37122 34.9959 9.181C34.9899 12.1636 33.4481 14.1629 30.8846 15.4768C29.8704 15.9962 28.7627 16.191 27.6285 16.1918C18.6842 16.1964 8.94486 16.1948 0.000611802 16.1941C-0.000908683 13.4032 0.002786 9.90505 0.00277839 7.07504C-0.0261108 4.47452 1.20852 2.51974 3.28475 1.12168C4.42511 0.353656 5.71143 -0.00344206 7.10952 0.00262329C11.5433 0.0215775 15.9777 0.00943498 20.4122 0.00943498Z"
                            fill={cn(theme === 'system' ? 'black' : theme === 'dark' ? 'white' : 'black')} />
                        <path d="M12.4324 21.9101C12.1906 22.1095 12.0386 22.2429 11.8789 22.3665C9.70084 24.0534 8.59622 26.2703 8.92008 29.0096C9.26143 31.8997 10.8921 33.9255 13.6191 34.9976C14.2258 35.2364 15.5098 35.3062 16.1652 35.3941C16.1606 39.8544 16.1606 44.9668 16.1682 49.4263C16.1682 49.8403 16.0101 49.9972 15.5935 49.9957C12.5875 49.9836 9.58148 50.0268 6.57625 49.9707C3.89031 49.9206 1.03713 47.6749 0.299695 45.0987C0.130161 44.5065 0.0252463 43.875 0.0229656 43.2609C0.00395957 36.0484 0.0166385 28.1578 0.00067343 20.9453L0 20.9464C2.83845 20.9464 6.20145 20.9578 8.9596 20.9556C10.1615 20.9548 11.2806 21.2452 12.4324 21.9101Z"
                             fill={cn(theme === 'system' ? 'black' : theme === 'dark' ? 'white' : 'black')}/>
                        <path d="M23.4765 20.957C27.4586 20.9495 30.7079 24.2005 30.7155 28.1998C30.7224 32.2333 27.4814 35.5139 23.4712 35.501C19.2465 35.4874 16.1462 32.2553 16.0999 28.2529C16.0527 24.1944 19.3605 20.9654 23.4765 20.957Z"
                            fill="#7C7C7C" />
                    </svg>
          </a>

          <Image alt="asd"  src={srctest} width={19} height={19} className=" w-[19px] h-[19px]  mt-[26px]  lg:ml-[80.7%] ml-[60%] cursor-pointer hover:-translate-y-[2px] transition-transform duration-200 transform " onClick={()=>{
            theme === 'light'&& setTheme('dark'),
            theme === 'dark' && setTheme('light')
            theme === 'system' && setTheme('light')
          }}/>

          <div className={`mt-[22px] ml-[2.4%] w-[30px] h-[30px] px-[5px] py-[5px]  hover:-translate-y-[2px] transition-transform duration-200 transform bg-red-40  ${isOpen ? "hover:bg-[#D9D9D9]  hover:rounded-lg" : ""}`}>
            <MenuToggle toggle={() => toggleOpen()} />
          </div>

        </div>
        <Navigation toggle={() => toggleOpen()} />
        <motion.div variants={navbottom} animate={isOpen ? "onOpen" : "onClose"} className={`w-full absolute ${isOpen ? "block" : "hidden"} pl-[2.7%] bottom-6 flex`}>
          <p className="font-[500] text-[17px] leading-[23px] font-dmsans">
            Toronto,<br></br>
            Canada
          </p>

          <a href="https://ca.linkedin.com/in/frank-zhang-0947b223a?trk=public_profile_project_contributor-image" className="flex ml-[45%] text-[#898989] self-center hover:text-black">
            LinkedIn
            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" className="self-center ml-[2px]">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.00730356 7.07548L5.0568 2.02598L0.531079 2.02764L0.531627 0.536731L7.60249 0.534133L7.5999 7.605L6.10898 7.60555L6.11064 3.07983L1.06115 8.12933L0.00730356 7.07548Z" fill="#898989" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavBar;