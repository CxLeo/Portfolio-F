'use client'
import { useEffect, useRef,useState } from "react";
import { color, motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Image from "next/image";



const NavBar = () => {
    const [viewportHeight, setViewportHeight] = useState(0);
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

    const [isOpen, toggleOpen] = useCycle(false, true);
    

  const navbar = {
    open: {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      height:`${viewportHeight}px`,
      backgroundColor:"white",                    // Solid white
      backdropFilter: 'blur(0px)',             // No blur effect
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
      transition: {
        type: "tween",
        ease:"easeInOut",
        delay: 0.2,
        duration: 0.35,
      },
    },
    closed: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 80px, 0% 80px)",
      height:80,
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white
      backdropFilter: 'blur(10px)',            // Blur effect
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      transition: {
        delay: 0.2,
        type: "tween",
        ease: "easeInOut",
        duration: 0.25,
      },
    },
  };

  const navbottom = {
    onOpen: {
      opacity:1,
      transition:{
       delay:0.5
      }
    },
    onClose: {
      opacity:0,
      transition:{
        delay:0
       }
    },
  };


  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={` w-screen ah-${isOpen?"screen":"[80px]"} sticky top-0 z-[20] flex flex-col overflow-hidden `}
      variants={navbar}
    > 
    <div className="w-full flex-grow">
      <div className="w-full flex ">
          <Image src="/images/ai-home/logo.png" alt="Frank Zhang Design - Logo" width={41} height={20} className='w-[41px] h-[20px] mt-[26px] ml-[2.7%]  hover:-translate-y-[2px] transition-transform duration-200 transform'/>
          <Image src="/images/navbar/sun.png" alt="Frank Zhang Design light mode" width={19} height={19} className='w-[19px] h-[19px] mt-[26px] lg:ml-[82.7%] ml-[60%]  hover:-translate-y-[2px] transition-transform duration-200 transform'/>
          <Image src="/images/navbar/moon.png" alt="Frank Zhang Design - dark mode" width={19} height={19} className='w-[19px] h-[19px] mt-[26px] ml-[2.7%]  hover:-translate-y-[2px] transition-transform duration-200 transform'/>
          

          <div className={`mt-[22px] ml-[2.4%] w-[30px] h-[30px] px-[5px] py-[5px]  hover:-translate-y-[2px] transition-transform duration-200 transform ${isOpen?"hover:bg-[#D9D9D9] hover:rounded-lg":""}`}>
              <MenuToggle toggle={()=>toggleOpen()}/>
          </div>
          
      </div>
      <Navigation toggle={()=>toggleOpen()}/>
      <motion.div  variants={navbottom} animate={isOpen ? "onOpen" : "onClose"} className={`w-full absolute ${isOpen?"block":"hidden"} pl-[2.7%] bottom-6 flex`}>
        <p className="font-[500] text-[17px] leading-[23px] font-dmsans">
          Toronto,<br></br>
          Canada
        </p>

        <a href="https://ca.linkedin.com/in/frank-zhang-0947b223a?trk=public_profile_project_contributor-image" className="flex ml-[45%] text-[#898989] self-center hover:text-black">
          LinkedIn
          <svg width="8" height="9" viewBox="0 0 8 9" fill="none" className="self-center ml-[2px]">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.00730356 7.07548L5.0568 2.02598L0.531079 2.02764L0.531627 0.536731L7.60249 0.534133L7.5999 7.605L6.10898 7.60555L6.11064 3.07983L1.06115 8.12933L0.00730356 7.07548Z" fill="#898989"/>
          </svg>
        </a>
      </motion.div>
    </div>
    </motion.nav>
  );
};

export default NavBar;