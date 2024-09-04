'use client'
import * as React from "react";
import { motion } from "framer-motion";
import NavItem from "../NavItem";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const navs = [
  {
      label:"Home",
      url:"#"
  },
  {
      label:"Work",
      url:"#works"
  },
  {
      label:"About",
      url:"#about"
  },
  {
      label:"Contact",
      url:"mailto:franketns@gmail.com"
  }
]

export const MenuItem = ({ i,toggle }:{i:number,toggle:any}) => {
  return (
    <motion.li
      variants={variants}
    >
      <div className='w-[300px]' onClick={toggle}>
          <NavItem label={navs[i]?.label} url={navs[i]?.url}/>
      </div>
    </motion.li>
  );
};
