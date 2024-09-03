'use client'
import { useRef,useState } from "react";
import { color, motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const navbar = {
  open: {
    clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    backgroundColor:"blue",
    transition: {
      type: "tween",
      ease: [0.42, 0, 0.3, 0.1],
      delay: 0.1,
      duration: 0.35,
    },
  },
  closed: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 80px, 0% 80px)",
    // height:80,
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`bg-red-300 w-full h-${isOpen?"screen":"[80px]"} sticky top-0 z-[220] flex justify-end overflo-y-hidden`}
      variants={navbar}
    > 
   
    <div className="mt-[30px] mr-[50px] hover:-translate-y-[2px] transition-transform duration-200 transform">
        <MenuToggle toggle={()=>toggleOpen()}/>
    </div> 
    
    
    </motion.nav>

    
  );
};

export default NavBar;