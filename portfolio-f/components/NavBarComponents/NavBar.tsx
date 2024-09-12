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
          <a href="/" className="w-[35px] h-[50px] mt-[15px] ml-[2.7%]  hover:-translate-y-[2px] transition-transform duration-200 transform">
            <Image src="/images/ai-home/logo.png" alt="Frank Zhang Design - Logo" width={35} height={50} className='w-[35px] h-[50px] ml-[2.7%]  hover:-translate-y-[2px] transition-transform duration-200 transform' />
          </a>

          <Image alt="asd"  src={srctest} width={19} height={19} className="bg-cove w-[19px] h-[19px]  mt-[26px]  lg:ml-[82.7%] ml-[60%] cursor-pointer hover:-translate-y-[2px] transition-transform duration-200 transform " onClick={()=>{
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