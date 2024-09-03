'use client'
import { useRef,useState } from "react";
import { color, motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const navbar = {
  open: {
    clipPath: `polygon(0% 0%, 100% 0%, 100% 1000%, 0% 1000%)`,
    backgroundColor:"blue",
    transition: {
      type: "tween",
      ease: [0.42, 0, 0.3, 0.1],
      delay: 0.3,
      duration: 0.35,
    },
  },
  closed: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 80px, 0% 80px)",
    transition: {
      delay: 0.2,
      type: "tween",
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const NavBar0 = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="bg-red-300 w-full sticky top-0 z-[20] flex"
      variants={navbar}
    > 
      <div className="self-end">
        <MenuToggle toggle={() => toggleOpen()} />
      </div>
      
      <Navigation />
      
    </motion.nav>
  );
};

export default NavBar0;